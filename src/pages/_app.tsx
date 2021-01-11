import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <div className="m-8 text-gray-800">
      <Head>
        <link rel="stylesheet" href="//rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
        <title>Web Audio Issues</title>
      </Head>
      <div className="flex flex-col h-full w-full lg:w-1/2 mt-4">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
