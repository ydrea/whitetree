
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
////
export async function getStaticProps() {
    const res = await fetch(`${process.env.BASE_URL}/products`)
    const resProducts = await res.json()
    const items = resProducts.data
    console.log(items)
    return { props: { items } }
  }
//
export default function Products({items}){
    return (
        <Layout>
            <div>
                <span>
                {items && items.map((i) => (
          <Link  href={`/product/${i.id}`} key={i.id}>
          <a className={styles.card}>

          <h2>{i.attributes.name} &rArr;</h2>
          {/* {i.attributes.description} */}
          </a>
          </Link>)
        )}
                </span>
            </div>
        </Layout>
    )
}