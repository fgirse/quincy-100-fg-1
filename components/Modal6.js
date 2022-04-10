/* eslint-disable prettier/prettier */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { InformationCircleIcon } from '@heroicons/react/solid'
import Arena from './icons/svg/SVGArena'

export default function MyModal5() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return(
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="mt-3 w-max-lg text-4xl py-5 px-4 lg:text-3xl lg:py-5 font-bold text-white bg-orange-600 hover:bg-slate-500 rounded-md bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <InformationCircleIcon className="w-8 h-6 fill-slate-50 inline" />
          Reservationen
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-slate-500/75" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >

            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-7xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 bg-opacity-100 border border-white shadow-xl rounded-2xl">
                <InformationCircleIcon className="-mt-6 p-2 w-16 h-16 inline lg:h-16 lg:w-16 text-yellow-600" />
                <Dialog.Title
                  as="h3"
                  className="ml-3 headingA inline mt-16 lg:text-stroke-11 text-[2rem] text-center font-bold leading-6 text-yellow-600 md:text-6xl lg:mt-24 lg:text-5xl"
                >
                  Tisch - Reservation
                </Dialog.Title>

                <div className="mt-2 lg:mt-1 ">
                  <p className="newspaper text-lg text-white 2xl:text-4xl heading-0">
                    U1nsere Sportarena{' '}
                    <Arena className="inline h-36 w-36"></Arena> mit
                    regelmässigen Live-Übertragungen der Fussball-Bundesliga
                    erfreut sich immer grösserer Beliebtheit. Insbesondere zu den
                    Topspielen des SC Freiburg empfehlen wir eine
                    Tischreservation.
                    <br />
                    <br /> Mit unserem neuen Booking Tool sichern Sie sich die
                    besten Plätze in der "ersten Reihe" der Fussball-Arena Wir
                    freuen uns auf spannende, torreiche Spiele...!!!
                    <br />
                    <br />
                    Ihr Team Rettungsanker
                  </p>
                </div>
                <div className="mt-5 flex flex-row justify-evenly gap-5 ">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-xl md:text-5xl font-medium font-sans text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 lg:mb-6"
                    onClick={closeModal}
                  >
                    zurück
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-xl md:text-5xl font-medium font-sans text-blue-900 bg-orange-300 border border-transparent rounded-md hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 lg:mb-6"
                    onClick={closeModal}
                  >
                    Tischreservation
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
