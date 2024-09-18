import React from 'react'
import '../App.css'

export default function Test() {
    return (
        <div className="wrapper">
            <div className='test' id='1'>
                <div id="left_panel">Left pane (100px)</div>
                <div id="contents">Contents (400px)</div>
                <div id="right_panel">Right pane (100px)</div>
            </div>
            
            <div className='test' id='2'>
                <div id="left_panel">Left pane (100px)</div>
                <div id="contents">Contents (400px)</div>
                <div id="right_panel">Right pane (100px)</div>
            </div>
            <div className='test' id='3'>
                <div id="left_panel">Left pane (100px)</div>
                <div id="contents">Contents (400px)</div>
                <div id="right_panel">Right pane (100px)</div>
            </div>
        </div>
    );
}