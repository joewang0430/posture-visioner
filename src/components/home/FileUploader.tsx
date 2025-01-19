"use client"

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FileUploader: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const router = useRouter();
    const [fileId, setFileId] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleUpload = async () => {

        if (!file) {
          alert("Please select the file!");
          return;
        }

        setLoading(true);

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
              alert("Upload Failed. Please try again later or contact our team.");
              return;
            }
      
            // alert("Upload Success!");
            setLoading(false);
            // router.push("/animation");
          } catch (error) {
            console.error("Upload Failed", error);
            alert("Something went wrong. Please try again later or contact our team.");
          }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedFileId = localStorage.getItem('uploadedFileId');
            setFileId(storedFileId);
        }
    }, []);

    return (
      <div className=" flex flex-col items-start">
        <div className="flex w-full">
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="file-input text-left"
          />
        </div>
          <div className="h-4"></div>
        <button
          onClick={handleUpload}
          className="px-6 py-4 w-64 rounded-lg text-white font-semibold shadow-md transition-all duration-300 bg-blue-700 hover:underline"
        >
          {loading === null && "Get started "}
          {loading === true && "Loading..."}
          {loading === false && "Here we go"}
        </button>
      </div>
    );
    
    
}

export default FileUploader;