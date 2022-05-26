import React from 'react'

const Details = ({ details, area, areaInfo }) => {
  console.log(details)

  return (
    <div className="details">
      <div>
        <h4>
          {area} / {areaInfo}
          {/* {area[0].toUpperCase().concat(area.slice(1))} /{' '} */}
          {/* {areaInfo[0].toUpperCase().concat(areaInfo.slice(1))} */}
        </h4>
      </div>
      <table className="table table-striped no-wrap w-auto thead-light">
        <thead className="">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => {
            return (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{detail.name}</td>
                <td>{detail.address}</td>
                <td>{detail.phone}</td>
                <td>
                  {detail.hasOwnProperty('website') && (
                    <a href={detail.website} target="new window">
                      {detail.website.length > 50
                        ? detail.website.slice(0, 50) + '...'
                        : detail.website}
                    </a>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Details
