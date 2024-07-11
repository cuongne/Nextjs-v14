import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from "next-auth/providers/google";

export const BASE_PATH = '/api/auth'
const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize() {
        // Fetch user data from your API using email and password
        const response = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: 'mor_2314', password: '83r5^_' }),
        })

        // Handle potential errors (e.g., network issues, invalid credentials)
        if (!response.ok) {
          throw new Error('Invalid email or password')
        }

        return {
          name: 'admin',
          email: 'email@gmail,com',
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
