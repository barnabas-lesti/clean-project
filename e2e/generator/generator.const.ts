import { type FileSystemEntry } from "./generator.types";

export const SANDBOX_FOLDER_PATH = "./e2e/sandbox";

export const SANDBOX_FILE_STRUCTURE: FileSystemEntry[] = [
  { folder1: [{ "file1.txt": "" }, { folder2: [{ "file2.txt": "" }, { "file3.txt": "" }] }, { folder3: [] }] },
  { folder4: [{ "file4.txt": "" }, { "file5.txt": "" }] },
  { folder5: [{ folder6: [{ "file6.txt": "" }] }, { "file7.txt": "" }] },
  { "file8.txt": "" },
  { "file9.txt": "" },
];
