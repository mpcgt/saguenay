import { prisma } from "@/lib/prisma";
import type { User } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Informations de connexion requises");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        }) as User & { password: string };

        if (!user) {
          throw new Error("Utilisateur non trouvé");
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          throw new Error("Mot de passe incorrect");
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],

  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
