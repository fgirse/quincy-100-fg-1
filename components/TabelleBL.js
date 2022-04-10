/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import team from 'pages/team'
import { data } from 'autoprefixer'
import Image from 'next/image'




const Table = () => {
    const [tabelleBL, setTabelleBL] = useState([])

    


        const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4';
        const Url = 'https://api.football-data.org/v2/competitions/2002/standings?';
        const url2 = (Url, { headers: { 'X-Auth-Token': Token }})
        const url3 = "https://api.randomuser.me/";
        const url4 = "https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4"


    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {

        const response = await axios( Url, { headers: { 'X-Auth-Token': Token } })
        setTabelleBL(response.data.standings[0].table)
    }

    
    const renderHeader = () => {
    
        let headerElement = ['Rang', 'Emblem', 'Team', 'Spiele ', 'gew','verl', 'remis', 'Tore', 'GTore', 'Diff', 'Punkte']

        return headerElement.map((key, index) => {
            return <th className=" mx-5 text-xxs 2xl:text2xl" key={index}>{key.toUpperCase()}</th>
        })
    }

    
    const renderBody = () => {
        return tabelleBL && tabelleBL.map(({ position, emblem, team, playedGames, won, lost, draw, goalsFor,goalsAgainst, goalDifference, points }) => {
            return (
                <tr className="mb-auto text-xs text-gray-100 bg-gray-800" key={position}>
                    <td>{position}</td>
                    <td><img src={team.crestUrl} height="18" width="18" alt="Eblem"/></td>                    <td>{team.name}</td>
                    <td>{playedGames}</td>

                    <td>{won}</td>
                    <td>{lost}</td>
                    <td>{draw}</td>
                    <td>{goalsFor}</td>
                    <td>{goalsAgainst}</td>
                    <td>{goalDifference}</td>
                    <td>{points}</td>
                                
                </tr> 







                            
            )
        })
    }

    return (
        <>
        {/*<h1 className="text-white" id='title'>React Table</h1>*/}
        


        <table className="w-full" h-full id='tabelleBL'>
            <thead>
                <tr className="mr-1 text-white text-xl px-4 bg-yellow-600">{renderHeader()}</tr>
            </thead>
            <tbody className="text-white text-xl bg-gray-800 opacity-80">
                {renderBody()} 
            </tbody>
        </table>
    </>
    )
}
    

export default Table
