
import type { Config } from 'drizzle-kit';

import * as dotenv from 'dotenv';

dotenv.config({
    path: ".env.local"
})

export default({
  schema: './server/schema.ts',
  out: './server/migrations',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.POSTGRES_URL!
  },
});