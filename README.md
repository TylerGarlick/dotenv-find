# find-dotenv

> Find all the .env files within a directory.

## Installation

Use your favorite package management tool.

```bash
npm i find-dotenv | yarn add find-dotenv
```

### Usage

```ts
import findDotEnv from 'find-dotenv'

const run = async () => {
  const path = 'path_to_your_root_projects'
  const excludedDirectories = ['node_modules', '.git']
  const envFiles = ['.env', 'test.env', 'development.env']

  const results = await findDotEnv(path, excludedDirectories, envFiles)
  console.log(results)
  /*
  Output: 
  [ 
    '/Users/tylergarlick/Projects/find-dotenv/test/fixtures/.env',
	'/Users/tylergarlick/Projects/find-dotenv/test/fixtures/A/.env',
	'/Users/tylergarlick/Projects/find-dotenv/test/fixtures/A/.env.bad',
	'/Users/tylergarlick/Projects/find-dotenv/test/fixtures/A/.env.test',
	'/Users/tylergarlick/Projects/find-dotenv/test/fixtures/A/.env.test.with.a.lot.of.extensions.env',
	'/Users/tylergarlick/Projects/find-dotenv/test/fixtures/B/.env',
	'/Users/tylergarlick/Projects/find-dotenv/test/fixtures/B/B1/.env',
	'/Users/tylergarlick/Projects/find-dotenv/test/fixtures/C/.env' ] 
   */
}

```

