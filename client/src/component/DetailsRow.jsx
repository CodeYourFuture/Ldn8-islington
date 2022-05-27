import React, { useState } from 'react'

const DetailsRow = ({ detail, index, area, areaInfo }) => {
  const starState = localStorage.getItem(`${area}${areaInfo}${index}`)

  const [like, setLike] = useState(starState)
  const likeHandler = () => {
    setLike(!like)
    localStorage.setItem(`${area}${areaInfo}${index}`, !like)
  }


  return (
    <tr>
      <th scope="row" key={`${area}:${detail.name}:${index}`}>
        {index + 1}
      </th>
      <td>{detail.name}</td>
      <td>{detail.address}</td>
      <td>{detail.phone}</td>
      <td>
        {detail.hasOwnProperty('website') && (
          <a href={detail.website} target="new window">
            {detail.website.length > 30
              ? detail.website.slice(0, 30) + '...'
              : detail.website}
          </a>
        )}
      </td>
      <td>
        <img src={like?`../assets/images/star.png`:`../assets/images/emptyStar.png`} 
          alt={`${area}:${detail.name}:${index}`} 
          onClick={() => likeHandler()} /> 
        {/* <button onClick={() => likeHandler()}> */}
          {/* {like ? `Dislike` : `Like`} */}
        {/* </button> */}
      </td>
    </tr>
  )
}

export default DetailsRow
