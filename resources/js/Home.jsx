import React, { useState, useEffect, useRef } from 'react'
import CreateReactScript from './Utils/CreateReactScript'
import { createRoot } from 'react-dom/client'

const Home = () => {
  const slides = new Array(17).fill(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollPosition = window.scrollX // Cambiado a scrollX para scroll horizontal
        const windowWidth = window.innerWidth // Tamaño de la ventana horizontalmente
        const newIndex = Math.floor(scrollPosition / windowWidth)
        if (newIndex !== currentImageIndex && newIndex < slides.length) {
          setCurrentImageIndex(newIndex)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentImageIndex])

  return (
    <div
      ref={sliderRef}
      className="h-screen w-screen overflow-x-scroll snap-x snap-mandatory bg-slate-950 flex" // Ajustado para scroll horizontal
      style={{ scrollSnapType: 'x mandatory', overflowY: 'hidden' }} // Deshabilitar scroll vertical
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="h-screen w-screen snap-start flex-shrink-0 shadow flex items-center justify-center" // Snap horizontal
        >
          <img
            src={`/assets/slides/Pagina ${index}.png`}
            className="h-auto w-full max-w-[95vw] max-h-[95vh] bg-no-repeat bg-center shadow-2xl object-contain rounded-2xl"
          />
        </div>
      ))}
    </div>
  )
}

CreateReactScript((el, properties) => {
  createRoot(el).render(<Home {...properties} />);
})
