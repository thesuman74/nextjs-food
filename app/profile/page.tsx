import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logout from "@/components/Logout";

const Page = async () => {
  const session = await auth();
  console.log("This is session data ", session);

  if (!session?.user) {
    redirect("/login");
  }

  const userName = session?.user?.email || "No User name";
  const userImage = session?.user?.user_profile  || "/Images/burger.png"; // Provide a default image path

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
      {/* <Logout /> */}
    </div>
  );
};

export default Page;
