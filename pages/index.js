/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import Link from '@/components/Link'
import ReactDOM from "react-dom";
import { PageSEO } from '@/components/SEO'
import Arena from '../components/icons/svg/SVGArena'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Modal6 from '../components/Modal6'
import * as Icons from 'heroicons-react'
import Flensburger from "../components/icons/svg/SVGFlensburger";
import Ganter from "../components/icons/svg/SVGGanter";
import Astra from "../components/icons/svg/SVGAstra";
import Astraflasche from"/components/icons/svg/SVGAstraflasche";
import Skyline from "../components/icons/svg/SVGSkyline_weiss_3.js";
import SCLogo from "../components/icons/svg/SCLogo";
import FlensDose from '../components/icons/svg/SVGFlensdose';
import LogoNeu from '../components/icons/svg/SvgLogoNeu'
import Image from "next/image";
import Modale6 from '../components/Modal6'
import sketchy from "theme-ui-sketchy-preset";
import Carousel from "../components/Carousel/Carousel"
import NewsletterForm from '@/components/NewsletterForm'
import SetBgImage from '../components/SetBgImg'

import {
  jsx,
  Flex,
  Box,
  NavLink,
  ThemeProvider,
  Button,
  Card,
  Text,
  Label,
  Checkbox,
  Select,
  Textarea,
  Radio,
  Input,
  Badge,
  Alert,
  Divider,
  Styled as S,
} from "theme-ui";

const theme = {
  ...sketchy,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },
};


const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}



