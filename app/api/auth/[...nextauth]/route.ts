import { connectToDB } from "@/app/lib/mongoose";
import { User } from "next-auth";
import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider, { NaverProfile } from "next-auth/providers/naver";
import { createUser } from "@/app/lib/actions/userAction/signup.action";

export const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }: any) {
      connectToDB();
      await createUser(user);
      return true;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.user = {};
        token.user.name = user?.name;
        token.user.email = user?.email;
        if (user.email === "toitoii080@nate.com" || user.role == "admin") {
          token.user.role = "admin";
        }
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      session.user = token.user;
      return session;
    },
  },
  session: {
    maxAge: 10,
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
