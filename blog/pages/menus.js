import Layout from '../components/Layout';
import { fetcher } from '../utils/api';

export async function getStaticProps(){
  const resMenuItems = await fetcher (`${process.env.BASE_URL}/menus`)
  console.log(resMenuItems);
  return{
    props:{menuitems: resMenuItems}
  }
}


const menus = ({menuitems}) => {
  return (
    <Layout>
    <div>
        <span>
          {JSON.stringify
         (   menuitems
         ) }
        </span>
    </div>
    </Layout>
  )
}

export default menus