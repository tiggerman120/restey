import header from './Header.scss';
import { BrowserRouter, Link } from 'react-router-dom';
import React from 'react';
import ReactJson from 'react-json-view';

const Header = (props) => {
    return(
      <BrowserRouter>
      <Link to="home"><a href="/">home</a></Link>
      <Link to="history"><a href="/history">history</a></Link>
      <Link to="help"><a href="/help">about us</a></Link>
      <ReactJson src={props.headers} />
      </BrowserRouter>
    )
}

export default Header