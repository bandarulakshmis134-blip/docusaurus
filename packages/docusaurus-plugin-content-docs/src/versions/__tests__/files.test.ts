import {describe, expect, it} from 'vitest';
import path from 'path';
import {DEFAULT_PLUGIN_ID} from '@docusaurus/utils';
import {getVersionSidebarsPath} from '../files';

describe('getVersionSidebarsPath', () => {
  it('returns the JSON versioned sidebar path', async () => {
    await expect(
      getVersionSidebarsPath('/site', DEFAULT_PLUGIN_ID, '1.0.0'),
    ).resolves.toBe(
      path.join('/site', 'versioned_sidebars', 'version-1.0.0-sidebars.json'),
    );
  });
  it('returns the JSON versioned sidebar path when using a version name', async () => {
    await expect(
      getVersionSidebarsPath('/site', DEFAULT_PLUGIN_ID, '2.0.0'),
    ).resolves.toBe(
      path.join('/site', 'versioned_sidebars', 'version-2.0.0-sidebars.json'),
    );
  });
  it('returns the JavaScript versioned sidebar path when it exists', async () => {
    const siteDir = path.join(__dirname, 'fixtures');
    const expectedPath = path.join(
      siteDir,
      'versioned_sidebars',
      'version-1.0.0-sidebars.js',
    );

    await expect(
      getVersionSidebarsPath(siteDir, DEFAULT_PLUGIN_ID, '1.0.0'),
    ).resolves.toBe(expectedPath);
  });
});
