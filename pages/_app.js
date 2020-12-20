import "../styles/global.css"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
      <Head>
         <title>DevPlay</title>
         <meta name="description" content="Veja, publique e compartilhe vídeos de desenvolvedores de todo o mundo!" />
      </Head>
    <Component {...pageProps} />
  </>  
  )
}

export default MyApp
