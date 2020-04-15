import { EmojiDataMap } from '../types';

export default function joinData(emojis: EmojiDataMap, data: EmojiDataMap) {
  Object.keys(data).forEach((hexcode) => {
    emojis[hexcode] = data[hexcode];
  });
}
