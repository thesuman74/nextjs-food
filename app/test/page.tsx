import { TestForm } from "@/components/Testform";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-3xl my-3">Time to sign in</h1>
      <TestForm />
    </div>
  );
};

export default page;
