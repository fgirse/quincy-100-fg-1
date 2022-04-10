/* eslint-disable no-inner-declarations */
/* eslint-disable prettier/prettier */
import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
import Logo from '@/data/SvgLogoNeu';
import Link from './Link';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
import SectionContainer from './SectionContainer';
import Layout  from './'
import InfoSection from './Infosection';
import ThemeSwitch from '../components/ThemeSwitch';
import { Footer } from '../container';
import MobileNav from'../components/MobileNav';
const LayoutWrapper = ({ children }) => {
  
  
  
  
  // call the function when the whole DOM content is loaded
  //document.addEventListener("DOMContentLoaded", changeBackgroundImage());
  return (
    <>
      <InfoSection/>
      <SectionContainer>
      
             <div className=" w-screen bg-contain bg-slate-900 flex flex-col justify-between ">
          <header className="mt-1 flex items-start justify-between ">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  {/*<div className="mr-3">
                    <Logo />
                </div>*/}               
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="hidden text-xl font-semibold ">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            <div className="bg-slate-900 flex flex-wrap items-end text-base leading-5">
              <div className="hidden lg:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="font-bold uppercase text-gray-100 hover:border-b hover:border-yellow-400 hover:text-yellow-400 dark:text-gray-100 dark:hover:text-sky-700 sm:p-4 lg:text-[.8rem] xl:text-[1.33rem] 2xl:text-[1.333rem]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              
              <ThemeSwitch />
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper