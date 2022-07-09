import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider initialTheme="class">
      <div className="bg-primary min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
