"use client"

import React, { FormEvent } from 'react'
import {useState} from 'react'
import { scrapeAndStoreProduct } from '../lib/actions'
const isValidAmazonProductLink=(url:string)=>{
    try{
        const parsedURL=new URL(url)
        const hostname=parsedURL.hostname
        if(
            hostname.includes('amazon.com') ||
            hostname.includes('amazon.') ||
            hostname.endsWith('amazon')
            
        ){
            return true;
        }
    }
    catch(error)
    {
        return false
    }


}

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt]=useState('');
    const [isLoading, setIsLoading]=useState(false);
    const handleSubmit=async (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const isValidLink=isValidAmazonProductLink(searchPrompt)
   
        alert(isValidLink ? 'valid link':'Invalid Link')
        if(!isValidLink)
        return alert('Please Provide a valid Amazon Link')
    try{
        setIsLoading(true)
        //scrape
        const product=await scrapeAndStoreProduct(searchPrompt)
    }
    catch(error){
        console.log(error)
    }
    finally{
        setIsLoading(false)
    }
    }
  return (
     <form

     className=' flex flex-wrap gap-4 mt-12' 
     onSubmit={handleSubmit}
     >
        <input
        type='text'
         value={searchPrompt}
         onChange={(e)=> setSearchPrompt(e.target.value)}
        placeholder='Enter the product link '
        className='searchbar-input'
        />
        <button type='submit'
        disabled={searchPrompt===''}
        className='searchbar-btn'>
            {isLoading ? 'Searching...' :'Search'}
        </button>
     </form>
  )
}

export default Searchbar
