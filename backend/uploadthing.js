import { createUploadthing } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter = {
  userUpload: f({
    fileTypes: ["pdf", "docx"],
    maxFileSize: "10MB",
    maxFiles: 1
  }).onUploadComplete(({ file }) => {
    console.log("✅ Upload complete:", file.url);
  })
};
