import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Your Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your Password",
        },
      },

      async authorize(credentials) {
        const username = credentials?.username;
        const password = credentials?.password;

        if (!username || !password) {
          throw new Error("Missing credentials");
        }

        try {
          const loginResponse = await fetch(
            "https://apiuser.moretechglobal.com/api/auth/login/",
            {
              method: "POST",
              body: JSON.stringify({ username, password }),
              headers: { "Content-Type": "application/json" },
            }
          );

          if (!loginResponse.ok) {
            throw new Error("Invalid credentials");
          }

          const loginData = await loginResponse.json();
          console.log("this is login data", loginData);

          const userDetailsResponse = await fetch(
            "https://apiuser.moretechglobal.com/api/auth/user/all/details/",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${loginData.key}`,
              },
            }
          );

          if (!userDetailsResponse.ok) {
            throw new Error("Failed to retrieve user details");
          }

          const userDetails = await userDetailsResponse.json();
          console.log("route data ", userDetails);
          return { ...userDetails, token: loginData.key };
        } catch (error) {
          console.error("Error while logging in:", error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      if (token.user) session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as default };
