import NextAuth from "next-auth";
import { AdapterUser } from "next-auth/adapters"; // Make sure to import AdapterUser

declare module "next-auth" {
  interface Session {
    user: User;
  }
  interface JWT {
    user: User;
  }

  interface User extends AdapterUser {
    // Extend from AdapterUser
    id: string;
    email: string;
    username: string;
    qr_code: string;
    user_profile: {
      phone_prefix: string;
      date_of_birth: string;
      secondary_phone_number: string;
      secondary_email: string;
      country_code: string;
      country: string | null;
      address: string | null;
      city: string | null;
      street: string | null;
      zip_code: string | null;
      house_no: string | null;
      gender: string;
      display_picture: string;
      expertise: string;
      interest: string;
    };
    token: string;
    emailVerified?: Date | null; // Ensure emailVerified is optional
  }
}
