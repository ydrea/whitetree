export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

/**
 * @param {any} image
 */

export const imageToUrl=(image)=>{
if(!image){
    return "/vercel.svg"
}

if (image.url.indexOf("/") === 0) {
    //It's a relative url, add API URL
    return `${API_URL}${image.url}`;
  }
return image.url
}