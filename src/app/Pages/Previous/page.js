"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function Previous() {
  const [name, setName] = useState([]);
  useEffect(() => {
    const axios = require("axios");
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        // Handle successful response
        setName(response.data);
        console.log("Data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col  gap-4">
      <h2>Previous Posts</h2>
      <div className="flex flex-col gap-4">
        {name.map((post) => (
          <div
            key={post.id}
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            <h2>{post.name}</h2>
          </div>
        ))}
      </div>
      <Link href="">Back to home</Link>
    </div>
  );
}
export default Previous;
