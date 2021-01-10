import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <a target="_blank" href="https://www.instagram.com/macheggerlukas/">IG</a>
    <a target="_blank" href="https://www.youtube.com/channel/UCHCKuTU_wdbhN94YTtYTJTA">YT</a>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)