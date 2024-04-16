"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Button from "./Component/Button/Button";

const PreviousPage = dynamic(() => import("./Pages/Previous/page"));
const UploadBoxPage = dynamic(() => import("./Pages/UploadBox/page"));

export default function Home() {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePreviousClick = () => setCurrentPage("previous");
  const handleUploadBoxClick = () => setCurrentPage("uploadBox");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sky-400">
      <div className="shadow-xl p-24 rounded-xl bg-slate-50 relative">
        {currentPage === "previous" && <PreviousPage />}
        {currentPage === "uploadBox" && <UploadBoxPage />}
        {!currentPage && (
          <div className="grid grid-cols-2 gap-8">
            <Button
              handleClick={handlePreviousClick}
              content="Previously Enrolled"
              className="bg-blue-500 text-white p-2 rounded-md w-full text-center"
            />
            <Button
              handleClick={handleUploadBoxClick}
              content="Enroll Now"
              className="bg-blue-500 text-white p-2 rounded-md w-full text-center"
            />
          </div>
        )}
      </div>
    </main>
  );
}
