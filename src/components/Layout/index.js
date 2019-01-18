/* eslint react/prop-types: 0 */
import React from 'react';
import { withRouter } from 'react-router-dom';

const Layout = props => 
    <div>
    
          {props.children}
        
    </div>
 

export default withRouter(props => <Layout {...props} />);
