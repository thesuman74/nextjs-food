// next-auth.d.ts
import { AdapterUser } from "next-auth/adapters";
import { User } from "./Type";

// Extend the built-in user model to include custom fields

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
declare module "next-auth" {
  interface jwt {
    user: User;
  }
}
