import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logout from "@/components/Logout";

const Page = async () => {
  const session = await auth();
  // console.log("This is session data ", session);

  if (!session?.user) {
    redirect("/login");
  }

  const apiImage = session?.user?.image;
  const apiUsername = session?.user?.username;
  const userdetail = JSON.stringify(session);

  const userName = session?.user.name || apiUsername || "No User name";
  const useremail = session?.user?.email || "No User name";
  const userImage = session?.user.image || apiImage || "/Images/burger.png"; // Provide a default image path

  return (
    <div className="flex flex-col items-center m-4 h-screen space-y-5">
      <h1 className="text-3xl my-2">This is user profile page</h1>
      <Image
        src={userImage}
        alt={userName}
        width={2000}
        height={2000}
        quality={100}
        className="rounded-full w-40 h-40 "
        priority // This attribute helps load the image faster, especially if it's above the fold
      />
      <h2 className="">Hello, {userName}</h2>
      <h2 className="">Your email is : {useremail}</h2>
      {/* <Logout /> */}
      <div className="border border-pink-600">
        <p className="text-bold text-2xl text-center">
          This data is present in session
        </p>
        <p className="max-w-sm w-80 overflow-x-auto">{userdetail}</p>
      </div>
    </div>
  );
};

export default Page;
