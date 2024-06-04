"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [errMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    try {
      const result = await signIn("credentials", {
        username: formData.get("username"), // Ensure this matches the field name
        password: formData.get("password"),
      });

      if (!result?.ok) {
        throw new Error(result?.error as string);
      }

      if (result?.ok) {
        router.push("/profile");
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Login</h1>
      <p className="text-slate-500">Hi, Welcome back 👋</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(new FormData(e.currentTarget));
        }}
        className="my-10"
      >
        <div className="flex flex-col space-y-5">
          <p className="text-center text-red-500">{errMessage}</p>
          <label htmlFor="username">
            <p className="font-medium text-slate-700 pb-2">User Name</p>
            <input
              id="username"
              name="username"
              type="text"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter your UserName"
              required
            />
          </label>
          <label htmlFor="password">
            <p className="font-medium text-slate-700 pb-2">Password</p>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter your password"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <span>Login</span>
          </button>
        </div>
      </form>
    </div>
  );
}
