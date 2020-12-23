# dotenv-find

> Find all the .env files within a root path, and within all  the child directories, minus the excludedDirectories.

## Installation

Use your favorite package management tool.

```bash

# NPM
npm i @tylergarlick/dotenv-find

# Yarn
yarn add @tylergarlick/dotenv-find

```

### Usage

```ts
import find from 'dotenv-find'

const run = async () => {
  
  const path = 'path_to_your_root_projects'
  const excludedDirectories = ['node_modules', '.git']
  const envFileNames = ['.env', 'test.env', 'development.env']

  const results = await find(path, excludedDirectories, envFileNames)
  console.log(results)
}

// Output
// =================
//

[ 
  '/Users/tylergarlick/Projects/dotenv-find/test/fixtures/.env',
  '/Users/tylergarlick/Projects/dotenv-find/test/fixtures/A/.env',
  '/Users/tylergarlick/Projects/dotenv-find/test/fixtures/A/.env.bad',
  '/Users/tylergarlick/Projects/dotenv-find/test/fixtures/A/.env.test',
  '/Users/tylergarlick/Projects/dotenv-find/test/fixtures/A/.env.test.with.a.lot.of.extensions.env',
  '/Users/tylergarlick/Projects/dotenv-find/test/fixtures/B/.env',
  '/Users/tylergarlick/Projects/dotenv-find/test/fixtures/B/B1/.env',
  '/Users/tylergarlick/Projects/dotenv-find/test/fixtures/C/.env' 
] 

```
