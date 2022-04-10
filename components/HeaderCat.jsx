/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCategories } from '../services';


const HeaderCat = () => {
const [categories, setCategories] = useState([]);

  {useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="relative z-50 container mx-auto px-10 mb-8">
      <div className="bg-red-800 w-full mt-5 inline-block border-slate-100 py-2">

        <div className="md:float-left block">
        <Image
                  
                  alt="Hans Albers"
                  height="90px"
                  width="90x"
                  Layout="responsive"
                  src="/Albers_Illu_white.png"
                />
          <Link href={"/"} passHref>
            <span className="cursor-pointer font-bold text-6xl text-yellow-400">CHAT BLOQ RETTUNGSANKER</span>
          </Link>
        </div>
        <div className=" md:float-right md:content">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} passHref>
                        <span className="md:float-left mt-5 ml-5 align-middle text-white hover:border-b-4 hover:border-slate-500 font-semibold cursor-pointer">{category.name}
                        </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
}
export default HeaderCat