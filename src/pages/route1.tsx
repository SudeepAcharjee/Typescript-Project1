import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";


function Route1({ Component, pageProps }: AppProps) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system">
     
         </ThemeProvider>
       

    );
  }
  
  export default Route1;
  