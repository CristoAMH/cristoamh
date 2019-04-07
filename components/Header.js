import Head from 'next/head';
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="../static/reset.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,700"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      body {
        background: #000;
        color: #fff;
      }
    `}</style>
  </div>
);
