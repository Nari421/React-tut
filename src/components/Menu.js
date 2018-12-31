import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Menu.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

//NavLink 컴포넌트부터 시작해야됨
const Menu = () => {
    const activeStyle = {
        color: 'red',
        fontSize: '2rem'

    };

    return(
        <div className={cx('menubackground')}>
            <ul className={cx('menustyle')}>
                <li ><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li ><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li ><NavLink exact to="/about/nari" activeStyle={activeStyle}>About nari</NavLink></li>
                <li><NavLink to="/ViewPost" activeStyle={activeStyle}>post</NavLink></li>
                
            </ul>
        </div>
    );
}
export default Menu;