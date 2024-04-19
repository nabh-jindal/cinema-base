import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = ({show}) => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to='/' ><img className="header__icon" src="/sling-binge-high-resolution-color-logo.png" alt="IMDB icon" /></Link>
                {show && <>
                    <a href="#popular" style={{textDecoration: "none"}}><span>Trending</span></a>
                    <a href="#top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></a>
                    <a href="#upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></a>
                </>
                }
            </div>
        </div>
    )
}

export default Header