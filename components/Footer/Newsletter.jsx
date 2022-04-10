/* eslint-disable prettier/prettier */
import React from 'react';

import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className="app__newsletter mt-6">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="text-slate-100 font-extrabold">zum Newsletter anmelden ...</h1>
      <p className="text-slate-100 font-extrabold">...das Neueste vom Rettungsanker in Erfahrung bringen!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="bg-slate-700 hover:bg-slate-500 rounded-2xl text-3xl text-slate-50 h-12 w-80 p-3">Anmelden</button>
    </div>
  </div>
);

export default Newsletter;
