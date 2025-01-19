"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const FileUploader: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const router = useRouter();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (!file) {
          alert("Please select the file!");
          return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            await fetch("http://localhost:5000/upload", {
              method: "POST",
              body: formData,
            });
      
            // alert("Upload Success!");
            router.push("/animation");
          } catch (error) {
            console.error("Upload Failed", error);
            alert("Something went wrong. Please try again later or contact our team.");
          }
          
    }

    return (
        <div className="upload-container">
          <h1>Upload file here:</h1>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="file-input"
          />
          <button onClick={handleUpload} className="upload-button underline">
            Upload
          </button>
        </div>
      );
}

export default FileUploader;