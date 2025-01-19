"use client"

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {useDropzone} from 'react-dropzone';

const FileUploader: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const router = useRouter();
    const [fileId, setFileId] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
      setFile(acceptedFiles[0] || null);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: { "video/*": [] },
      maxFiles: 1,
    });

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
        <div className="upload-container">
          <h1>Upload file here:</h1>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
              isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-gray-50"
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-blue-500 font-medium">Drop the file here...</p>
            ) : file ? (
              <p className="text-gray-700">
                Selected file: <span className="font-medium">{file.name}</span>
              </p>
            ) : (
              <p className="text-gray-700">
                Drag & drop a file here, or{" "}
                <span className="text-blue-500 underline cursor-pointer">click to select</span>
              </p>
            )}
          </div>
          
          <button onClick={handleUpload} className="upload-button underline">
            {loading === null && "Get started"}
            {loading === true && "Loading..."}
            {loading === false && "Here we go"}
          </button>
        </div>
      );
}

export default FileUploader;