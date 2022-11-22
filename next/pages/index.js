import Head from "next/head";
// import products from '../pages/products'
//
export default function Home() {
  return (
    <div>
      <Head>
        <title>THE WHITE TREE</title>
        <meta
          name="description"
          content="locally grown, organic & affordable meals"
        />
      </Head>
      <products />
      <producers />
      <restaurants />
      <menus />
    </div>
  );
}
