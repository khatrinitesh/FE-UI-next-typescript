import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bodyWrapper">
        <div className="rootWrapper">{children}</div>
      </body>
    </html>
  );
}
