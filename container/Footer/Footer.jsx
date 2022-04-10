/* eslint-disable prettier/prettier */
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Image from 'next/image';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import Ganter from '../../components/icons/svg/SVGGanter';
import Astra from '../../components/icons/svg/SVGAstra';
import LeckerLaden from '../../components/icons/svg/SVGLogoLeckerladen';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Unsere Partner</h1>
      <div className='flex justify-center bg-slate-800/20'>
        <Ganter  className="w-48 h-20"></Ganter>
        <LeckerLaden  className="w-48 h-20"></LeckerLaden>
        <Astra  className="w-48 h-20"></Astra>

      </div>
       
      </div>

      <div className="app__footer-links_logo">
        <img src='/LogoNeu.png' alt="footer_logo" />
        <p className="text-2xl headingA text-slate-900 ">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">ÖFFNUNGSZEITEN</h1>
        <p className="p__opensans">Montags - Donnerstags:</p>
        <p className="p__opensans">18:00 - 24:00</p>
        <p className="p__opensans">Freitags und Samstags:</p>
        <p className="p__opensans">15:00 - 03:00 </p>
        <p className="p__opensans">Sonntags: Ruhetag</p>
      </div>
    </div>

    <div className='flex flex-col items-center justify-center'>
              <div className='mx-auto text-xl text-slate-50' >{`© ${new Date().getFullYear()}`}<span className='text-[2.333 rem] uppercase headingB'>&nbsp;Medicus Design</span>&nbsp; Basel Switzerland</div>
      <p className="mb-20 text-1xl text-center text-slate-50">and Rettungsanker-Freiburg All Rights reserved.</p>

              </div>

  </div>
);

export default Footer;