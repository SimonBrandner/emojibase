import { LATEST_CLDR_VERSION } from 'emojibase';
import fetchAndCache from './fetchAndCache';
import parseAnnotations from '../parsers/parseAnnotations';
import formatLocale from '../helpers/formatLocale';
import { CLDRAnnotationMap } from '../types';

export default function loadAnnotations(
  locale: string,
  derived: boolean = false, // Contains modifiers and sequences
  version: string = LATEST_CLDR_VERSION,
): Promise<CLDRAnnotationMap> {
  const releaseVersion = version.replace(/\./g, '-');
  const folderName = derived ? 'annotationsDerived' : 'annotations';
  const pathLocale = formatLocale(locale);

  return (
    fetchAndCache(
      `http://unicode.org/repos/cldr/tags/release-${releaseVersion}/common/${folderName}/${pathLocale}.xml`,
      `cldr-${version}/${folderName}-${locale}.json`,
      data => parseAnnotations(version, data),
    )
      // Some annotation files do not exist for specific locales,
      // so instead of crashing the entire generator process,
      // just return an empty object and log.
      .catch(() => ({}))
  );
}
