import React from 'react';

export default function Sidebar() {
    return(
        <div className="side-bar-wrapper" style= {{display: 'flex', flexDirection: 'column', width: '20%', overflow: 'auto', flexGrow: 1, backgroundColor: 'yellow', padding: '10px'}}>
            <h2 style={{textAlign: 'center'}}>NUKEMAP</h2>
        </div>
    );
}