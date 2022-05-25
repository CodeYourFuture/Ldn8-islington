import React from "react";

const Details = ({ details }) => {
      
  return (
    <div className="details">

      <table className="table table-striped w-auto thead-light">
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
                  <a href={detail.website}>
                    
                    {detail.website.length > 70
                      ? detail.website.slice(0,70)
                      : detail.website}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
