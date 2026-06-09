"use client"
import React, {useEffect, useState} from 'react'

const slides = [] // slides removed per request

export default function Carousel(){
  const [index,setIndex] = useState(0)
  useEffect(()=>{
    if(slides.length < 2) return
    const t = setInterval(()=>setIndex(i=> (i+1)%slides.length),3500)
    return ()=>clearInterval(t)
  },[])

  if(slides.length === 0) return null

  return (
    <div className="carousel" aria-roledescription="carousel">
      <div className="slides" style={{transform:`translateX(${-index*100}%)`}}>
        {slides.map((s,idx)=> (
          <div className="slide" key={idx} aria-hidden={idx!==index}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'transparent',boxShadow:'none'}}>
              <div className="slide-icon"><img src="/assets/pictures/0265a5a0-b67b-4edd-8ca7-34efaa882636.png" alt="squirrel" style={{width:96,height:96,objectFit:'contain'}}/></div>
              <div className="slide-title">{s.title}</div>
              <div className="slide-sub">{s.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_,i)=> (
          <button key={i} className={"dot "+(i===index? 'active':'')} onClick={()=>setIndex(i)} aria-label={`Go to slide ${i+1}`}></button>
        ))}
      </div>
    </div>
  )
}
