import React from 'react';

const slider = (props) => {
    let circles = [];

    if (props.length === 0) {
        circles = null
        return;
    }

    for (let i = 0; i < props.length; i++) {
        circles.push(<svg></svg>)
    }
}