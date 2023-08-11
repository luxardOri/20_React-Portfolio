import React, { useState } from 'react';

function Header(props) {
    return (
        <div style={{backgroundColor: props.bgColor}}>
            <h1>{props.title}</h1>
        </div>
    )
};

export default Header;