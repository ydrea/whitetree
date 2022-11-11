import Link from "next/link";
import styles from "../styles/Home.module.css";
//

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/restaurants`);
  const resMenuItems = await res.json();
  const items = resMenuItems.data;
  return { props: { items } };
}

const menus = ({ items }) => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <div>
              <span>
                {items &&
                  items.map((i) => (
                    <Link href={`/restaurant/${i.id}`} key={i.id}>
                      <a className={styles.card}>
                        <h2>{i.attributes.name} &rArr;</h2>
                        {i.attributes.description}
                      </a>
                    </Link>
                  ))}
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default restaurants;
