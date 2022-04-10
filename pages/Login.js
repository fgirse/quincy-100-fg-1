/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import image from "next/image"
import Logoalt from '../components/icons/svg/logoAlt.js';


export default function Login() {

  return (
    <div className=" h-[calc(100vh-90px)] flex flex-col items-center justify-center bg[url 'https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'] p-4 bg-slate-200 rounded-2xl focus:outline-none] bg-size[cover]">
       <section className="bg-slate-800 w-[100vw] lg:h-[calc(100vh-12vh)] border-t-4 border-b-4 border-amber-500">
  <div className="mt-12 mb-6 bg-slate-700 w-10/12 mx-auto pxx-3 text-center py-7 flex flex-col justify-between items-center h-3/4">
  <h1 className="text-3xl lg:text-8xl headingA  text-yellow-500">Deine Anmeldung zum Bloq !!!</h1>
  <div className="p-3 w-36 h-36 lg:w-52 lg:h-36">
  <Image  src="/Albers_Illu_white.png" alt="Illustration Albers" layout="responsive" height="240" width="200"/>
  </div>
  
  <h1 className="text-2xl  text-slate-200">zur Teilnahme an unserem <Logoalt className="w-24 h-16 inline"/> - Bloq ist Deine persönliche Anmeldung erforderlich! <br/> Melde Dich mit Deiner email-Adresse un Deinem Passwort im Bloq an - that's it - Du kannst gleich loslegen...</h1>
  
<button className="mt-5 mb-3 prose-2xlw-60 bg-sky-200 p-3 rounded-2xl text-gray-800 hover:bg-sky-700 font-bold text-3xl"></button>
</div>
       <span className="text-2xl">Login</span>
      <form className="mt-12 flex flex-col">
        <label>Email</label>
        <input className="p-4 bg-slate-200 rounded-2xl focus:outline-none" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="p-4 bg-slate-200 rounded-2xl focus:outline-none" type="password" placeholder="Enter your password..." />
        <button className="mt-12 cursor-pointer text-center p-4 rounded-2xl text-slate-50 bg-red-400">Login</button>
      </form>
        <button className="absolute top-[60px] right-[20px] bg-teal-500 cursor-pointer p-5 text-slate-100 rounded-2xl">Register</button>
    </section>
    
    </div>                                                                                                                                                                                                      
  );
}