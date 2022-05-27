import React from 'react'
import DetailsRow from './DetailsRow'

const Details = ({ details, area, areaInfo }) => {
  return (
    <div className="details">
      <div>
        <h4>
          {area} / {areaInfo}
        </h4>
      </div>
      <table id={area} className="table table-striped thead-light">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
              <DetailsRow
                key={area+areaInfo+index}
                index={index}
                detail={detail}
                area={area}
                areaInfo={areaInfo}
              />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Details
