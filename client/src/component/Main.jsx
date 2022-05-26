import React, { useState, useEffect } from 'react'
import Areas from './Areas'
import Details from './Details'

const Main = () => {
  const api = 'https://london-miniguide-ds.glitch.me/api'
  const [areas, setAreas] = useState([])
  const [info, setInfo] = useState([])
  const [details, setDetails] = useState([])

  const [area, setArea] = useState('harrow')
  const [areaInfo, setAreaInfo] = useState('doctors')

  useEffect(() => {
    fetch(`${api}/areas`)
      .then((res) => res.json())
      .then((data) => setAreas(data))

    fetch(`${api}/harrow/info`)
      .then((res) => res.json())
      .then((data) => setInfo(data))
  }, [])

  const detailHandler = (areaName, infoDetail) => {
      setArea(areaName.toLowerCase())
      setAreaInfo(infoDetail)
  }

  useEffect(() => {
    fetch(`${api}/${area}/${areaInfo}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      }
        )
  }, [area, areaInfo])

  const capitalize = (word) => {
    return word[0].toUpperCase().concat(word.slice(1).toLowerCase())
  }

  return (
    <main>
      <Areas areas={areas} info={info} detailHandler={detailHandler}/>
      <Details details={details} area={capitalize(area)} areaInfo={capitalize(areaInfo)}/>
    </main>
  )
}

export default Main
