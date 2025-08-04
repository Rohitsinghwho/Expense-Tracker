import React, { useState } from 'react'
import SecondaryHeading from "../Headings/SecondaryHeading"
import SecondaryButton from "../Button/SecondaryButton"
import { FaEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import "./Transactions.css"
import { IoFastFoodSharp } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";


// data is a array of transactions

const ITEMS_PER_PAGE=3;
const Transactions = ({heading,data}) => {
 const [page,setPage]=useState(0);
 const startIdx=page*ITEMS_PER_PAGE;
 const endIdx=startIdx+ITEMS_PER_PAGE;
 const currentElements=data.slice(startIdx,endIdx);
 const AvailableCategory={
    "Food":<IoFastFoodSharp/>,
    "Entertainment":<MdLocalMovies />,
    "Travel":<FaCarSide />

 }
 const handlePrev=()=>{
     if(page>0){
        setPage(prev=>prev-1)
     }
 }

 const handleNext=()=>{
    if(endIdx<data.length){
        setPage(prev=>prev+1);
    }
 }
  return (
    <section className='tra-section'>
        <SecondaryHeading heading={heading}/>
        
        <div className='transaction-box'>
            {currentElements.map((item,idx)=>(
                <div key={idx}>
                <div style={{padding:"8px 10px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
                        <div style={{ display:"flex", alignItems:"center",justifyContent:"center",borderWidth:"0px", borderRadius:"50%", height:"30px", width:"30px", backgroundColor:"#D9D9D9"}}>
                           {AvailableCategory[item.category]||<MdAttachMoney/>}
                        </div>
                         <div style={{display:"flex", flexDirection:"column"}}>
                            <span>{item.title}</span>
                            <span style={{color:"#9B9B9B"}}>{item.date}</span>
                         </div>
                    </div>
                    <div style={{display:"flex", gap:"15px", alignItems:"center"}}>
                         <span style={{color:"#F4BB4A"}}>₹{item.amount}</span>
                         <div style={{display:"flex" ,gap:"10px", alignItems:"center"}}>
                            <SecondaryButton item={<FaEdit color='white' size={20}/>} color={"#F4BB4A"}/>
                            <SecondaryButton item={<TiDeleteOutline color='white' size={30}/>} color={"#FF3E3E"}/>
                         </div>
                    </div>
                </div>
                {idx!==data.length-1&&
                <hr style={{width:"98%"}}></hr>
                }
             </div>
        ))}
        <div style={{display:"flex",gap:"10px", alignItems:"center",justifyContent:"center", marginTop:"12px"}}>
            <button 
            className='circle-button'
            onClick={handlePrev}
            >
                <IoIosArrowRoundBack size={30}/>
            </button>
            <div style={{backgroundColor:"#43967B",color:"white", padding:"5px",fontSize:"1.5rem", height:"30px",width:"30px",textAlign:"center",borderRadius:"10px", borderWidth:"0px"}}>
                {page+1}
            </div>
            <button 
            className='circle-button'
            onClick={handleNext}
            >
                <IoIosArrowRoundForward size={30} />
            </button>
        </div>
        </div>
    </section>
  )
}

export default Transactions