export default function Home({ posts }) {

  
    

return(
<>
{/*======================================================================= SECTION A ===========================================================*/}
<section className="absolute top:0 right:0 left:0 bottom:0 top:50 right:0 left:0 bottom:0 mt-5  h-[100vh] lg:mt-5 container flex items-center justify center w-full mb-8 mx-auto flex-grow-1 bg-[url('/LogoNeu.png')] bg-contain bg-no-repeat lg:border-t-4 lg:border-b-4 lg:border-amber-400  md:bg-[url('/Hero8.png')] md:bg-cover md:bg-no-repeat md:w-[100vw] md:h-[calc(100vh-40px-18vh)]">
<div className='-mt-6 mx-auto text-center flex flex-col justify-center items-center lg:hidden'>
    
        <div className='mt-12 sm:mt-30 mb-12 w-40 h-40 lg lg:hidden'>
              <Image  
              src="/Albers_Illu_white.png"
              width="195" 
              height="208" 
              alt="hans albers" />
        </div>
        <div className="-mt-10 mb-3 mx-auto md:hidden">
              <Modal6></Modal6>

        </div>
        <p className='mt-3 w-10/12 mx-auto text-xsm text-justify text-slate-100'>Reserviere einen Tisch im Rettungsanker mit unserem neuen Booking Tool - Du erhälst automatisch eine Bestätigung Deiner Anfrage. Wir setzen uns dann entweder telefonisch oder per mail mit Dir in Verbindung.</p>
        </div>
</section>
{/*=============================================== ENDE SECTION A =================================================*/}
{/*======================================================================= SECTION B ===========================================================*/}
  <section className="hidden lg:block lg:mx-auto lg:mt-2 lg:rounded-3xl lg:w-screen bg-slate-900 lg:h-[14vh] ">
          <div className="grid grid-cols-1 md:grid md:grid-cols-[7fr_6fr]  items-center justify-center">
                <div className="">
                        <h1 className=" ml-4 headingB text-slate-50 lg:text-base px-4 2xl:leading-14 xl:text-[2.66rem] font-black transform -rotate-0 translate-y-5">
                          Dein Treffpunkt in Freiburg !!!</h1>
                </div>
                <div className="">
                <Skyline width="100%" height="8vh" />
              </div>
          </div>





</section>

{/*======================================================================= SECTION C ===========================================================*/}

          <section className="min-h-[100vh] h-[100%] mx-auto mt-[60vh] flex justify-center w-full md:mt-[83vh] lg:mt-[2vh]">
            <div className=" mt-60 lg:content-stretch mx-auto  grid h-96 w-11/12 grid-cols-1 lg:grid lg:grid-cols-[1fr_2fr] lg:justify-between lg:gap-x-6">
              <div className=" h-36 w-full py-2">
                <p className="mb-2 text-center text-3xl font-bold uppercase tracking-tight text-yellow-500 dark:text-white md:text-4xl xl:text-5xl">
                  öfffnungzeiten
                </p>
                <p className="sm:text-1xl mt-2 text-center text-sm text-gray-300 md:text-base lg:text-xl">
                  Montag-Donnerstag: 18 bis 24 Uhr
                </p>
                <p
                  className="sm:text-1xl xl:text-
                 text-center text-sm  text-gray-300 md:text-base lg:text-xl"
                >
                  Freitag und Samstag: 15 bis 03 Uhr
                </p>
                <p className="sm:text-1xl xl:text- text-center text-base  text-gray-300 md:text-base lg:text-xl">
                  Sonntag: Ruhetag
                </p>
              </div>
              

              <div className="mt-9 px-4 mx-auto  bg-slate-900 shadow-2xl shadow-gray-200/50 flex w-11/12 flex-col items-center rounded-2xl border md:bg-red-900 dark:bg-gray-800 md:flex-row lg:w-full lg:-mt-2">
                <div className='mt-5 lg:-mt-60'>
                <Image className="py-2 rounded-2xl" src="/portrait-mick1.png" layout="fixed" width="200" height="300" alt="portrait lg:py-0 " />
                </div>
                
                <div className="flex w-full flex-col justify-between p-5 leading-normal">
                  <h5 className="mb-3 text-3xl text-center font-sans font-bold tracking-tight text-yellow-500 dark:text-white lg:text-2xl xl:text-6xl">
                    "Moin Moin"
                  </h5>
                  <p className="relative z-50 md:newspaperA text-justify mb-1 font-normal text-gray-100 dark:text-gray-400 lg:text-[1.33rem]">
                    In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im Herzen von
                    Freiburg ein Lokal eröffnet, welches es so südlich der Elbe wohl kein zweites
                    Mal gibt. Ausgebaut im Stile eines Schiffrumpfes, ist der im Herzen der Altstadt
                    gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach Feiereabend etwas zu entspannen und nette Leute kennenzulernen. Wir sind stolz auf
                    unser buntes, internationales Publikum. Unser Rettungsanker ist auch ideale
                    Location zur Durchführung Ihres privaten oder geschäftlichen Events <Link className="w-20 h-8 bg-slate-700 hover:bg-slate-900 cursor-pointer rounded-xl px-2 "><span className='text-xl text-center'><a href="./events">INFO</a></span> </Link>  Sprechen
                    Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns eine email.
                    Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen <br />
                    <br />
                    Michael Schreck und das Team des Rettungsankers
                  </p>                  
                  <button
                type="button"
                className="mt-12 relative lg:left-[23vw] w-full text-3xl flex flex-col items-center justify-center rounded-lg border border-transparent bg-sky-200 hover:bg-orange-500 px-4 py-2 font-sans lg:text-xl font-medium text-gray-900 hover:bg-orange-700- focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-3xl lg:mb-6"
              >
                <svg className="w-16 h-16 lg:w-20 lg:h-20" fill="#ffffff" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <a className="ui btn" href="mailto:rettungsanker-freiburg@gmx.de?">
                SOS e-mail</a>
              </button>
                
                </div>
              </div>
              

            </div>


            <div className="mt-60 flex flex-col md:flex md:flex-row items-baseline">
            <div className="w-5/12 z-10 absolute left-6 transform translate-y-[70vh] md:relative md:transform md:-translate-y-10 md:w-3/12 xl:w-3/12 xl:transform: xl:-translate-y-96">
              <Image
                src="/lighthousebw.svg"
                
                alt="illustration"
                layout="responsive"
                height={473}
                width={473}
              />
            </div>
            <div className="absolute left-48 w-4/12 p-2 transform translate-y-[96vh] sm:transform sm:-translate-y-6 md:static md:py-0 md:w-8/12 md:right-16 lg:w-3/12 md:transform md:translate-y-0 xl:transforn xl:-translate-y-[5vh]">
              <Image
                className=""
                src="/Astraballons.png"
                alt="astraballons"
                layout="responsive" 
                height={2764}
                width={1839}
              />
            </div>
          <div className=" -order-1 right-9 absolute transform -translate-y-60 md:transform:-md:translate-y-6 lg:w-3/12 xl:transform xl:translate-y-[14vh]">
              <Image
                src="/rettungsring.png"
                alt="illustration"
                layout="responsive"
                height={473}
                width={473}
              />
            </div>
            <div className="hidden md:block transform -translate-y-12 right w-5/12  md:transform:-translate-y-24 lg:transform lg:w-3/12 lg:-transform: lg:-translate-y-24">
              <Image
                src="/Graffity_StPauli.png"
                alt="llustration"
                layout="responsive"
                height={224}
                width={224}
              />
            </div>
          </div>

          
          </section>
{/*========================== ENDE SECTION A =================================================*/}

        
{/*======================================= Section B =======================================================================*/}
          <section className="hidden h-[100vh] lg:block xl:-mt-48 xl:p-12">
            <div className="grid overflow-hidden grid-cols-1 md:grid md:grid-cols-3 grid-rows-2 gap-3">
              <div className="relative z-40 mx-auto w-10/12 md:w-11/12">
                <Image
                  className='relative z-40'
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
              <div className="mx-auto w-10/12 md:w-11/12">
                <Image
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
              <div className="mx-auto w-10/12 md:w-11/12">
                <Image
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
            </div>
          </section>

          {/*======================================= Ende Section B =======================================================================*/}

     

          {/*========================================================== section E ===============================================================*/}

          <section className="mt-[84vh] min-h-[100vh] h-[100vh] xl:mt-[60vh]">
          <h1 className="mt-[10vh] text-[3.99rem] headingA relative left-1 sm:text-[3.99rem] text-yellow-500 text-center md:text-8xl lg:text-[10rem] xl:-mt-[68vh]">
            Die Kneipe
          </h1>
            <div className="container text-xs mx-auto rounded-2xl lg:bg-slate-900 w-10/12  border lg:p-8  lg:h-[50vh] xl:h-[50vh]">
              <p className=" text-sm font-sans text-justify lg:newspaperA lg:mt-0 text-gray-100 px-4 lg:-mb-16 lg:text-3xl lg:leading-10">
                Gemütlich nordisches Ambiente im Herzen der Altstadt Freiburgs
                gelegen. Orginales Kiez und Waterkant-Feeling mit Astra <Astraflasche className="hidden md:inline w-20 h-16"></Astraflasche>, Flensburger & Co. <FlensDose className="hidden md:inline w-20 h-16"></FlensDose>
                Internationales, weltoffenes Publikum.
                <br/>Im Verlaufe der aktuellen Bundesligasaison jeden Samstag ab 15 Uhr und Spieltag des <SCLogo className="inline alinge-middle h-16 bg-slate-100/10 w-28"/> TY Live Berichterstattung  in unserer <Link href="/sportareNa">
                  <a className="text-lg text-yellow-600 hover:text-amber-300 hover:border-b-4 hover:border-slate-400 lg:text-4xl">
                    Sportarena.
                  </a>
                </Link>{"#"}
                <Arena className="inline w-16 h-16"></Arena> Bei
                Top Spielen des SC Freiburg mit grosser Publikumsnachfrage sind Reservierungen über unser
                Booking-Tool zu empfehlen !!!
              </p>
            </div>
            <div className='mt-20'>
              <Modale6/>
            </div>

            <ThemeProvider theme={theme}>
              <div className="-mt-1 mx-auto p-16 lg:mt-20 lg:w-11/12 lg:max-w-8xl grid grid-cols-1 justify-center items-center md:p-6  md:grid-cols-3 md:justify-around lg:item11s-center lg:gap-x-5">
                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Astra
                      object-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Astra>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Astra Bier
                    </p>
                    <p className="text-xl text-center">
                      natürlich direkt vom Kiez in den Anker
                    </p>
                  </Text>
                </Card>

                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Ganter
                      aobject-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Ganter>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Ganter Bier
                    </p>                                                                                                                                                                                                                                                                                                                                         
                    <p className="text-xl text-center">
                     köstliches Ganter-Bräu vom Fass
                    </p>
                  </Text>
                </Card>
                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Flensburger
                      object-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Flensburger>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Flensburger
                    </p>
                    <p className="text-xl text-center">
                      das blonde Herbe aus dem hohen Norden
                    </p>

                  </Text>
                </Card>
              </div>
            </ThemeProvider>
          </section>
          {/*========================================================== section E =ende ==============================================================*/}
          <section></section>
          
           {/*========================================================== section F ==============================================================*/}
          
            
           <section className=" mt-[99vh] w-11/12 mx-auto min-h-[100vh] h-[100vh] md:w-full md:-mt-80 md:mx-auto">
           <h1 className="z-20 relative headingB text-[2rem] text-center text-gray-50 lg:headingA lg:text-yellow-500 lg:text-[4.66rem] lg:mt-20">
            Impressionen Rettungsanker
          </h1>
          <div className="mt-36 relative z-30 w-6/12 lg:w-3/12 lg:p-8 lg:transform lg:-translate-y-16 xl:transform xl-translate-y-16">
            <Image
              src="/Albers_Illu_white.png"
              alt="Impressionen"
              height="208 "
              width="195"
              layout="responsive"
            />
          </div>
                       
                       
                       
                       
                        <div className="border-4  w-[100%] md:w-[900px] md:h-3/5  md:mx-auto md:border-8 border-slate-100">
                          
                            <Carousel >
                              {/*<Image src="/Albers_Illu_white.png" height="208" width="195" alt="iMPRESSIONEN AUS DER bAR" layout="responsive"/>>*/}
                                                                                                                                                                                                                                       


                              </Carousel>
                        </div>
                        <p className="mt-2 text-xs text-white text-center lg:text-lg">Impressionen aus dem Rettungsanker</p>

                      </section>
                                           <section>
                        
                        
                        </section>

          
          {/*========================================================== section F ende==============================================================*/}
          

          {/*========================================================== section G =================================================*/}
          <section className="mt-[10vh] min-h-[100vh] h-[100vh] flex flex-col justify-center items-center">
          <div className="mt-6 md:mt-20 mx-auto md:w-2/12 lg:mx-auto">
                <LogoNeu className="w-48 h-48 lg:w-60 lg:h-60"></LogoNeu>
                  
              </div>
            <div>                                                            
              <hr className="w-48 mt-12 mx-auto md:w-9/12" />

              

              <h1 className="headingB text-white mt-2 text-[3rem] text-center lg:headingA lg:text-[6rem] lg:text-gray-600">                                                                           
                Impressum
              </h1>
              <div>
                <div className="mt-8 flex flex-col items-center justify-between">
                  <h1 className="mx-auto w-9/12 md:text-4xl text-gray-100 text-center">
                  gemäß § 6 Teledienstegesetz (TDG) </h1>
                  <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>Inhaltlich Verantwortlicher gemäß § 6 MDStV: Michael Schreck</h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    Adelhauserstrasse 7c
                  </h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    D 79098 Freiburg / Breisgau
                  </h1>
                </div>

                <div className="mt-12">
                  <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                    Geschäftsführung:
                  </h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    Michael Schreck
                  </h1>
                </div>

                <div className="mt-12">
                  <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                    Steuernummer:
                  </h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    1234567890
                  </h1>
                </div>
                <div className="mt-12">
                  <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                    Gerichtsstand:
                  </h1>
                  <h1 className="mb-10 mx-auto w-9/12 md:text-3xl text-gray-100 text-center  lg:mb-9">
                    Freiburg/ Breisgau
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/*======================================= Ende Section B =======================================================================*/}


</>
)
}

      {/*======================================================================= SECTION A ende ===========================================================*/}
    



    {/*======================================================================= SECTION A ===========================================================*/}


  











