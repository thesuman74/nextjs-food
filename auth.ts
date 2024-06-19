import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";
import { LoginAction } from "./app/actions/CredentailActions";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
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

    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          const userdetail = await LoginAction(
            credentials.email as string,
            credentials.password as string
          );
          const session = await userdetail;

          if (userdetail) {
            console.log(
              "this is user Detail data from auth.ts",
              userdetail.user_type
            );
            return userdetail;
          }
        } catch (error) {
          console.error("Error during login:", error);
          throw new Error(String(error));
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user; // Storing user data in the token
      }
      return token;
    },
    session: async ({ session, token }) => {
      // console.log("session", session);
      if (token?.user) {
        session.user = { ...token.user } as any; // Sync user data into session
        // console.log("session", session.user);
      }
      return session;
    },
  },
});
