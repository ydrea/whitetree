import Link from 'next/link';
import React from 'react';
//how many?
export async function getStaticPaths () {
    const res = await fetch('http://localhost:1337/api/restaurants')
    const restaurants = await res.json()
    const items = restaurants.data
    const paths = items.map((i)=>({
        params: {slug: i.attributes.Slug}
    }))
return { paths: [], fallback: false}  
}
// with what?
export async function getStaticProps ({params}) {
    const {slug} = params
    console.log(slug);
    const res = await fetch(`http://localhost:1337/api/restaurants?Slug=${slug}`)
const data =  await res.json()
const restaurant = data[0]
return {props: {restaurant}}
}

export default function Restaurant({restaurant}) {
 
  return (
    <div>
      <Link href='/'>
        <a>&rarrw;</a>
      </Link>
      {restaurant.ime}      
      </div>
  )
}
