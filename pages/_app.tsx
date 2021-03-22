//import Layout from "components/Layout/Layout"
//import Layout from "../components/Layout/Layout";
import { AppProps } from "next/app";




function MyApp({ Component, pageProps }: AppProps ) {
    {/*
        Esto es ideal para usarlo y envolver todo dentro de:
         *Providers
         *Contexts
         *Layout
         *props adicionales
     */}
    return ( 
    <Component {...pageProps} />

    )
}



export default MyApp