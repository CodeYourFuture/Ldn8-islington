import React, { useState, useEffect } from 'react'
import Areas from './Areas'
import Details from './Details'

const Main = () => {
  const [areas, setAreas] = useState([])
  const [info, setInfo] = useState([])
  const [details, setDetails] = useState([])

  const [area, setArea] = useState('harrow')
  const [areaInfo, setAreaInfo] = useState('doctors')

  useEffect(() => {
    fetch('http://localhost:5000/api/areas')
      .then((res) => res.json())
      .then((data) => setAreas(data))

    fetch(`http://localhost:5000/api/harrow/info`)
      .then((res) => res.json())
      .then((data) => setInfo(data))
  }, [])

  const detailHandler = (areaName, infoDetail) => {
      setArea(areaName)
      setAreaInfo(infoDetail)
  }


  useEffect(() => {
    fetch(`https://localhost:5000/api/${area}/${areaInfo}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
        console.log(data)
      }
        )
  }, [area, areaInfo])

  return (
    <div>
      <Areas areas={areas} info={info} />
      <Details details={details} detailHandler={detailHandler}/>
    </div>
  )
}

export default Main
