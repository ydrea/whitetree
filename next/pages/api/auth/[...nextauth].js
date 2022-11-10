import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

// const options = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],

//   secret: process.env.NEXT_PUBLIC_SECRET,
//   session: {
//     strategy: "database" | "jwt",
//     // jwt: true,
//   },
//   debug: true,
//   callbacks: {
//     async session({ session, user }) {
//       session.jwt = user.jwt;
//       session.id = user.id;
//       // console.log(session);
//       return Promise.resolve(session);
//     },
//     async jwt({ token, user, account }) {
//       const isSignin = user ? true : false;
//       if (isSignin) {
//         //prettier-ignore
//         const response = await fetch
// (`${process.env.STRAPI_AUTH_URL}/api/auth/callback/google?access_token=${account.accessToken}`);
//         const data = await response.json();
//         console.log(data);
//         token.jwt = data.jwt;
//         //
//         token.id = data.user.id;
//       }
//       // console.log(token.id);
//       return Promise.resolve(token);
//     },
//   },
// };

// const Auth = (req, res) => NextAuth(req, res, options);

// export default Auth;

//

//For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    */
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CONSUMER_KEY,
      clientSecret: process.env.TWITTER_CONSUMER_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
};

export default NextAuth(authOptions);
