/* eslint-disable prettier/prettier */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { InformationCircleIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import LogoLeckerladen from '../components/icons/svg/SVGLogoLeckerladen'                                          

export default function MyModal5() {
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
        ><InformationCircleIcon className='w-12 h-12 fill-slate-700 inline'/>
          weitere Info 
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-slade-700/70"
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
              <Dialog.Overlay className="fixed inset-0  bg-slate-700/75" />
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
              
              <InformationCircleIcon className="-mt-6 p-2 w:8 h:8 inline lg:h-28 lg:w-28 text-yellow-600"/> 
                <Dialog.Title
                  as="h3"
                  className="ml-3 headingA inline mt-16 lg:text-stroke-11 text-2xl text-center font-bold leading-6 text-yellow-600 md:text-6xl lg:mt-24 lg:text-5xl"
                >
                Dein Event im Rettungsanker 
                </Dialog.Title> 

             
          
                <div className="mt-2 lg:mt-1 ">
                <p className="newspaperA text-justify p-3 text-gray-100 text-xs lg:text-xl">Der Rettungsanker und seine Räumlichkeiten sind eine ideale Location um Ihre privaten oder geschäftlichen Anlässe wie Geburtstage, Hochzeiten und Verlobungen, aber auch Firmen- oder Belegschaftspartys zu gestalten. Im Rahmen einer "geschlossenen Gesellschaft" steht Ihnen der Rettungsanker mit seinen Räumlichkeiten für Ihre Feierlichkeiten zur Verfügung. Auch können wir Ihnen - falls dies erwünscht - ein vollumfängliches <span className='text-yellow-400 font-bold'>Catering</span> anbieten. Hier sind Ihren Wünschen im Grunde genommen keine Grenzen gesetzt. Unsere Koperationspartner  <LogoLeckerladen className="inline align-middle w-20 h-12"/>  sind für ausgezeichnete und ideenreiche Apero-Buffets oder Menues besoders ausgewiesen und werden nichts unversucht lassen Ihre Wünsche und Ideen umzusetzten. 
                Nähere Informationen zur Planung Ihres Events besprechen wir am sinnvollsten nach <span className='text-yellow-400 font-bold'>Vereinbarung eines persönlichen Termins</span>. Senden Sie uns eine e-mail oder sprechen Sie uns direkt im Rettungsanker an!!! Wir freuen uns Ihre Feierlichkeiten professionell begleiten zu dürfen.
                Michael Schreck und das Team Rettungsanker." </p>
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
                     className="inline-flex justify-center px-4 py-2 text-xl md:text-5xl font-medium font-sans text-gray-100 bg-orange-600 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    email
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
