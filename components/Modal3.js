/* eslint-disable prettier/prettier */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="w-max-lg text-1xl px-4 py-6 lg:text-4xl font-bold text-white bg-slate-300 hover:bg-slate-500 rounded-md bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
        Illustration Altstadt 
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-yellow-600/50"
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
              <Dialog.Overlay className="fixed inset-0 " />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
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
                <Dialog.Title
                  as="h3"
                  className="mt- text-2xl text-center font-bold leading-6 text-gray-100 md:text-7xl lg:mt5 lg:text-6xl"
                >
                  Karte Altstadt Freiburg
                </Dialog.Title>
                <div className="mt-2 lg:mt-0">
                <div className="p-5 mb-6 lg:mb-12 container items-center max-w-sm px-5 mx-auto mt-16 text-cente border border-gray-50 shadow-2xl shadow-gray-400">
                        <Image src="/MapFreiburg.png" alt="Illuustration Altstadt" height="900" width="955"/>
                        <h1 className="mt-2 mb-10 text-gray-100 text-center lg:text-2xl">Illusttration Altstadt Freiburg </h1>
                </div>
                </div>

                <div className="mt-1">
                  <button
                    type="button"
                     className="inline-flex justify-center px-4 py-2 text-xl md:text-5xl font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    zurück
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
