"use client"
import React, {useEffect, useState} from 'react'

const slides = [
  {title:'Trò chơi thú vị', subtitle:'+50 XP', color:'#fff7ed'},
  {title:'Bài học mới', subtitle:'+100 XP', color:'#eef2ff'},
  {title:'Nhiệm vụ thực tế', subtitle:'+120 XP', color:'#ecfdf5'},
]

export default function Carousel(){
  const [index,setIndex] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=>setIndex(i=> (i+1)%slides.length),3500)
    return ()=>clearInterval(t)
  },[])

  return (
    <div className="carousel" aria-roledescription="carousel">
      <div className="slides" style={{transform:`translateX(${-index*100}%)`}}>
        {slides.map((s,idx)=> (
          <div className="slide" key={idx} aria-hidden={idx!==index}>
            <div className="slide-card" style={{background:s.color}}>
              <div className="slide-icon">🎮</div>
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
