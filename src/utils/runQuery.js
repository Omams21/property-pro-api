import { createAgentTables, createPropertiesTables } from './queryFunctions';

(async () => {
  await createAgentTables();
  await createPropertiesTables();
})();
