import NextAuth from "next-auth";

//providers
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the
      // `credentials` object.
      // credentials: {
      //   identifier: {
      //     label: "email",
      //     type: "text",
      //     placeholder: "jsmith@domain.net",
      //   },
      //   password: {
      //     label: "Password",
      //     type: "password",
      //   },
      // },
      async authorize(credentials, req) {
        const { identifier, password } = credentials;
        const res = await fetch("http://localhost:1337/auth/local", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier,
            password,
          }),
        });

        const user = await res.json();

        console.log("nextauth", user);

        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;
      console.log("session", session);

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
