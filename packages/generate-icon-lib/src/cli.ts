import path from 'path';
import meow from 'meow';
import chalk from 'chalk';
import { CodedError, ERRORS, IIcon } from './types';
import {
  generateReactComponents,
  generateIconManifest,
  swapGeneratedFiles,
  createFigmaConfig,
  getFigmaDocument,
  downloadSvgsToFs,
  getGitCustomDiff,
  renderIdsToSvgs,
  getPageByName,
  prechecks,
  getIconsByNames,
} from './services';
import { handleError } from './utils';
import { render, unmount } from './view';
import { getCryptoIcons } from './iconsFetcher';

async function main() {
  await prechecks();
  const cli = meow(
    `
	Usage
	  $ ${path.basename(process.argv[1])} --file=<file-key>

	Options
	  --file, -f    File Key from Figma
	  --help        Show this message

	Examples
	  $ ${path.basename(process.argv[1])} --file=EEggMA9IV81CYzCSI8LFEUOY
`,
    {
      hardRejection: false,
      flags: {
        file: {
          type: 'string',
          alias: 'f',
        },
      },
    }
  );

  const fileEnvId = process.env.FIGMA_ICON_FILE_ID;

  if (!fileEnvId && !cli.flags.file) {
    cli.showHelp(1);
  }

  const figmaConfig = createFigmaConfig(fileEnvId || cli.flags.file);
  render({ fileKey: fileEnvId || cli.flags.file });

  /* 1. Request the figma document, to source all visual nodes */
  render({
    spinners: [{ text: 'Finding the file in Figma...' }],
  });

  const document = await getFigmaDocument(figmaConfig);
  render({
    spinners: [{ success: true, text: 'Found the Figma file 👌' }, { text: 'Finding all Icons in the designs...' }],
  });

  /* 2. Filter nodes for our Icons page */
  const pagesToFetch = [
    // {
    //   fileName: '01. MyIcons',
    //   icons: ['16 XS'],
    //   type: 'icons',
    //   name: 'xs',
    // },
    {
      fileName: '03. Crypto',
      icons: ['Icons'],
      type: 'coins',
      name: 'coins',
    },
  ];

  let icons = {};

  const iconCryptoSet = getCryptoIcons(document);

  console.log('iconSet', iconCryptoSet);

  return null;
  pagesToFetch.forEach((pageToFetch) => {
    const iconsCanvas = getPageByName(document, pageToFetch.fileName);
    if (!iconsCanvas) {
      throw new CodedError(
        ERRORS.NO_ICONS_PAGE,
        'Expected an "Icons" page to exist in the Figma File. Please rename your primary page to "Icons" if you have not already.'
      );
    }

    console.log(pageToFetch.name, 'page fetched');
    console.log('canvas', iconsCanvas);

    /* 3. Transform the Icons page into a flat dictionary of icons, labeled by their path */
    const newIcons = getIconsByNames(iconsCanvas, pageToFetch.icons[0], pageToFetch.type, pageToFetch.name);

    icons = { ...icons, ...newIcons };
  });

  const iconIds = Object.keys(icons);

  console.log('ici');
  return null;
  if (!iconIds.length) {
    throw new CodedError(
      ERRORS.NO_ICONS_IN_SETS,
      'Expected one or more icon-sets to be in the "Icons" page. Please try again when you have created Frames to group icon-sets; refer to documentation for more details.'
    );
  }

  /* 4. Request Figma services to render Icon nodes as individual SVGs */
  render({
    spinners: [{ text: 'Rendering on the Figma platform...' }],
  });
  const iconSvgUrls = await renderIdsToSvgs(iconIds, figmaConfig);

  /* 4. Pull down all rendered SVGs to update our local working package */
  render({
    spinners: [
      {
        success: true,
        text: 'Rendered Icons on the Figma platform 🙌',
      },
    ],
    progress: {
      text: 'Gathering Figma renders...',
      percent: 0,
    },
  });

  let downloadsCompleted = 0;
  await downloadSvgsToFs(iconSvgUrls, icons, () => {
    downloadsCompleted += 1;
    render({
      progress: {
        text: 'Gathering Figma renders...',
        percent: downloadsCompleted / iconIds.length,
      },
    });
  });

  console.log('icons', icons);

  render({
    spinners: [
      {
        success: true,
        text: 'Downloaded and processed SVG renders 👍',
      },
      {
        text: 'Generating React Components...',
      },
    ],
  });

  /* 5. Generate React Components from the SVGs */

  await generateReactComponents(icons);

  render({
    spinners: [
      {
        success: true,
        text: 'Created React Components ⚛️ ✨',
      },
      {
        text: 'Generating Icon Manifest...',
      },
    ],
  });

  /* 6. Generate React Components from the SVGs */
  const [previousIconManifest, nextIconManifest] = await generateIconManifest(icons);

  render({
    spinners: [
      {
        success: true,
        text: 'Created Icon Manifest 📓 🔥',
      },
      {
        text: 'Applying changes...',
      },
    ],
  });

  /* 7. Apply all new files, while removing previous dirs/files entirely. */
  const touchedPaths = await swapGeneratedFiles(previousIconManifest, nextIconManifest);

  render({
    spinners: [
      {
        success: true,
        text: 'Applied changes to working directory 💇‍',
      },
    ],
  });

  /* 8. Finish. Print stats. */

  try {
    render({
      diff: await getGitCustomDiff(touchedPaths),
    });
  } catch (err) {
    // Swallow git errors, and continue with closing the CLI. 🤙
  }

  unmount();
}

main()
  .then(() => {
    console.log('Bai 👋');
  })
  .catch((err) => handleError(err));

process.addListener('unhandledRejection', (err) => handleError(err));
