import { getPageByName } from './services';
import { IFigmaDocument, IIcon } from './types';

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
  return iconsCryptoCanvas;
}
