import "./globals.css";

export const metadata = {
  title: "Yateen Sharma | Interactive Portfolio",
  description: "Full-Stack and Generative AI Portfolio Showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}