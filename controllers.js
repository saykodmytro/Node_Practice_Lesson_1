import fs from "fs/promises";
import path from "path";
import { checkExtension } from "./helpers/checkExtension.js";

const folderPath = path.resolve("files");
console.log("folderPath: ", folderPath);

export const createFile = async (req, res) => {
  const nameFile = req.body.fileName;
  const { extension, result } = checkExtension(req.body.fileName);
  if (!result) {
    res.status(400).json({
      message: `Sorry this app doesn't support files this ${extension} extension`,
    });
    return;
  }

  const filePath = path.resolve("files", nameFile);
  try {
    await fs.writeFile(filePath, req.body.content, "utf8");
    res.status(201).json({ message: "File was created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating file" });
  }
};
