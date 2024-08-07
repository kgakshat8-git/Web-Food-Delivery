import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',   
  backgroundColor: 'rgb(34,34,34)',
  transform: 'translate(-50%, -42%)',
  zIndex: 1000,
  height: '80%',
  width: '90%',
  padding: '50px'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
  //padding: '100px'
}

export default function Modal({ children, onClose }) {

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button className='bg-red-700 font-xl w-8 h-9 rounded-md font-semibold -mt-52 -translate-y-16' style={{ marginLeft: "95%" }} onClick={onClose}> X </button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  )
}