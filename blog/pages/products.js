import Layout from "../components/Layout"
//
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
                    {JSON.stringify(items)}
                </span>
            </div>
        </Layout>
    )
}