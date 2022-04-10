import React from 'react'
import StyledButton from '/components/Buttons/Button'
import Image from 'next/image'
import Modal5 from '../components/Modal5.js'
import { InformationCircleIcon } from '@heroicons/react/solid'
import Saxophone from '../components/icons/svg/SVGSaxophoneWeiss'

export default function event() {
  return (
    <>
      <section className="mx-auto mb-12 px-2 py-5 w-11/12 bg-slate-700 md:px-0 rounded-2xl">
        -
        <div className="container -mt-32 rounded-2xl h-11/12 bg-yellow-200/10 items-center max-w-7xl px-8 mx-auto xl:px-5">
          <p className="mt-16 headingB py-4 text-center text-gray-100 sm:text-6xl md:text-5xl lg:text-7xl lg:py-8 ">
            Dein Event
          </p>
          <div className="mx-auto w-10/12 sm:w-5/12 md:w-2/12  lg:w-4/12 lg:-mt-8 xl:w-3/12">
            <Image
              src="/LogoAlt.png"
              layout="responsive"
              alt="Logo-alt "
              width="1049"
              height="230"
            />
          </div>
          <div className="mt-12 mx-auto rounded-x sm:w-3/12 lg:mt-0 lg:transform lg:rotate-[60deg] lg:transform: lg:-skew-y-[60deg] lg:w-2/12 xl:4/12">
            <Image
              src="/piano1.png"
              layout="responsive"
              alt="Piano "
              width="105"
              height="102"
            />
          </div>
          <div className="mx-auto absolute top-[60vh] md:transform -translatey-20w-4/12 -translate-y-820lg:mt-0 lg:transform lg:w-2/12 xl:4/12 xl:transform xl:-translate-y-80 xl:left-[55vw]">
            <Saxophone height="15vh" width="5vw"></Saxophone>
          </div>

          <div className="-mt-20 flex flex-wrap items-center sm:-mx-3 lg:mt-24">
            <div className=" lg:-mt-[30vh] w-full h-full order-last md:w-1/2 md:px-3 sm:order-first">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="mt:24 lg:mt-36 text-3xl font-extrabold tracking-tight text-yellow-400 sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  <span className="block xl:inline">
                    privater oder business Anlass? <br />
                  </span>
                  Dein Event
                  <span className="block text-orange-600 xl:inline"> ! </span>
                </h1>
                <p className="mx-auto text-base text-gray-400 sm:max-w-md md:max-w-3xl lg:max-w-lg lg:text-xl 1xl:text-2xl">
                  Wir planen gerne für Sie Ihren persönlichen Event - auf Wunsch
                  Catering vollumfänglich möglich{' '}
                  <InformationCircleIcon className="inline h-9 w-9 lg::h-12 lg:w-12 text-yellow-600" />{' '}
                  <span className="text-bold text-yellow-600">
                    <a href>weitere Infos</a>
                  </span>{' '}
                  Sprechen Sie uns an oder kontaktieren Sie uns per mail
                </p>
                <div className="p-6 relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#_"
                    className="text-xs  text-center flex items-center w-full px-6 py-o mb-3 lg:text-3xl text-white bg-yellow-600 rounded-md sm:mb-0 hover:bg-yellow-400 sm:w-auto"
                  >
                    email Rettungsanker
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-20 h-20 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#494949"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <Modal5 className="mb-12"></Modal5>
                </div>
              </div>
            </div>
            <div className=" -mt-[6vh] w-full sm:mt-0 md:w-1/2 ">
              <div className="mt-36 w-8/12 h-auto ml-16 overflow-hidden rounded-md shadow-xl sm:rounded-xl lg:-mt-[30vh]">
                <Image
                  src="/Women_Illustration_adobespark.png"
                  alt=""
                  height="900"
                  width="955"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
