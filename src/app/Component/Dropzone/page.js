"use client ";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoIosAddCircle } from "react-icons/io";

export default function Dropzone({ name, setValue, className }) {
  const [importedImage, setImportedImage] = useState();
  const [droppedFileName, setDroppedFileName] = useState("");

  const onDrop = (acceptedFiles) => {
    // Handle dropped files
    const file = acceptedFiles[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        notifyError("File size exceeds 5MB");
      } else if (
        !["image/jpeg", "image/png", "image/webp"].includes(file.type)
      ) {
        console.log("Unsupported file type. Only JPEG and PNG are allowed");
      } else {
        setValue(name, file);
        const imageUrl = URL.createObjectURL(file);
        setImportedImage(imageUrl);
        setDroppedFileName(file.name); // Set the dropped file name
      }
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={className}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>File name: {droppedFileName}</p>
      ) : (
        <div
          className="flex flex-col justify-center items-center
        "
        >
          <IoIosAddCircle className="text-6xl text-center" />
          <p>Select or Drop to Upload an file</p>
        </div>
      )}
      {droppedFileName && <p>File name: {droppedFileName}</p>}{" "}
      {/* Display dropped file name */}
    </div>
  );
}
