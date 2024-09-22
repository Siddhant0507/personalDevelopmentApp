import ConvexClientProvider from "@/providers/ConvexClerkProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Development",
  description: "Your Personal Development Journy Start Here ....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
