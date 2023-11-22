import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import "./Home.css";
import image from './../Home/diwali-lamp.jfif'


const GREETINGS = [
  "Wishing you a bright and joyful Diwali filled with love and light!",
  "May this Diwali bring prosperity and happiness to your life.",
  "On this auspicious occasion, may your dreams shine as bright as the Diwali lights.",
  "Sending you warm wishes for a Diwali filled with family, friends, and laughter."
]

function Home() {
    const [searchParams] = useSearchParams();

    const [to, setTo] = useState(searchParams.get('to'));
    const [from ,setFrom] = useState(searchParams.get('from'));
    const [greetingNumber, setGreetingNumber] = useState(searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0);
    const [themeNumber, setThemeNumber] = useState(searchParams.get('t'))

  return (
    <div>
    <div className={`greeting-container ${`theme-${themeNumber}`} `}>
     
<span className='to-text'>Dear {to} 💐</span>
      <p className='greeting-text'>
     {GREETINGS[greetingNumber]}
      </p>

     <span className='from-text'>
      <img src={image} className='lamp-img'/>
      🙏 From {from}</span>
    </div>

    <p className='create-your-own'>Do you want to create your own Diwali Greeting? Customized it here 👇</p>

    
    <p className="link-url" onClick={()=>{
          const url = `${import.meta.env.VITE_BASE_URL}?to=${to}&from=${from}&g=${greetingNumber}&t=${themeNumber}`;  
          navigator.clipboard.writeText(url);
          alert(`"Copied to clipboard!:" ${url}`)
        }}>
          {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}
          &t={themeNumber}
        </p>
  
<div className='input-container'>
<input 
type='text'
placeholder='To'
className='input-box'
value={to}
onChange={(e)=>{
  setTo(e.target.value);

}}
/>
 <input 
type='text'
placeholder='From'
className='input-box'
value={from}
onChange={(e)=>{
  setFrom(e.target.value);
}}
/>


<select  
        onChange={(e)=>{
        setGreetingNumber(e.target.value);
      }}
      className='input-box'>
        <option value={0}>Greeting-1</option>
        <option value={1}>Greeting-2</option>
        <option value={2}>Greeting-3</option>
        <option value={3}>Greeting-4</option>
      </select>

      <select 
      onChange={(e)=>{
      setThemeNumber(e.target.value);
      }}
      className='input-box'>
      <option value="1">Theme-1</option>
        <option value="2">Theme-2</option>
        <option value="3">Theme-3</option>
        <option value="4">Theme-4</option>
        <option value="5">Theme-5</option>
      </select>

</div>
   </div>



  )
}

export default Home