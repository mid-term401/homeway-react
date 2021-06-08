import React from 'react';
import { NavLink } from "react-router-dom";

import './error.scss'

export default function Home() {
    return (<>
    
        <h1 className="four">404</h1>
<img src="" alt="" />
<p className='Oops'>Page not found.</p>
<NavLink className="button" exact to='/'>
Go back in Home page, is better.
                    </NavLink>
    </>
    );
  }