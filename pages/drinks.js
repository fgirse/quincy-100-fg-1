/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";
import Astra from "../components/icons/svg/SVGAstra"
import Ganter from "../components/icons/svg/SVGGanter"
import Flens from "../components/icons/svg/SVGFlensburger"
import Logo from '../components/icons/svg/SvgLogoNeu'
import { SubHeading, MenuItem } from '../components';
import { data } from '../constants';
import { images } from '../constants';

const drinks = () => {
  return(
    <>
  

 <section className="p-4 py-7 border-t-4 border-amber-500 bg-slate-900 w-full mx-auto"> 
 <SubHeading titel="Retttungsanker Menu"/>
 <div className="w-7/12 flex flex-col items-center mx-auto">
 <h1 className="headingB text-white-500 text-center text-8xl">Drinks & Snacks</h1>
 <h1 className="text-center w-4/12 max-auto  text-[1.66rem] text-slate-400">Für jeden Geschmack etwas dabei !!!</h1>

 </div>
 
<div className=" mb-10 w-[90vw] flex h-[66vh] justify-center items-center gap-x-3 gap-y-20 mr-auto ml-auto flex-wrap container">
 <div className="bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0">
   
       <div className="flex flex-col items start justify-center">
        <p className="text-left text-5xl text-slate-100">Biere</p>
        <p className="mb-3 w-[20vw] border-b"></p>
        <div className="w-full flex flex-col text-right items-end justify-center text-slate-200">
          {data.biereA.map((biere, index) => (
            <MenuItem key={biere.title + index} title={biere.title} price={biere.price} tags={biere.tags} />
          ))}
        </div>
      </div>      
            
   
   </div>
 <div className="bg-black flex w-full h-full justify-center items-center pr-1 pl-1 md:w-[25vw] gap-x-2 md:mb-0">
 <div className="w-10/12 h-full transform translate-y-20">
        <Image src="/astraglas.png" width="202" height="202"  layout="responsive" alt="menu__img" />
      </div>
   </div>
 <div className="bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0">
   
            
      <div className="flex flex-col items start justify-center">
        <p className="text-right text-5xl text-slate-100">Biere</p>
        <p className="mb-3 w-[20vw] border-b"></p>
 
        <div className="w-full flex flex-col items-start justify-center text-slate-200">
          {data.biereB.map((biere, index) => (
            <MenuItem key={biere.title + index} title={biere.title} price={biere.price} tags={biere.tags} />
          ))}
        </div>
      </div>
    
 
 </div>
</div>





{/*==================================================================================================*/}


<div className=" mb-10 w-[90vw] flex h-[66vh] justify-center items-center gap-x-3 gap-y-20 mr-auto ml-auto flex-wrap container">
 <div className="bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0">
   
       <div className="flex flex-col items start justify-center">
        <p className="text-left text-5xl text-slate-100">Weine Rot</p>
        <p className="mb-3 w-[20vw] border-b"></p>
        <div className="w-full flex flex-col text-right items-end justify-center text-slate-200">
        {data.weineA.map((weine, index) => (
            <MenuItem key={weine.title + index} title={weine.title} price={weine.price} tags={weine.tags} />
          ))}
        </div>
      </div>      
            
   
   </div>
 <div className="bg-black flex w-full h-full justify-center items-center pr-1 pl-1 md:w-[25vw] gap-x-2 md:mb-0">
 <div className="w-10/12 h-full">
        <Image src="/weinbottle.png" width="474" height="625"  layout="responsive" alt="menu__img" />
      </div>
   </div>
 <div className="bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0">
   
            
      <div className="flex flex-col items start justify-center">
        <p className="text-right text-5xl text-slate-100">Weine                                                                                                                                                                                                                                                                                                                                                                                                                                                                  weiss</p>
        <p className="mb-3 w-[20vw] border-b"></p>
 
        <div className="w-full flex flex-col items-start justify-center text-slate-200">
          {data.weineB.map((weine, index) => (
            <MenuItem key={weine.title + index} title={weine.title} price={weine.price} tags={weine.tags} />
          ))}
        </div>
      </div>
    
 
 </div>
</div>



<div className=" mb-16 w-[90vw] flex h-[66vh] justify-center items-center gap-x-3 gap-y-20 mr-auto ml-auto flex-wrap container">
 <div className="bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0">
   
       <div className="flex flex-col items start justify-end">
        <p className="text-left text-5xl text-slate-100">Cocktails/Longdrinks</p>
        <p className="mb-3 w-[25vw] border-b"></p>
        <div className="w-full flex flex-col text-right items-end justify-center text-slate-200">
          {data.cocktailsA.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>      
            
   
   </div>
 <div className="mb-16 bg-black flex w-full h-full justify-center items-center pr-1 pl-1 md:w-[25vw] gap-x-2 md:mb-0">
 <div className="w-5/12 h-full">
        <Image src="/public/Cocktail06.png" width="130" height="555"  layout="responsive" alt="menu__img" />
      </div>
   </div>
 <div className="bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0">
   
            
      <div className="flex flex-col items start justify-center">
        <p className="text-right text-5xl text-slate-100">Cocktails/Longdrinks</p>
        <p className="mb-3 w-[25vw] border-b"></p>
 
        <div className="w-full flex flex-col items-start justify-center text-slate-200">
          {data.cocktailsB.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    
 
 </div>
</div>















</section>
</>
  )}
  export default drinks