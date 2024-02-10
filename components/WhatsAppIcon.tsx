import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import pimage from '../images/pimg.jpg'
import dynamic from "next/dynamic";


const WhatsAppIcon = () => {
  return (
    
       <FloatingWhatsApp avatar={pimage.src} phoneNumber="+918999105272" accountName='Dipak Khade' chatMessage="Hello, how can I help you?" />

  )
}



export default dynamic (() => Promise.resolve(WhatsAppIcon), {ssr: false})
