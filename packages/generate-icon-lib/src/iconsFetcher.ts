import { getPageByName } from './services';
import { IFigmaCanvas, IFigmaDocument, IIcon } from './types';
import * as _ from 'lodash';

/**
 * fetch Pages : 0.3 Crypto
 * Logo of crypto in Coin
 */
export function getCryptoIcons(document: IFigmaDocument): IIcon[] {
  const iconsCryptoCanvas = getPageByName(document, '03. Crypto') as any;

  console.log('icons Canvas', iconsCryptoCanvas.name);

  const iconCryptoSet: IIcon[] = iconsCryptoCanvas.children
    .find((i) => i.name.toLocaleLowerCase() === 'Icons'.toLocaleLowerCase())
    .children.find((i) => i.name.toLocaleLowerCase() === 'Section'.toLocaleLowerCase())
    .children.find((i) => i.name.toLocaleLowerCase() === 'Frame 1000002200'.toLocaleLowerCase())
    .children.find((i) => i.name.toLocaleLowerCase() === 'Coin'.toLocaleLowerCase())
    .children.filter((cryptoIcon) => cryptoIcon.name.includes('Size=XL'))
    .map((icon) => {
      const match = icon.name.match(/Asset=([^,]+)/);
      const name = match ? match[1] : null;

      return {
        id: icon.id,
        jsxName: name,
        svgName: name,
        type: 'coins',
        size: 'coins',
      } as IIcon;
    })
    .filter((icon) => !['_No data', 'Skeleton'].includes(icon.jsxName));
  return iconCryptoSet;
}

/**
 * fetch Pages : My Icons
 * Fetching only 16XS icons
 */

export function getBaseIcons(document: IFigmaDocument): IIcon[] {
  const iconsCanvas = getPageByName(document, '01. MyIcons') as any;

  const iconByName = iconsCanvas.children
    .find((i) => i.name.toLocaleLowerCase() === '16 XS'.toLocaleLowerCase())
    // in ledger structure there is the name and the icons delete name called frame XXXXXX
    // I need to fix this type but for now it works fine
    // will work with IFigmaCanvas probably
    .children.filter((i: IFigmaCanvas) => i.name.indexOf('Frame') == -1)?.[0] as IFigmaCanvas;

  return iconByName.children.map((icon) => {
    const name = _.upperFirst(_.camelCase(icon.name.replace(/([0-9a-z])([0-9A-Z])/g, '$1 $2')));

    return {
      id: icon.id,
      jsxName: name,
      svgName: name,
      type: 'icons',
      size: 'xs',
    } as IIcon;
  });
}
