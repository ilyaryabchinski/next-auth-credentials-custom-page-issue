import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        (session.user as any).id = user.id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin'
  },
  providers: [
    // ...add more providers here
    CredentialsProvider({
      credentials: {
        email: {type: "text"},
        password: {type: "password"}
      },
      async authorize() {
        return { id: "1", name: 'J Smith', email: 'jsmith@example.com' }
      }
    })
  ],
};

export default NextAuth(authOptions);
