/* eslint-disable prettier/prettier */
import React from 'react'
import Modal3 from '../components/Modal3.js'
import Modal4 from '../components/Modal4.js'
import Image from 'next/image'

export default function kontakt() {
  return (
    <>

      <main className=" mx-auto bg-slate-800 border-t-4 border-amber-500 px-2 pt-5 md:px-0">
        <section className="container mx-auto max-w-7xl h-[calc(100vh-48px)] items-center rounded-2xl bg-slate-800 px-8 xl:p-3">
        <div className="md-7/12 mx-auto  w-11/12 py-5 lg:mt-5 lg:w-3/12 xl:w-3/12 2xl:w-3/12">
            <Image
              className=""
              src="/LogoAlt.png"
              layout="responsive"
              alt="Logo alt"
              height="280"
              width="1049"
            />
          </div>

          <div className="container mx-auto  mb-12 w-48 max-w-sm items-center border border-gray-50 px-5 py-4 text-center shadow-2xl shadow-gray-400 lg:max-w-xl">
            <Image src="/MapFreiburg.png" alt="Illustration Altstadt" height="900" width="955" layout="responsive" />
            <h1 className="mt-2 mb-2 text-center text-xs text-gray-100">
              Illustration Altstadt Freiburg{' '}
            </h1>
          </div>
          <div className="-mt-16 flex flex-row justify-center items-center">
                  <Image
                          
                          alt="Hans Albers"
                          height="233px"
                          width="233x"
                          Layout="responsive"
                          src="/Albers_Illu_white.png"
                          className='transform translate-x-'
                        />
                  <p className="headingc text-center text-5xl text-gray-50 md:text-7xl lg:text-9xl">
                       WOHIN?
                 </p>

          </div>
          
        </section>
        
         
          
          <div className="container mx-auto mt-12 max-w-6xl items-center space-y-6 px-5 text-center">
            <h1 className="lg:yellow-500 text-left text-3xl font-extrabold tracking-tight text-gray-300 sm:text-5xl md:text-center md:text-3xl lg:text-6xl">
              <span className="block">
                LAGEPLAN{' '}
                <span className="mt-1 block text-yellow-400 lg:mt-0 lg:inline">
                  Rettungsanker Freiburg
                </span>
              </span>
            </h1>
            <p className="mx-auto w-full text-left text-sm text-white sm:text-lg md:max-w-md md:text-center lg:text-2xl xl:text-xl">
              Adelhauserstrasse 7c
              <br />
              79098 Freiburg
              <br />
              phone: 0761 3838 6747
              <br className="text-xxs" />
              email: rettungsanker@.gmx.de
            </p>
            <div className="flex flex-col items-center justify-around border border-white p-4 shadow-xl shadow-gray-500/70 lg:flex lg:flex-row">
              <div className="mb-2 h-20 w-40 rounded-2xl bg-gray-300/10 py-4 px-2 lg:w-80 xl:w-80">
                <Image
                  src="/VAG_Freiburg.png"
                  layout="responsive"
                  alt="Logo VAG-Freiburg"
                  height="94"
                  width="400"
                />
              </div>
              <h1 className="text-2xl text-orange-400 md:text-2xl lg:text-3xl ">Haltestelle:</h1>
              <h1 className="text-2xl text-orange-300 lg:text-3xl">Holzmarkt</h1>
              <h1 className="text-2xl text-orange-300 lg:text-3xl">Linie 1 3 + 5</h1>
            </div>

            <p className="mx-auto w-full text-justify text-sm text-gray-200 sm:text-lg md:max-w-md md:text-center lg:text-2xl">
              Sie finden uns entweder in der Kartenillustration der Freiburger Altstadt oder ganz
              professionell in der Karte von Street-Map !
            </p>
            <div className="relative mb-24 flex flex-col justify-center md:flex-row md:space-x-4">
              <div className="max mt-3 w-60">
                <Modal3></Modal3>
              </div>
              <div className="max mb-5 mt-3 w-60">
                <Modal4></Modal4>
              </div>
            </div>
          </div>
          {/* <div className="mb-24 container items-center max-w-sm px-5 mx-auto mt-16 text-cente border border-gray-50 shadow-2xl shadow-gray-400 lg:max-w-xl">
                        <Image src="/MapFreiburg.png" alt="Illuustration Altstadt" height="900" width="955"/>
                        <h1 className="mt-2 mb-10 text-gray-100 text-center text-2xl">Illusttration Altstadt Freiburg </h1>
    </div>*/}
        
      </main>
    </>
  )
}
