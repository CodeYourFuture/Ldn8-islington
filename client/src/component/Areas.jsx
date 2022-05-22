import React from 'react'

const Areas = ({ areas, info, detailHandler }) => {
  return (
    <>
        <div className="sidebar">
          <div className="wrapper">
            <nav id="sidebar">
              <div className="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
              </div>

              <p>Dummy Heading</p>
              <ul className="list-unstyled components">
                {areas.map((area, index) => {
                  // console.log(area)
                  const pageSubmenu = 'pageSubmenu' + index
                  const pageSubmenuHash = '#pageSubmenu' + index
                  return (
                    <>
                      <li className="active" key={index}>
                        <a
                          href={pageSubmenuHash}
                          data-toggle="collapse"
                          aria-expanded="false"
                          className="dropdown-toggle"
                        >
                          {area}
                        </a>
                        <ul className="collapse list-unstyled" id={pageSubmenu}>
                          {info.map(infoDetail=> 
                          <li onClick={()=> {detailHandler(area, infoDetail)}}>
                            {infoDetail}
                          </li>
                           ) 
                           } 
                        </ul>
                      </li>
                    </>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
    </>
  )
}

export default Areas
