import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"



const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
               <Link to="/" style={{textDecoration: "none"}}><img className="name" src="https://i.ytimg.com/vi/kmDTErZAMU4/hqdefault.jpg" height="70px" width="70px"></img></Link>
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/"  style={{textDecoration: "none"}}><span>IMDB</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                
            </div>
        </div>
    )
}

export default Header;