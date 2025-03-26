import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId:
        process.env.NODE_ENV === "production"
          ? process.env.GITHUB_CLIENT_ID_PROD
          : process.env.GITHUB_CLIENT_ID,
      clientSecret:
        process.env.NODE_ENV === "production"
          ? process.env.GITHUB_CLIENT_SECRET_PROD
          : process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
