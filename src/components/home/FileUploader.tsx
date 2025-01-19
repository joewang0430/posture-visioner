"use client"

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FileUploader: React.FC = () => {
  // TESTING
    const [file, setFile] = useState<File | null>(null);
    const router = useRouter();
    const [fileId, setFileId] = useState<string | null>(null);

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
        formData.append("video", file);

        try {
            const response = await fetch("http://127.0.0.1:5000/upload", {
              method: "POST",
              body: formData,
            });

            const data = await response.json();

            if (response.ok) {
              const field = data.file_id
              localStorage.setItem("file_id", field);
              router.push("/animation");
            } else {
              alert("Upload Failed");
            }
      
            // alert("Upload Success!");
            router.push("/animation");
          } catch (error) {
            console.error("Upload Failed", error);
            alert("Something went wrong. Please try again later or contact our team.");
          }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedFileId = localStorage.getItem('file_id');
            setFileId(storedFileId);
        }
    }, []);

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