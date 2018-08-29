import React, { Component } from 'react';

const Form = ({ value, onCreate }) => {
    return (
        <div className="form">
            <input
                value={value}
            />
            <div onClick={onCreate}>
                추가
            </div>
        </div>
    )
};