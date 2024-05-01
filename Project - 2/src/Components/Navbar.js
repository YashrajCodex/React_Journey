import React from 'react'
import './footerText.css'

export default function Navbar(props) {
  return (
    <nav className={`${props.footMargin} navbar navbar-expand-success-subtle navbar-${props.mode==='light' ? 'success-subtle':'dark'} bg-${props.mode==='light' ? 'success-subtle':'dark'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.nav_title}</a>
          <h2 className='footer_gradient_text'>{props.footerText}</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
            </ul>
            <div>
              <h4 className={`text-${props.mode==='light'?'dark':'light'} fs-5 cursor mx-2`}>{props.copyright}</h4>
            </div>
            <form className={`${props.visibility} d-flex`} role="search">
              <input
                className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className={`btn btn-info text-dark fw-semibold`} type="submit">Search</button>
            </form>
            <div className={`mx-5 form-check form-switch ${props.visibility}`}>
              <span className={`text-${props.mode==='light'?'dark':'light'} fs-5 cursor mx-2`} id='mode_text'>{props.nameMode}</span>
              <input className="form-check-input cursor" onClick= {props.toggleMode} type="checkbox" role="switch" id="modeCheck"/>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.defaultProps = {
    nav_title: "TextUtils"
}