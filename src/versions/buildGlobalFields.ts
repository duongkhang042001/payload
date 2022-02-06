import { Field } from '../fields/config/types';
import { SanitizedGlobalConfig } from '../globals/config/types';

export const buildVersionGlobalFields = (global: SanitizedGlobalConfig): Field[] => [
  {
    name: 'version',
    type: 'group',
    fields: global.fields,
  },
  {
    name: 'autosave',
    type: 'checkbox',
    index: true,
  },
];