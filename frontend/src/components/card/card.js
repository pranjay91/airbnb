import React from 'react'
import './card.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import StarIcon from '@mui/icons-material/Star';
let data =[{image:"https://images.unsplash.com/photo-1658081111999-7a79a3f6b0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",rating:4.9,country:"india",title:"Plan The Perfect New York Vacation",price:9043},{image:"https://images.unsplash.com/photo-1666800742322-685570a26898?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",rating:4.9,country:"india",title:"Design Your Trip to Bareclona With German",price:13},{image:"https://images.unsplash.com/photo-1666720196944-38cc8854d84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=382&q=80",rating:4.9,country:"india",title:"Craft a custom Trip to Europe with Hugo",price:6583},{image:"https://plus.unsplash.com/premium_photo-1661632590670-47f79df18fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",rating:4.9,country:"india",title:"Pay a visit to beautiful Tajmahal in India",price:9043},{image:"https://images.unsplash.com/photo-1661909581764-c3d85cd1d8a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",rating:4.9,country:"india",title:"Japan is a place of additction",price:43},{image:"https://images.unsplash.com/photo-1661884438136-056ec19f145c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",rating:4.9,country:"india",title:"The Great China ever is a place of paradise",price:1423}]
const Cards = () => {
  return (
      <>
      <h2 className='cardQuote'>Top Sellers</h2>
   <div className="maincards">
   
    {
        data.map((e)=>{
            return(
                <div className='maincard'>
                    <div className="collect">
                <img className='maincardimage' src={e.image} alt="" />
                <FavoriteBorderIcon className='loveicon'/>
                </div>
                <div className="cardinfo">
                  <span><StarIcon></StarIcon></span> <p>{e.rating}</p><p>({Math.floor((Math.random() * 100) + 1)}) .</p>
                   <p>{e.country}</p>
                </div>
               <div className="kebu">
               <p className='tum'>{e.title}</p>
                <p className='bum'><span className='hem'>From  <CurrencyRupeeOutlinedIcon className='rupeeicon'></CurrencyRupeeOutlinedIcon><span className='price'>{e.price}</span></span>/person</p>
               </div>
                </div>
            )
           
        })
    }
   </div>
   </>
  )
}

export default Cards