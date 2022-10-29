import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
//

export async function getStaticProps(){
  const res = await fetch (`${process.env.BASE_URL}/menus`)
  const resMenuItems = await res.json()
  const items = resMenuItems.data
    return { props:{ items } }
}


const menus = ({items}) => {
  return (
    <Layout>
    <div>
        <span>
        {items && items.map((i) => (
          <Link  href={`/menu/${i.id}`} key={i.id}>
          <a className={styles.card}>

          <h2>{i.attributes.name} &rArr;</h2>
          </a>
          </Link>)
        )}
  </span>
    </div>
    </Layout>
  )
}

export default menus