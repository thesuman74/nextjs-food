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
  await signOut({ redirectTo: "/login" });
}

export async function doCredentialLogin(formData: FormData) {
  const email = formData.get("username");
  const password = formData.get("password");

  console.log("this is Docredentiallogin ", email, password);

  try {
    const response = await signIn("credentials", {
      email: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });
    if (response) {
      console.log("this is Docredentiallogin response ", email, password);
    }
    return response;
  } catch (err) {
    throw err;
  }
}
