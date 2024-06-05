## understand the flow of authentication

![alt text](image-7.png)

For the most simplest process which will redirect you to google sign in page follow this link : https://authjs.dev/getting-started/authentication/oauth

## Creating a google sigin along with passing data through session , with sign in and sign out functionality

### 1. Install the Auth.js

```code
npm install next-auth@beta

currentlty using :"next-auth": "^5.0.0-beta.19",
```

### 1 . Create a form with action

```typescript
<form action={doSocialLogin}>
  <div className="my-5">
    <button
      type="submit"
      name="action"
      value="google"
      className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
    >
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        className="w-6 h-6"
        alt="Google logo"
      />
      <span>Login with Google</span>
    </button>
  </div>
</form>
```

### 2. Configure Google Provider from Next-Auth by Creating a **@/auth.ts** file

This is where we define the type of authentications that we will be using such as google , github , Credential based authentication

path: **@/auth.ts**

```typescript
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
```

### 3. Manage Google OAuth: clientId and client secret

- 1. https://console.cloud.google.com/
- 2. Go to API and Services > credentails > create Credentials > OAuth client Id
- 3. Set => Authorized redirect URIs : http://localhost:3000/api/auth/callback/google
- 4. Get client id and client secret id

### 3.1 set client id and client secret id in environment variable

path : **.env**

```code
GOOGLE_CLIENT_ID =
GOOGLE_CLIENT_SECRET =

AUTH_SECRET = genreate form open ssl(type this in terminal => openssl rand -hex 32)
```

### 4. Create a new file name route.ts in **app\api\auth\[...nextauth]\route.ts**

```typescript
export { GET, POST } from "@/auth";
```

#### 4.1 Manual checking

you can directly go to this url to check if you are being redirected direclty to CHOOSE AN ACCOUNT PAGE from google

link : `http://localhost:3000/api/auth/signin`

### 5. create actions to manage which provider to use when clicked on sign in button

path : **app\actions\authAction.ts**

```typescript
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
```

### 6. create a profile page to redirect when signed in successfully

```typescript
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logout from "@/components/Logout";

const page = async () => {
  const session = await auth();

  if (!session?.user) redirect("/test");

  const userName = session?.user?.name || "User";
  const userImage = session?.user?.image || "/default-image.png"; // Provide a default image path

  return (
    <div className="flex flex-col items-center m-4 h-screen space-y-5">
      <h1 className="text-3xl my-2">This is user profile page</h1>
      <Image
        src={userImage}
        alt={userName}
        width={100}
        height={100}
        quality={100}
        className="rounded-full"
        priority // This attribute helps load the image faster, especially if it's above the fold
      />
      <h2 className="">{userName}</h2>
      <Logout />
    </div>
  );
};

export default page;
```

### 6.1 create a logout button in Components

path : **components\Logout.tsx**

```typescript
import { doLogout } from "@/app/actions/authAction";
import React from "react";

const Logout = () => {
  return (
    <div>
      <form action={doLogout}>
        <button
          type="submit"
          className="bg-red-400 my-2 text-white p-1 rounded-lg"
        >
          Log Out
        </button>
      </form>
    </div>
  );
};

export default Logout;
```

### 7. Error : solution

if you get this error

```code
Error: Invalid src prop (https://lh3.googleusercontent.com/a/ACg8ocKO2qxglgRBtM2QdpmUcTj5nTBy2mMy15ripTH8edi8t0LT-DOt=s96-c) on `next/image`, hostname "lh3.googleusercontent.com" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host

```

solution : add the following changes in **next.config.mjs**

```code
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [ "lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
```
