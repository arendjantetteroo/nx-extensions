import { chain, noop, Rule } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { addDepsToPackageJson, addPackageWithInit } from '@nrwl/workspace';

export default function (schema: Schema): Rule {
  return chain([
    schema.unitTestRunner === 'jest'
      ? addPackageWithInit('@nrwl/jest')
      : noop(),
    schema.e2eTestRunner === 'cypress'
      ? addPackageWithInit('@nrwl/cypress')
      : noop(),
    addDepsToPackageJson(
      {},
      {
        'svelte-jester': '^1.3.0',
        'svelte': '^3.32.3',
        'svelte-check': '^1.1.34',
        'svelte-preprocess': '^4.6.8',
        '@tsconfig/svelte': '^1.0.10'
      }
    ),
  ]);
}
