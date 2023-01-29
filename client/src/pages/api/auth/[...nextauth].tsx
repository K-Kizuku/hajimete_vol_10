
import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from "next-auth/providers/twitter"
import GithubProvider from 'next-auth/providers/github'
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    TwitterProvider({
        clientId: process.env.TWITTER_ID ?? '',
        clientSecret: process.env.TWITTER_SECRET ?? '',
    }),
    GithubProvider({
        clientId: process.env.TWITTER_ID ?? '',
        clientSecret: process.env.TWITTER_SECRET ?? '',
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
})