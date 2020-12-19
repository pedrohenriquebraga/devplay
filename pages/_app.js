import "../styles/global.css"
import Document, { Html, Head, Main, NextScript } from 'next/document'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Html lang="pt-br">
      <Head>
         <title>DevPlay</title>
         <meta name="description" content="Veja, publique e compartilhe vídeos de desenvolvedores de todo o mundo!" />
      </Head>
    </Html>
    <Component {...pageProps} />
  </>  
  )
}

export default MyApp
