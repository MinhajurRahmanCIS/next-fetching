import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 30,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    required: true,
                    placeholder: "Your Email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                    placeholder: "Your password"
                }
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                if (!credentials) {
                    return null;
                }

                if (email) {
                    const db = await connectDB();
                    const currentUser = await db.collection('users').findOne({email});
                    console.log(currentUser);

                    // const currentUser = users.find(u => u.email === email);

                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser;
                        }
                    }
                }
                return null;
            }
        })],

    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type
            }
            return token;
        },
        async session({ session, token }) {
            session.user.type = token.type
            return session;
        }
    }
};

const handler = NextAuth(authOptions);

// const users = [
//     {
//         id: 1,
//         name: "John Doe",
//         email: "johndoe@example.com",
//         type: "admin",
//         password: "password123",
//         image: "https://picsum.photos/200/300"
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         email: "janesmith@example.com",
//         type: "superAdmin",
//         password: "securePass456",
//         image: "https://picsum.photos/200/300"
//     },
//     {
//         id: 3,
//         name: "Alice Johnson",
//         email: "alicejohnson@example.com",
//         type: "moderator",
//         password: "alice789",
//         image: "https://picsum.photos/200/300"
//     },
//     {
//         id: 4,
//         name: "Bob Brown",
//         email: "bobbrown@example.com",
//         type: "user",
//         password: "bobSecure101",
//         image: "https://picsum.photos/200/300"
//     },
//     {
//         id: 5,
//         name: "Eve Green",
//         email: "evegreen@example.com",
//         type: "user",
//         password: "evePassword999",
//         image: "https://picsum.photos/200/300"
//     }
// ];


export { handler as GET, handler as POST }