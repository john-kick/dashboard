import Twitch from "@node_modules/next-auth/providers/twitch";
import NextAuth, { Session } from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Twitch({
      authorization: {
        params: {
          scope: "openid user:read:email user:read:follows",
          claims: {
            id_token: { email: null, picture: null, preferred_username: null },
          },
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return { ...session, data: token };
    },
    async jwt({ token, user, account, profile }) {
      return { ...token, ...account };
    },
  },
});
