import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuclear Explosions",
  description: "Nuclear Explosions Simulator",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          height: '100vh',
          width: '100vw',
          margin: 0,
          padding: 0,

        }}
      >
        {children}
      </body>
    </html>
  );
}
