/* eslint-disable no-inner-declarations */
/* eslint-disable prettier/prettier */
import React from "react";
import Image from 'next/image';






export default function Team() {
 

  return (

    <>
    
    <section className=" w-screen mx-auto border-t-4 border-amber-500 flex flex-col items-center justify-between">
      {/*====================================== wrapper background ==================================================================================================================================*/}
      <div className=" mx-auto mb-auto flex-grow bg-cover bg-[url('/Maritim2.png')] w-[100vw] h-[320vh] bg-no-repeat bg-center relative z-0 lg:h-[100vh]">
        {/*====================================== flex-col==============================================================================================================================*/}
        <div className="flex flex-col items-center justify-start">
          <div className=" h-[10vh] lg:h-full">
            <p className="mt-12 headingD text-5xl text-amber-600  uppercase text-center xl:text-[7rem] ">
              das team
            </p>
          </div>
          <div className="mt-5 w-10/12 xl:w-7/12">
            <Image
              src="/LogoAlt.png"
              alt="logo alt"
              height="138"
              width="1100"
              layout="responsive"
            />
          </div>
        </div>
        {/*====================================== flex-col ende ==================================================================================================================================*/}
        <section className="mx-auto w-10/12 py-12 px-6 text-center md:py-4 md:px-4">
          <div className="mt-4 flex flex-wrap -mx-24">
            <div className="-mt-28 p-24 md:w-1/3 md:-order-1 xl:p-36">
              <Image
                className="rounded-full"
                src="/matrose.png"
                layout="responsive"
                width="100"
                height="120"
                alt="Portrait"
              />
              <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">
                Simon
              </h3>
              <span className="text-2xl text-blue-800 font-bold ">
                Obermaat
              </span>
              <p className="mt-4  text-1xl text-gray-300 leading-relaxed xl:text-2xl">
                Simon ist Teammitglied der ersten Stunde. Im richtigen Leben
                studiert Simon an der Uni Erziehungswissenschaften und hat
                gerade seinee Master absolviert. Simon ist ausgewiesener SC
                Freiburg Fan und wann immer möglich begleited er das Team zu
                den Auswärtsspielen
              </p>
            </div>
            <div className="-mt-28 p-24 -order-1 md:w-1/3 xl:p-36 ">
              <Image
                className="rounded-full"
                src="/portrait-mick1.png"
                layout="responsive"
                width="100"
                height="120"
                alt="Portrait"
              />
              <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">
                Mick
              </h3>
              <span className="text-2xl text-blue-800 font-bold ">
                Captain
              </span>
              <p className="mt-4 text-1xl text-gray-300 leading-relaxed xl:text-2xl">
                Volker Schneider und Michael Schreck haben 2017 die Idee und
                das Konzept des Rettungsankers initiert und liessen den Kahn
                in September 2017 vom Stapel laufen. Seit Januar 2020 zeigt
                sich Michael nun in alleiniger Verantwortung für den
                Rettungsanker und steurt das Schiff in diesen unruhigen Zeiten
                verantwortungsvoll durch die hohen Wogen{' '}
              </p>
            </div>
            <div className="-mt-28 p-24 md:w-1/3 xl:p-36">
              <Image
                className="rounded-full"
                src="/Offizierin.png"
                layout="responsive"
                width="100"
                height="120"
                alt="Portrait"
              />
              <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">
                Anne
              </h3>
              <span className="text-2xl text-blue-800 font-bold ">
                I. Offizierin
              </span>
              <p className="mt-4 text-1xl xl: text-center text-sm text-gray-300 leading-relaxed xl:text-2xl ">
                Auch Anne ist Teammitglied derersten Stunde nach Stapelablauf
                des Rettungsanker-Mit Ihrer langjährigen Gastroerfahrung ist
                sie ein wichtiger Pfeiler im Team des Rettungsankers
              </p>
            </div>
          </div>
          
        </section>
      </div>
      {/*====================================== wrapper background ende ==================================================================================================================================*/}
  
    </section>


  
  
   
  </>
 
  
  )
  
  };
