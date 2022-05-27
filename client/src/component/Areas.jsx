import React from 'react'

const Areas = ({ areas, info, detailHandler }) => {
  return (
    <>
      <div className="sidebar">
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <h4>London areas</h4>
            </div>

            <p>A mini-guide app for different areas in London</p>
            <ul className="list-unstyled components">
              {areas.map((area, index) => {
                const pageSubmenu = 'pageSubmenu' + index
                const pageSubmenuHash = '#pageSubmenu' + index
                return (
                    <li className="active" scop="row" key={index}>
                      <a
                        href={pageSubmenuHash}
                        data-toggle="collapse"
                        aria-expanded="false"
                        className="dropdown-toggle"
                      >
                        {area}
                      </a>
                      <ul className="collapse list-unstyled" id={pageSubmenu}>
                        {info.map((infoDetail) => (
                          <li scop="row" key={Math.random()}
                            onClick={() => {
                              detailHandler(area, infoDetail)
                            }}
                          >
                            {infoDetail}
                          </li>
                        ))}
                      </ul>
                    </li>
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
