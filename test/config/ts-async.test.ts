import assert from 'node:assert/strict';
import test from 'node:test';
import { resolve } from '../../src/util/path.js';
import { execFactory } from '../helpers/execKnip.js';

const cwd = resolve('fixtures/config/ts-async');

const exec = execFactory(cwd);

test('Support loading ts async function for configuration', async () => {
  assert.equal(exec('knip'), '');
});
