import 'reflect-metadata';

import { Server } from 'warthog';

export function getServer(AppOptions = {}) {
  return new Server(
    {
      introspection: true,
      openPlayground: false,
      warthogImportPath: 'warthog',
      // resolversPath: [
      //   process.cwd() + '/**/*.resolver.ts',
      // ],
      ...AppOptions
    },
    // Make sure TypeORM does not auto-update the DB schema so that we know our CLI commands
    // are making the changes
    { synchronize: false }
  );
}
