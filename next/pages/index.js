import Head from "next/head";
// import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
// import {faEuro} from '@fortawesome/free-regular-svg-icons'

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>THE WHITE TREE</title>
        <meta
          name="description"
          content="locally grown, organic & affordable meals"
        />
      </Head>
    </div>
  );
}
