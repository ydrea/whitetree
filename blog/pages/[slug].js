import React from 'react';

//how many?
export async function getStaticPaths () {
    const res = await fetch('http://localhost:1337/api/restaurants')
    const restaurants = await res.json()
    const items = restaurants.data
    console.log('====================================');
    console.log(items);
    console.log('====================================');
    const paths = items.map((i)=>({
        params: {slug: i.Slug}
    }))
return { paths: [], fallback: false}  
}
// with what?
export async function getStaticProps ({params}) {
    console.log('====================================');
    console.log(params);
    console.log('====================================');
    const {slug} = params
    const res = await fetch(`http://localhost:1337/api/restaurants?Slug=${slug}`)
const data =  await res.json()
const restaurant = data[0]
return {props: {restaurant}}
}

export default function Restaurant({restaurant}) {
 
  return (
    <div>
      {
      JSON.stringify( restaurant
      )
      }</div>
  )
}
