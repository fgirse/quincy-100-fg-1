import { ClientSideRowModelSteps } from "ag-grid-community";
import Iframe from 'react-iframe'
import React from "react";
import SimpleMap from "./SimpleMap";


export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button  data-tip data-for="openTip"
        className="bg-yellow-500 rounded-2xl font-mono border border-ring-bg-gray-200 ring-inset hover:bg-yellow-600 text-white active:red-600 font-bold uppercase sm:text- sm:px-10 lg:text-lg px-5 py-3 rounded-4lg shadow-xl shadow-gray-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button" 
        onClick={() => setShowModal(true)}
      >
        OpenStreet Map
      </button >
      
      
      {showModal ? (
        <>
          <div
            className="w-full md:w-11/12 grid grid-cols-2 justify-center items-center md:items-center overflow-x-hidden overflow-y-auto fixed inset-0 border-5 border-green z-50 outline-none focus:outline-none"
            on={() => setShowModal(false)}
          >
            <div className="border-5 border-gray-100 relative w-auto my-6 mx-auto max-w-lg">
              {/*content*/}
              <div className="w-full rounded-lg shadow-lg relative flex flex-col bg-gray-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="w-full bg-yellow-500 flex items-start justify-between p-5 border-b border-solid border-yellow-200 rounded-t">
                  <h3 className="w-full text-2xl text-center md:text-4xl font-bold uppercase">
                    Karte Altstadt
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black opacity-50 float-right text-5xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-yellow-700 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative w-full p-6 flex-auto">
                  <div className="w-full h-60 bg-green-400 my-4 text-blueGray-500 text-3xl leading-relaxed sm:text-md">

                  <iframe width="270" height="270" frameborder="5" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=7.846389412879945%2C47.991591082233796%2C7.8532880544662484%2C47.99406817889533&amp;layer=cyclemap&amp;marker=47.992829645428266%2C7.849838733673096" style={{border: "1px solid orange"}}/>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="mx-auto bg-gray-800 text-gray-100 font-mono rounded-2xl border-2 border-gray-100 hover:text-yellow-400 hover:bg-gray-700 font-bold uppercase px-6 py-2 text-sm shadow-xl shadow-gray-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 md:w-48"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
        
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-red"></div>
        </>
      ) : null}
    </>
  );
}
