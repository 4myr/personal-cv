import React from 'react-dom';
import Dot from '../../../components/ui/Dot';
import Poster from '../../../components/header/Poster/Poster';
import Logo from '../../../components/header/Logo/Logo';
import HeaderText from '../../../components/header/HeaderText/HeaderText';
import Links from '../../../components/header/Links/Links';

import classes from './Header.module.css';

const header = () => (
    <div className={classes.Header}>
        <div className={classes.RightSide}>
            <Poster />
        </div>
        <div className={classes.LeftSide}>
            <Logo />
            <Dot style={classes.TopDot} />
            <HeaderText whoami="سلام، من امیرحسین هستم" job="یک بک اند دولوپر" description="21 سالمه و بیش از 5 ساله که بصورت حرفه ای برنامه نویسی میکنم." />
            <Links />
        </div>
    </div>
);

export default header;