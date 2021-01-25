import React from 'react';

// import NavigationBar from '../../components/NavigationBar/NavigationBar';
/* <div style={{margin: '0 auto', width: '80%', height: '100%'}}>
                <NavigationBar />
            </div> */

const layout = (props) => {
    return (
        <div>
            <div style={{height: '150px'}}></div>
            
            <main style={{clear: 'both'}}>
                {props.children}
            </main>
        </div>
    );
}

export default layout;