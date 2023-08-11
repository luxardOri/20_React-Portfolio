import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            <Link to={'/portfolio'}>
                <button>Portfolio</button>
            </Link>
        </nav>
    )
};

export default Nav;