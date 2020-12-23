import { existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import * as R from 'rambda'

export const EXCLUDED_DIRECTORIES = ['node_modules', '.git']
export const FILE_NAMES = ['.env', '.env.sample', '.env.test', '.env.develop']

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
  ignoredDirectories: string[] = EXCLUDED_DIRECTORIES,
  fileNames = FILE_NAMES,
): Promise<string[]> => {
  const files = (await walkSync(basePath, ignoredDirectories)) as string[]
  return (R.flatten(files) as string[]).filter(
    (file): boolean => fileNames.some(env => file.includes(env)))
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
  envFiles: string[] = FILE_NAMES,
): Promise<string[]> => {
  return ((await getEnvFiles(
    path,
    excludedDirectories,
    envFiles,
  )) as string[]).filter(async (file) => existsSync(file))
}