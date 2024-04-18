import { connectToDB } from "@/app/lib/mongoose";
import { AuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import {
  createUser,
  getUserByEmail,
} from "@/app/lib/actions/userAction/auth.action";

export const authOptions: AuthOptions = {
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
    async jwt({ token }: any) {
      const user = await getUserByEmail({ email: token.email });
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      session.user = token.user;
      return session;
    },
  },
  session: {
    maxAge: 24 * 60 * 60, // 1일
  },
  secret: "qwer1234",
};
