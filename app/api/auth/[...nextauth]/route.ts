import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Tipizacija NextAuthOptions
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, string> | undefined) {
        // Validacija korisničkih podataka
        if (
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          // Ako je korisnik admin, vratite korisničke podatke
          return { id: 1, name: "Admin", role: "admin" };
        }
        return null; // Ako korisnik nije validan, vraća null
      },
    }),
  ],
  pages: {
    signIn: "/login", // Definirajte svoju login stranicu
  },
  callbacks: {
    // `session` callback s tipizacijom
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as number; // Sada je `id` sigurno broj
        session.user.role = token.role as string; // Sada je `role` sigurno string
      }
      return session;
    },
    // `jwt` callback s tipizacijom
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
};

// Rukovanje GET i POST metodama
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
