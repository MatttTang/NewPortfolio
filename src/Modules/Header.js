import React from 'react'
import {Link, useLocation} from 'react-router-dom';



export default function Header() {
    var l = useLocation();
    return (
        <div id="header">
            <nav>
                <ul>
                    <Link onMouseOver={(e) => l.state = "toHome"} to="/"><li>Home</li></Link>
                    <Link to={{pathname: "/About", state: l.pathname}}><li>About</li></Link>
                    <Link onMouseOver={(e) => l.state = "toWork"} to="/Work"><li>Work</li></Link>
                    {/* <Link onMouseOver={(e) => l.state = {out: OC(l.state.number, 0)}}  to={{pathname: '/', state: {number: 0, variant: PC(l.state.number, 0)}}}><li>Home</li></Link>
                    <Link onMouseOver={(e) => l.state = {out: OC(l.state.number, 1)}} to={{pathname: '/About', state: {number: 1, variant: PC(l.state.number, 1)}}}><li>About</li></Link>
                    <Link onMouseOver={(e) => l.state = {out: OC(l.state.number, 2)}} to={{pathname: '/Work', state: {number: 2, variant: PC(l.state.number, 2)}}}><li>Work</li></Link> */}
                </ul>
            </nav>
        </div>
    )
}
