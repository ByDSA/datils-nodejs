import { existsSync, mkdirSync } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "url";
import fs from "node:fs";
import { logError } from "../log";

export function readIfExistsSync(p: string) {
  return fs.existsSync(p) ? fs.readFileSync(p) : null;
}

export function checkFileExists(filePath: string) {
  if (!existsSync(filePath)) {
    const errorMsg = `File doesn't exist: ${filePath}`;

    logError(errorMsg);
    throw new Error(errorMsg);
  }
}

export function checkFileNotExists(filePath: string) {
  if (existsSync(filePath)) {
    const errorMsg = `File already exists: ${filePath}`;

    logError(errorMsg);
    throw new Error(errorMsg);
  }
}

export function mkdir(p: string) {
  return new Promise((s) => {
    const r = mkdirSync(p, "-p");

    s(r);
  } );
}

export function currentFolderPathOf(filePath: string = path.resolve(__filename)) {
  return path.resolve(dirname(fileURLToPath(filePath) ?? currentFilePath()));
}

export function parentFolderPathOf(filePath = path.resolve(__filename)) {
  return path.resolve(currentFolderPathOf(filePath), "..");
}

export function currentFilePath() {
  return path.resolve(fileURLToPath(path.resolve(__filename)));
}

export * from "./files";

export * from "./errors";

export * from "./cmd";
