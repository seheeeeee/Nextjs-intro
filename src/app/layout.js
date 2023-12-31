import Navbar from "./_components/Navbar";
import "./global.css";

export const metadata = {
  title: {
    default: "Home | Next Movies",
    template: "%s | Next Movies",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
