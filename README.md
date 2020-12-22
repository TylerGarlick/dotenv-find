# find-dotenv

> Find all the .env files within a directory.

## Installation

Use your favorite package management tool.

```bash
npm i dotenv-find | yarn add dotenv-find
```

### Usage

```ts
import findDotEnv from 'dotenv-find'

const run = async () => {
  const path = 'path_to_your_root_projects'
  const excludedDirectories = ['node_modules', '.git']
  const envFiles = ['.env', 'test.env', 'development.env']

  const results = await findDotEnv(path, excludedDirectories, envFiles)
  console.log(results)
  /*
  Output: 
  [ 
    '/Users/tylergarlick/Projects/dotenv-find/test/fixtures/.env',
	'/Users/tylergarlick/Projects/dotenv-find/test/fixtures/A/.env',
	'/Users/tylergarlick/Projects/dotenv-find/test/fixtures/A/.env.bad',
	'/Users/tylergarlick/Projects/dotenv-find/test/fixtures/A/.env.test',
	'/Users/tylergarlick/Projects/dotenv-find/test/fixtures/A/.env.test.with.a.lot.of.extensions.env',
	'/Users/tylergarlick/Projects/dotenv-find/test/fixtures/B/.env',
	'/Users/tylergarlick/Projects/dotenv-find/test/fixtures/B/B1/.env',
	'/Users/tylergarlick/Projects/dotenv-find/test/fixtures/C/.env' ] 
   */
}

```