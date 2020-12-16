import { existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import * as R from 'rambda'

const EXCLUDED_DIRECTORIES = ['node_modules', '.git']
const FILES = ['.env', '.env.sample', '.env.test', '.env.develop']

const walkSync = (
  path: string,
  excludedDirectories: string[] = EXCLUDED_DIRECTORIES,
): unknown | unknown[] | string[] =>
  statSync(path).isDirectory()
    ? readdirSync(path)
        .filter(
          (path) =>
            !excludedDirectories.some((excludedDirectory) =>
              path.includes(excludedDirectory),
            ),
        )
        .map((f) => walkSync(join(path, f)))
    : path

const getEnvFiles = async (
  basePath: string,
  excludedDirectories: string[] = EXCLUDED_DIRECTORIES,
  envFiles = FILES,
): Promise<string[]> => {
  const files = (await walkSync(basePath, excludedDirectories)) as string[]

  // (file: string) => !FILES.some((envFile) => envFile.includes(file))
  return (R.flatten(files) as string[]).filter(
    (file): boolean => !envFiles.includes(file),
  )
}

/**
 *
 * @param {String} path
 * @param {String[]} excludedDirectories
 *
 * @param envFiles
 * @returns Promise<string[]>
 */
export default async (
  path: string,
  excludedDirectories: string[] = EXCLUDED_DIRECTORIES,
  envFiles: string[] = FILES,
): Promise<string[]> => {
  return ((await getEnvFiles(
    path,
    excludedDirectories,
    envFiles,
  )) as string[]).filter(async (file) => existsSync(file))
}
