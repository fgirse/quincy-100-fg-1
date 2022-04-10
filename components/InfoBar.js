/* eslint-disable prettier/prettier */
import React from 'react'
import LogoNeu from '../data/SvgLogoNeu'
import { PhoneIcon } from '@heroicons/react/solid'
import { AtSymbolIcon } from '@heroicons/react/solid'


const InfoBar = () => {
  return (
    <>
      <section className="container  w-[100vw] bg-slate-900 h-auto border-b-2 border-slate-100 md:flex md:flex-row md:bg-amber-800 md:py-1 md:mx-auto md:justify-around md:items-end md:w-full">
        <div className=" w-full flex flex-col md:flex-row md:items-baseline md:justify-start md:gap-x-5">
          <div className=" mt-4 flex flex-col items-center justify-start w-12/12">
            <LogoNeu className=""></LogoNeu>
          </div>

          <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-1">
            <PhoneIcon className=" text-yellow-400 w-6 h-6"></PhoneIcon>
            <p className="font-sans font-bold text-lg text-gray-100 md:text-sm lg:text-sm xl:text-sm 2xl:text-lg ">
              0761 38386747
            </p>
          </div>

         
          <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-1">
            <AtSymbolIcon className="text-yellow-400 w-6 h-6"></AtSymbolIcon>
            <p className=" font-sans font-bold text-lg  text-gray-100 md:text-sm lg:text-sm xl:text-sm 2xl:text-lg">
              rettungsanker-freiburg@gmx.de
            </p>
          </div>
        </div>

        <div className="hidden md:block md:mr-10">
          <div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default InfoBar