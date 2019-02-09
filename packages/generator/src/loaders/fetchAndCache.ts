import chalk from 'chalk';
import fetch from 'node-fetch';
import log from '../helpers/log';
import readCache from '../helpers/readCache';
import writeCache from '../helpers/writeCache';

export default async function fetchAndCache<T>(
  url: string,
  name: string,
  parser: (text: string) => T,
): Promise<T> {
  // Check the cache first
  const cache = readCache(name);

  if (cache) {
    return Promise.resolve(cache as T);
  }

  log.info('load', `Fetching ${name} data from ${chalk.gray(url)}`);

  // Parse the response
  let text = '';

  try {
    // eslint-disable-next-line compat/compat
    text = await fetch(url).then(response => {
      if (response.ok) {
        return response.text();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    });
  } catch (error) {
    log.error('load', `Failed to fetch ${url}: ${error.message}`);

    return Promise.reject(error);
  }

  // Cache the data
  const data = parser(text);

  writeCache(name, data);

  log.success('load', `Fetched and cached ${name}`);

  return Promise.resolve(data);
}
