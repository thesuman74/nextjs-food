"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");

  if (typeof action === "string") {
    await signIn(action, { redirectTo: "/profile" });
    console.log(action);
  } else {
    console.error("Action is not a valid string");
  }
}

export async function doLogout() {
  await signOut({ redirectTo: "/test" });
}
