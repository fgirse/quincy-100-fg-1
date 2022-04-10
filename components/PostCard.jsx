/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => {
  return (
  <div className="bg-yellow-600 border-8 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
    <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="border-8 shadow-lg rounded-t-lg lg:rounded-lg"
        layout="responsive"
        height="683"
        width="1014"
        src={post.featuredImage.url}
      />
    </div> 
                  <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-[rgb(255,0,221)] text-3xl font-semibold">
                            <Link href={`/post/${post.slug}`}>{post.title}</Link>
                  </h1>
    <div className="block lg:flex lg:flex-row items-center justify-start mb-8 w-full">
      <div className="flex items-center justify-between mb-4 lg:mb-0 w-full lg:w-auto">
        <div className='flex items-center gap-x-3'>
                <Image
                  unoptimized
                  loader={grpahCMSImageLoader}
                  alt={post.author.name}
                  height="40px"
                  width="40px"
                  className="align-middle rounded-full"
                  src={post.author.photo.url}
                />
                <p className="inline align-middle text-gray-700 font-medium text-lg">{post.author.name}</p>
        </div>
    
        <div className="flex justify-start gap-x-10 font-medium ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline text-slate-700" fill="green" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD YYYY')}</span>
      </div>
      </div>
      
    </div>
    <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`} passHref>
        <span className="transition duration-100 bg-slate-700 hover:bg-slate-900 ease transform translate-y-1 hover:transform hover:translate-y-1 inline-block lg font-medium rounded-full text-slate-100 hover:text-red-500 px-8 py-3 cursor-pointer">weiter lesen</span>
      </Link>
    </div>
  </div>
  )
  }

export default PostCard;

