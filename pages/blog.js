/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import * as Realm from "realm-web";
import React,   { useEffect, useState} from 'react'
import Logoalt from "../components/icons/svg/logoAlt"
import Image from "next/image"
import LoginForm from "./Login"



const REALM_APP_ID = "61d3074ce86d614baeb1d999"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });


// Create a component that displays the given user's details
function UserDetail({ user }) {
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
  );
}

// Create a component that lets an anonymous user log in
function Login({ setUser }) {
  const loginAnonymous = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return(
  <>
<LoginForm></LoginForm>

  <section className="bg-slate-800 w-[100vw] lg:h-[calc(100vh-12vh)] border-t-4 border-b-4 border-amber-500">
  <div className="mt-12 mb-6 bg-slate-700 w-10/12 mx-auto pxx-3 text-center py-7 flex flex-col justify-between items-center h-3/4">      
  <h1 className="text-3xl lg:text-8xl headingA  text-yellow-500">Deine Anmeldung zum Bloq !!!</h1>
  <div className="p-3 w-36 h-36 lg:w-52 lg:h-36">
  <Image  src="/Albers_Illu_white.png" alt="Illustration Albers" layout="responsive" height="240" width="200"/>
  </div>
  
  <h1 className="text-2xl  text-slate-200">zur Teilnahme an unserem <Logoalt className="w-24 h-16 inline"/> - Bloq ist Deine persönliche Anmeldung erforderlich! <br/> Melde Dich mit Deiner email-Adresse un Deinem Passwort im Bloq an - that's it - Du kannst gleich loslegen...</h1>
  
  <button className="mt-5 mb-3 prose-2xlw-60 bg-sky-200 p-3 rounded-2xl text-gray-800 hover:bg-sky-700 font-bold text-3xl"onClick={loginAnonymous}>Log In</button>
  
  </div>
   


</section>
  
  
  
  
  </>
  )
}



   


    
  

export default function bloq() {

 


  return (
    <>
    <section className="bg-slate-800 w-[100vw] h-[calc(100vh-12vh)] border-t-4 border-b-4 border-amber-500">
      <div className="mt-12 bg-slate-700 w-9/12 mx-auto py-7 flex flex-col justify-between items-center h-3/4">      
      <h1 className="text-6xl headingA  text-yellow-500">sorry - Du bist nicht im Bloq angemeldet !!!</h1>
      <div className="mt-12 bg-grey-600 w-6/12 h-36 rounded-2xl ">

      </div>
      <button className="w-60 bg-green-800 p-3 rounded-2xl text-gray-300 hover:bg-green-600 font-bold text-3xl" onClick={() => signIn()}>anmelden</button>

      
      </div>
   


    </section>
      
    </>
  )
}