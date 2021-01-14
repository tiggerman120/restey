import header from './Header.scss';
import React from 'react';
import ReactJson from 'react-json-view';

const Header = (props) => {
    return(
      <ReactJson src={props.headers} />
    )
}

export default Header