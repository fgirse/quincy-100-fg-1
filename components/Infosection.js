/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */
import React from 'react'
import LogoNeu from '../data/SvgLogoNeu'
import Link from 'next/link'

function Infosection() {
  return (
    <>
      <section className="container sticky -top-0 z-50 h-20 w-[100vw] mx-auto md:bg-amber-800 ">
        <div className="mx-auto w-full flex flex- justify-around items-end md:flex-row md:items-center md:justify-start md:gap-x-5">
          <div className="">
            <LogoNeu className="ml-5 mt-3 p-1 w-24 h-12 lg:w-40 lg:h-16"></LogoNeu>
          </div>

          <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-2">
          <svg className="w-6 h-6" fill="none" stroke="#fff200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <p className="font-sans font-bold text-gray-100 lg:text-sm xl:text-lg 2xl:text-xl ">
              0761 38386747
            </p>
          </div>

         
          <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-1">
          <svg className="w-6 h-6" fill="#fff200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            <p className="font-sans font-bold text-gray-100 lg:text-sm xl:text-lg 2xl:text-xl ">
              rettungsanker-freiburg@gmx.de
            </p>
          </div>
        

        <div className='hidden lg:inline-block lg:lg-white lg:h-12 lg:w-48 lg:rounded-2xl lg:base-3'></div>

        <div className=' base-6'>

        <Link href="/block" >
              <a className="bg-amber-600 hover:bg-amber-800 text-3xl lg:h-14 px-8 py-1 rounded-2xl lg:text-3xl text-slate-100 lg:bg-sky-800 lg:hover:bg-amber-500">Login</a></Link>   
        </div>
         
          
        </div>
      </section>


     


    </>
  )
}

export default Infosection


