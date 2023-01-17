import React from 'react'
import './cursor.css'

function Cursor(props) {
    const cursorRef = React.useRef(null);
    
    React.useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            const {clientX, clientY} = e;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;

            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })
    }, [])
    
  return (
    <div className="cursor" 
    ref={cursorRef} 
    style={{
        width: props.hoverState ? '56px' : '40px',
        height: props.hoverState ? '56px' : '40px', 
        mixBlendMode: props.hoverState ? 'difference' : 'normal', 
        backgroundColor: props.hoverState ? 'white' : 'transparent'
    }} />
  )
}

export default Cursor
