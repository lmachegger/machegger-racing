import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <a href="https://www.instagram.com/macheggerlukas/">Instagram</a>
    <a href="https://www.youtube.com/channel/UCHCKuTU_wdbhN94YTtYTJTA">Youtube</a>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)