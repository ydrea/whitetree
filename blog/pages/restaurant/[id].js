import Link from 'next/link';
import React from 'react';

// //how many?
// export async function getStaticPaths () {
//     const res = await fetch('http://localhost:1337/api/restaurants')
//     const restaurants = await res.json()
//     const items = restaurants.data
//  return { paths: items.map((i)=>({
//   params: {slug: i.id.toString()}
// })), fallback: false}  
// }
// // with what?
// export async function getStaticProps ({params}) {
//     const {slug} = params
//     console.log(`'oyz' ${slug}`);
//     const res = await fetch(`http://localhost:1337/api/restaurants/${slug}`)
// const data =  await res.json()
// const restaurant = data[0]
// return {props: {restaurant}}
// }
// //

export async function getServerSideProps({params}){
  const res = await fetch(
    `http://localhost:1337/api/restaurants/${params.id}`
  )
  console.log(res);
  return {
    props: {restaurant: await res.json()
    }
  }
}

export default function Restaurant({restaurant}) {
 
  return (
    <div>
      <Link href='/'>
        <a>&rarrw;</a>
      </Link>
      {/* {JSON.stringify(restaurant)} */}
      {restaurant.data.attributes.name}      
      </div>
  )
}
