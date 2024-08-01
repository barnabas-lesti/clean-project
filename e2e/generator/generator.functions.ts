import fs from "node:fs";
import path from "path";

import { SANDBOX_FILE_STRUCTURE, SANDBOX_FOLDER_PATH } from "./generator.const";
import { type FileSystemEntry } from "./generator.types";

export function createSandbox() {
  const currentParentPath = path.join(process.cwd(), SANDBOX_FOLDER_PATH);
  deleteSandbox();
  createSandboxEntry(currentParentPath, SANDBOX_FILE_STRUCTURE);
}

export function deleteSandbox() {
  deleteFolder(SANDBOX_FOLDER_PATH);
}

export function doesSandboxFolderExist() {
  return doesFolderExist(SANDBOX_FOLDER_PATH);
}

function deleteFolder(folderPath: string) {
  try {
    fs.rmSync(folderPath, { recursive: true, force: true });
  } catch (err) {
    console.error(err);
  }
}

function createSandboxEntry(currentPath: string, entries: FileSystemEntry[]) {
  for (const entry of entries) {
    const name = Object.keys(entry)[0];
    const value = entry[name];
    const isFile = typeof value === "string";
    const isEmptyFolder = Array.isArray(value) && value.length === 0;
    const entryPath = path.join(currentPath, name);

    if (isFile) {
      createFile(entryPath, value);
    } else if (isEmptyFolder) {
      createFolderIfDoesNotExist(entryPath);
    } else {
      createSandboxEntry(entryPath, value as FileSystemEntry[]);
    }
  }
}

function createFile(pathWithName: string, content: string) {
  const folderPath = getFileParentFolderPath(pathWithName);
  try {
    createFolderIfDoesNotExist(folderPath);
    fs.writeFileSync(pathWithName, content);
  } catch (err) {
    console.error(err);
  }
}

function getFileParentFolderPath(filePath: string) {
  return path.dirname(filePath);
}

function createFolderIfDoesNotExist(pathWithName: string) {
  try {
    if (!doesFolderExist(pathWithName)) {
      fs.mkdirSync(pathWithName, { recursive: true });
    }
  } catch (err) {
    console.error(err);
  }
}

function doesFolderExist(folderPath: string) {
  return fs.existsSync(folderPath);
}
