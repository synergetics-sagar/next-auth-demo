import Providers from "./providers";

export const metadata = {
  title: "NextAuth Demo",
  description: "Google and GitHub Login Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}