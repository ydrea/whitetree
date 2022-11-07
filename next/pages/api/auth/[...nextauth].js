import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import FacebookProvider from "next-auth/providers/facebook";
// import TwitterProvider from "next-auth/providers/twitter";
// import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
  ],

  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    jwt: true,
  },
  callbacks: {
    async session({ session, token, user }) {
      session.jwt = token.jwt;
      session.id = token.id;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        const response = await fetch(
          `${process.env.NEXTAUTH_URL}/api/auth/google/callback?access_token=${account?.access_token}`
          // {
          //   method: "GET",
          //   headers: {
          //     // update with your user-agent
          //     // "User-Agent":
          //     //   "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
          //     Accept: "application/json; charset=UTF-8",
          //   },
          // }
        );
        // const responser = JSON.parse();
        const data = await response.text();
        console.log(data);
        // token.jwt = data.jwt;
        // token.id = data.user.id;
      }
      return token;
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;

//

// For more information on each option (and a full list of options) go to
// // https://next-auth.js.org/configuration/options
// export const authOptions = {
//   // https://next-auth.js.org/configuration/providers/oauth
//   providers: [
//     /* EmailProvider({
//          server: process.env.EMAIL_SERVER,
//          from: process.env.EMAIL_FROM,
//        }),
//     */
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_ID,
//       clientSecret: process.env.FACEBOOK_SECRET,
//     }),
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     TwitterProvider({
//       clientId: process.env.TWITTER_CONSUMER_KEY,
//       clientSecret: process.env.TWITTER_CONSUMER_SECRET,
//     }),
//   ],
//   theme: {
//     colorScheme: "light",
//   },
//   callbacks: {
//     async jwt({ token }) {
//       token.userRole = "admin";
//       return token;
//     },
//   },
// };

// export default NextAuth(authOptions);
