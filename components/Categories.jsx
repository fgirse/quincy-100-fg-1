/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from 'services';


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-slate-700 border shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="py-2 px-5 text-xl mb-8 font-semibold border-b text-slate-100 pb-4">Categories</h3>
      {categories.map((category, index) => (
        
        <Link key={index} href={`/category/${category.slug}`} passHref>
          <span className={`text-slate-200 px-5 cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;