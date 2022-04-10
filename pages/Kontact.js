/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-key */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react'
import Modal3 from '../components/Modal3.js'
import Modal4 from '../components/Modal4.js'
import Image from 'next/image'

export default function Kontact() {
  return (
    <>
      {/* Section 1 */}

      <section className=" mx-auto px-2 pt-5 bg-slate-800 md:px-0">
        <div className="bg-green-100/10 rounded-2xl container items-center max-w-7xl px-8 mx-auto xl:p-3">
          <div className="py-5 mt-3 lg:mt-5 mx-auto w-11/12 md-7/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12">
            <Image
              className=""
              src="/LogoAlt.png"
              layout="responsive"
              alt="Logo alt"
              height="280"
              width="1049"
            />
          </div>

          <div className="mt-6 mb-12 container items-center w-48 max-w-sm px-5 py-4 mx-auto text-center border border-gray-50 shadow-2xl shadow-gray-400 lg:max-w-xl">
            <Image
              src="/MapFreiburg.png"
              alt="Illustration Altstadt"
              height="900"
              width="955"
            />
            <h1 className="mt-2 mb-2 text-gray-100 text-center text-xs">
              Illustration Altstadt Freiburg{' '}
            </h1>
          </div>

          <p className="headingc mt-1 text-center text-gray-50 text-5xl md:text-7xl lg:text-9xl">
            WOHIN?
          </p>
          <div className="mt-12 container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-left text-gray-300 lg:yellow-500 sm:text-5xl md:text-3xl md:text-center lg:text-6xl">
              <span className="block">
                LAGEPLAN{' '}
                <span className="block mt-1 text-yellow-400 lg:inline lg:mt-0">
                  Rettungsanker Freiburg
                </span>
              </span>
            </h1>
            <p className="w-full mx-auto text-sm text-left text-white md:max-w-md sm:text-lg lg:text-2xl xl:text-xl md:text-center">
              Adelhauserstrasse 7c
              <br />
              79098 Freiburg
              <br />
              phone: 0761 3838 6747
              <br className="text-xxs" />
              email: rettungsanker@.gmx.de
            </p>
            <div className="flex flex-col border border-white shadow-xl shadow-gray-500/70 p-4 lg:flex lg:flex-row justify-around items-center">
              <div className="bg-gray-300/10 py-4 px-2 rounded-2xl mb-2 w-40 h-20 lg:w-80 xl:w-80">
                <Image
                  src="/VAG_Freiburg.png"
                  layout="responsive"
                  alt="Logo VAG-Freiburg"
                  height="94"
                  width="400"
                />
              </div>
              <h1 className="text-2xl md:text-2xl lg:text-3xl text-orange-400 ">
                Haltestelle:
              </h1>
              <h1 className="text-2xl lg:text-3xl text-orange-300">
                Holzmarkt
              </h1>
              <h1 className="text-2xl lg:text-3xl text-orange-300">
                Linie 1 3 + 5
              </h1>
            </div>

            <p className="w-full mx-auto text-sm text-justify text-gray-200 md:max-w-md sm:text-lg lg:text-2xl md:text-center">
              Sie finden uns entweder in der Kartenillustration der Freiburger
              Altstadt oder ganz professionell in der Karte von Street-Map !
            </p>
            <div className="mb-24 relative flex flex-col justify-center md:flex-row md:space-x-4">
              <div className="w-full mt-3 max">
                <Modal3></Modal3>
              </div>
              <div className="mb-5 w-full mt-3 max">
                <Modal4></Modal4>
              </div>
            </div>
          </div>
          {/* <div className="mb-24 container items-center max-w-sm px-5 mx-auto mt-16 text-cente border border-gray-50 shadow-2xl shadow-gray-400 lg:max-w-xl">
                        <Image src="/MapFreiburg.png" alt="Illuustration Altstadt" height="900" width="955"/>
                        <h1 className="mt-2 mb-10 text-gray-100 text-center text-2xl">Illusttration Altstadt Freiburg </h1>
    </div>*/}
        </div>
      </section>
    </>
  )
}
