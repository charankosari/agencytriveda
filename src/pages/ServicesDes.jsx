import React from 'react'
import { useRecoilValue } from 'recoil'
import { ServicesAtom } from '../store/store'


export default function ServicesDes() {
    const service = useRecoilValue(ServicesAtom)
    console.log(service)
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900  font-sora ">
    <div className="container mx-auto px-6 py-12">
      <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl mb-4 text-textPrimary animate-fadeIn">
   {service.services}
      </h1>
      <p className='text-center mb-8 animate-fadeIn text-white'>{service.description}</p>
    
    </div>
  </div>
  )
}
