import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    data?: {
      access_token: string;
      providerAccountId: number;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    data?: {
      access_token: string;
      providerAccountId: number;
    };
  }
}
