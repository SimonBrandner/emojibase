import path from 'path';
import { ShortcodeMap } from '../types';

export default function loadShortcodes(): Promise<ShortcodeMap> {
  // eslint-disable-next-line
  return Promise.resolve(require(path.resolve(__dirname, '../resources/shortcodes.js')).default);
}
