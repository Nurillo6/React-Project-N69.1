import React from 'react'

function Modal({children, isOpenModal, setIsOpenModal}) {
  return (
    <div onClick={(e) => e.target.id == "modal" ? setIsOpenModal(false) : ""} className={`fixed duration-300 top-0 bottom-0 left-0 right-0 backdrop-blur ${isOpenModal ? "scale-1" : "scale-0"}`} id='modal'>
        <div className='w-[600px] h-[400px] p-5 rounded-md bg-slate-300 absolute top-0 left-0 right-0 bottom-0 m-auto'>{children}</div>
    </div>
  )
}

export default Modal