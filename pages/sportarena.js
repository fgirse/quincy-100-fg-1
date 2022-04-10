/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import TabelleBL from '../components/TabelleBL'
import axios from 'axios'
import React, { useMemo } from 'react'
import { container } from 'tailwindcss/defaultTheme'
import Sportarena from '../components/icons/svg/SVGArena'
import Modal6 from '../components/Modal6'

export default class FetchDataUser extends React.Component {
  state = {
    loading: true,
    tabelle: [],
  }

  async componentDidMount() {
    const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4'
    const Url = 'https://api.football-data.org/v2/competitions/2002/standings?'
    const url2 = (Url, { headers: { 'X-Auth-Token': Token } })

    const url4 =
      'https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4'
    const response = await fetch(Url, { headers: { 'X-Auth-Token': Token } })
    const data = await response.json()
    console.log(data.season)
    this.setState({ tabelle: data.season, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.tabelle) {
      return <div>didn't get data Bundesliga</div>
    }

    return (
      <>
        <container className="flex flex-col items-stretch min-h-screen w-[100vw] mx-auto mb-auto">
          <div
            style={{ 'background-image': "url('/sportarena.jpg')" }}
            className="flex-1 w-[100vw] h-[120vh] bg-cover border-t-4 border-b-4 border-amber-500  bg-no-repeat"
          >
            <div className='flex flex-col justify-center items-center gap-x-10'>
            <p className="mt-5 text-5xl headingc text-center text-white xl:text-[7rem]">
              DIE SPORTARENA{' '}
            </p>
            <Sportarena className="inline w-60 h-60                                                                                                               "></Sportarena> 

            </div>
            
            {/*<DataSCFreiburg></DataSCFreiburg>*/}
            <div className="flex flex-col items-center justify-start">
              <p className="mb-16 headingc text-4xl text-center text-white lg:mb-7">
                Tisch reservieren?
              </p>
              <div className="mt-mt-3   2xl:mt-0">
              <Modal6 className=""></Modal6>
              </div>
              
            </div>
            <p className="mt-5 mx-auto text-1xl text-gray-200 text-center font-sans xl:text-2xl">
              Saison vom{' '}
              <span className="text-yellow-500 font-bold">
                {this.state.tabelle.startDate}
              </span>{' '}
              bis{' '}
              <span className="text-yellow-500 font-bold">
                {this.state.tabelle.endDate}
              </span>
            </p>
            <p className="mx-auto text-4xl text-gray-200 text-center font-sans 2xl:text-6xl">
              Die Bundesliga
            </p>
            <p className="mx-auto text-2xl text-gray-200 text-center font-sans xl:text-2xl">
              <span className="text-yellow-500 font-bold">
                {this.state.tabelle.currentMatchday}.
              </span>{' '}
              Spieltag
            </p>
            :
            <div className="mx-5 container mt-5 text-xxs lg:text-xs w-11/12 md:w-11/12 xl:w-10/12 mb-24">
              <TabelleBL className="text-xxs"></TabelleBL>
            </div>
          </div>

          <div></div>
        </container>
      </>
    )
  }
}
