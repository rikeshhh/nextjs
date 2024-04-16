"use client";
import Button from "@/app/Component/Button/Button";
import Dropzone from "@/app/Component/Dropzone/page";
import Input from "@/app/Component/Input/page";
import Label from "@/app/Component/Label/Label";
import Model from "@/app/Component/Model/page";
import axios from "axios";
import dynamic from "next/dynamic.js";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
const HomePage = dynamic(() => import("./page"));

function UploadBox() {
  const formMethod = useForm();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = formMethod;
  const [show, setShow] = useState(false);
  const submitData = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/posts", data);
      setTimeout(() => {
        // toast.success("Data submitted successfully", {});
        setShow(true);
        console.log("Data submitted successfully:", response.data);
        reset();
      }, 1000);
    } catch (error) {
      console.error("Error submitting data:", error.message);
      setShow(false);

      reset();
    }
  };
  const [currentPage, setCurrentPage] = useState(null);

  const handlePreviousClick = () => setCurrentPage("previous");
  return (
    <>
      <div className="text-center py-2 text-4xl w-full">
        <h1 className="text-2xl font-bold py-4 italic">"Simple Form"</h1>
      </div>
      <form
        onSubmit={handleSubmit(submitData)}
        className="grid grid-cols-2 gap-4 w-full"
      >
        {/* 
      <Label placeholder="Upload an image" />
      <Input
        placeholder="Upload an image"
        name="image"
        type="file"
        accept="image/jpg,image/png"
        register={register}
        errors={errors}
        className="border-2 border-gray-300 w-full p-2 rounded-md"
      /> */}
        <div className="border-dotted border-blue-500 border-spacing-7 border-2 flex justify-center items-center p-4 ">
          <Dropzone setValue={setValue} name="image" className="p-4" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Label placeholder="Name:" />
            <input
              type="text"
              name="name"
              placeholder={Model.userName.placeholder}
              {...register("name", {
                required: Model.userName.required,
                minLength: {
                  value: Model.userName.minLength.value,
                  message: Model.userName.minLength.message,
                },
                maxLength: {
                  value: Model.userName.maxLength.value,
                  message: Model.userName.maxLength.message,
                },
                pattern: {
                  value: new RegExp(Model.userName.pattern.value),
                  message: Model.userName.pattern.message,
                },
              })}
              className="border-2 border-gray-300 text-black   rounded-md"
            />

            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <Label placeholder="Description:" />
            <input
              type="text"
              name="description"
              placeholder={Model.description.placeholder}
              {...register("description", {
                required: Model.description.required,
                minLength: {
                  value: Model.description.minLength.value,
                  message: Model.description.minLength.message,
                },
                maxLength: {
                  value: Model.description.maxLength.value,
                  message: Model.description.maxLength.message,
                },
                pattern: {
                  value: Model.description.pattern.value,
                  message: Model.description.pattern.message,
                },
              })}
              className="border-2 border-gray-300 text-black rounded-md"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>

          <Button
            content="Submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          />
        
        </div>
      </form>
      <div>{show ? <>Data succesfully Added</> : ""}</div>
      {/* <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        newestOnTop={false}
        rtl={false}
        autoClose={1000}
        draggable
        theme="light"
      /> */}
    </>
  );
}
export default UploadBox;
