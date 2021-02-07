import React from 'react';

import styles from './Layout.module.css';

// import NavigationBar from '../../components/NavigationBar/NavigationBar';
/* <div style={{margin: '0 auto', width: '80%', height: '100%'}}>
                <NavigationBar />
            </div> */

const layout = (props) => {
  return (
    <div>
      <div className={styles.Spacer}></div>
      <main style={{ clear: 'both' }}>
        {props.children}
      </main>
    </div>
  );
}

export default layout;