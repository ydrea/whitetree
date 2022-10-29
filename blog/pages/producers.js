import Layout from "../components/Layout"
//
export async function getStaticProps() {
    const res = await fetch(`${process.env.BASE_URL}/producers`)
    const resProducers = await res.json()
    const items = resProducers.data
    console.log(items)
    return { props: { items } }
  }
//
export default function Producers({items}){
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