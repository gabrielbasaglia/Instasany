import { Header } from "@/components/header";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "Instasany",
  description: "Projeto para estudar animação GSAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={epilogue.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
