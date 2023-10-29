import { Extension } from "./getColorByExtension";

export const getExtentionFromFileName = (fileName: string) => {
  return fileName.split(".").pop() as Extension;
};
