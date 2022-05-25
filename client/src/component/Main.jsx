import React, { useState, useEffect } from 'react'
import Areas from './Areas'
import Details from './Details'

const Main = () => {
  const api = 'http://localhost:5000/api'
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
      setArea(areaName[0].toLowerCase().concat(areaName.slice(1)))
      setAreaInfo(infoDetail)
  }


  useEffect(() => {
    // console.log(`${api}/${area}/${areaInfo}`)

    fetch(`${api}/${area}/${areaInfo}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
        // console.log(data)
      }
        )
  }, [area, areaInfo])

  return (
    <main>
      <Areas areas={areas} info={info} detailHandler={detailHandler}/>
      <Details details={details} />
    </main>
  )
}

export default Main
