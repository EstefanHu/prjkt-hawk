import Head from 'next/head';
import Link from 'next/link';
import './globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export const metadata = {
  applicationName: 'prjkt:hawk',
  author: 'Estefan Hu',
  creator: 'Estefan Hu',
  publisher: 'Estefan Hu',
  title: 'The Hawk Project',
  description: 'Real time Seattle police activity',
  keywords: ['hawk', 'Seattle', 'police', 'map'],
  locale: 'en-US',
  type: 'website',
  icons: {
    icon: '/favicon.ico',
    apple: 'apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Prjkt:Hawk</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="initial-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
      </Head>

      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}

const Header = () => {
  return (
    <header>
      <Link href="/">
        <h1>:Hawk</h1>
      </Link>

      <span>
        <Link href="/about">
          <p>about</p>
        </Link>

        <Link href="/contact">
          <p>contact</p>
        </Link>
      </span>
    </header>
  );
};
