import React, { useState,useRef } from 'react'
import './memory.css'
import Shuffle from './Shuffle'


const items=[1,2,3,4,5]
const allitem=Shuffle([...items,...items])
const defaultstate={index:null,value:null};

export default function Memory() {
    const [firstcard,setfirstcard]=useState(defaultstate);
    const [secondcard,setsecondcard]=useState(defaultstate);
    const [remainingcards,setremainingcards]=useState(items);
    const [moves,setmoves]=useState(0)

    const timer=useRef();

const handleclick=(index,value)=>{
    clearTimeout(timer.current)
    timer.current=setTimeout(() => {
     setfirstcard(defaultstate)
     setsecondcard(defaultstate)
    }, 1200);

if(firstcard.index===null||(firstcard.index!==null&&secondcard.index!==null)){
setsecondcard(defaultstate)
setfirstcard({index,value});
setmoves((moves)=>moves+1);
}else if(secondcard.index===null&&firstcard.index!==index){
    setsecondcard({index,value})
    setmoves((moves)=>moves+1);
    if(firstcard.value===value){
        setremainingcards(remainingcards.filter(card=>card!==value))
    }
}
}
return (
    <>
    {remainingcards.length>0?'Remaining cards  ':`Win by ${moves} moves! 🎉🎉`}
    {remainingcards.map((card,index)=>{
        return <img key={index} alt={`cat ${index}`} src={`https://robohash.org/${card}?set=set4&&size=80x80`}/>

    })}
    <div className='cardscont'>
      {allitem.map((item,index)=>{
          return (<div key={index} className={`cards ${(firstcard.index===index||secondcard.index===index||!remainingcards.includes(item))&&"flipped"}`} 
          onClick={()=>handleclick(index,item)}>
            <div className="backside"></div>
            <img
                alt={`cat ${index}`}
                src={`https://robohash.org/${item}?set=set4&&size=120x120`}
              />
        </div>)
      })}
    </div>
    moves used:{moves}
    </>
  )
}