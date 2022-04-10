/* eslint-disable prettier/prettier */
import React from 'react'
import Image from 'next/image'
import Modal5 from '../components/Modal5.js'
import * as Icons from "heroicons-react";


export default function event() {
  return (
    <>
    <section className="mx-auto  flex flex-col py-5 border-t-4 items-center border-amber-500 w-[100vw] h-[100vh)]">
    <div className="min-height: 100vh; flex-1  w-full rounded-2xl flex-col items-center justify-between">
    
    
    
                    <div className='bg-slate-900'>
                          <p className=" selection:text-6xl headingB py-4 text-center text-gray-100 sm:text-6xl md:text-5xl lg:mt-5 lg:text-8xl lg:py-8 ">
                            Dein Event
                          </p>
                          <div className="mx-auto py-2  w-10/12 sm:w-5/12 md:w-2/12  lg:w-4/12 lg:-mt-8 xl:w-2/12">
                            <Image
                              src="/Logoalt.png"
                              layout="responsive"
                              alt="Logo-alt "
                              width="1049"
                              height="230"
                            />

                          </div>

                          <div className="mx-auto py-12  w-10/12 sm:w-5/12 md:w-2/12  lg:w-6/12 lg:-mt-8 xl:w-4/12">
                            <Image
                              src="/noten.png"
                              layout="responsive"
                              alt="Logo-alt "
                              width="1049"
                              height="330"
                            />

                          </div>
                          <div className="mx-auto py-2  w-10/12 sm:w-5/12 md:w-2/12  lg:w-4/12 lg:-mt-8 xl:w-4/12">
                            <Image
                              src="/piano1.png"
                              layout="responsive"
                              alt="Logo-alt "
                              width="1049"
                              height="230"
                            />

                          </div>



                    </div>
                    <div className="w-full">
                    <section className="w-11/12 py-2 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-slate++++++++++++++++++++++++++++++11+1+1++-700 dark:bg-gray-800 lg:mx-8 lg:flex w-full lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
                <div className="mt-16 bg-contain lg:rounded-lg  bg-[url('/EventGruppe.png')] bg-no-repeat w-100vw] h-[100vh]"></div>
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                <h2 className="text-2xl font-bold text-yellow-400 dark:text-white md:text-4xl lg:text-6xl">Privater Anlass oder Business-Event  <span className="text-red-600 text-6xl dark:text-blue-400">!</span></h2>
                <p className="mt-4 text-gray-300 dark:text-gray-400">Wir planen gerne für Sie Ihren persönlichen Event - auf Wunsch Catering vollumfänglich möglich{' '}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  <span className="text-bold text-yellow-600">
                    <a href>weitere Infos</a>
                  </span>
                  Sprechen Sie uns an oder kontaktieren Sie uns per mail</p>
                <div className='flex flex-col items-start justify-center gap-y-8'>
                <div className="mt-8">
                    <a href="#" className=" px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform lg:text-3xl bg-gray-900 rounded-md hover:bg-gray-700">e-mail Rettungsanker</a>
                  </div>
                    <Modal5></Modal5> 
                </div>
                             
            </div>
        </div>
    </section> 

                    </div>
  </div>
  </section>

     </>
    )
    }      
