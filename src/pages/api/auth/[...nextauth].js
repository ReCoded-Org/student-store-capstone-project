// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";

// export default NextAuth({
//     providers: [
//         GitHubProvider({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET,
//             profile(profile) {
//                 return {
//                     id: profile.id.toString(),
//                     name: profile.name || profile.login,
//                     email: profile.email,
//                     image: profile.avatar_url,
//                 };
//             },
//         }),
//     ],
//     callbacks: {
//         async jwt({ token }) {
//             token.userRole = "admin";
//             return token;
//         },
//     },
//     pages: {
//         signIn: "/sign-in",
//     },
// });
