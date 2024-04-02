import NextAuth from "next-auth";
import { UserType } from "./UserType";

declare module "next-auth" {
  interface Session {
    user: UserType;
  }
}
