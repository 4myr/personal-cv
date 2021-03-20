import React from 'react-dom';
import Dot from '../../../components/ui/Dot';
import classes from './Header.css';
import Poster from './Poster';


const header = () => (
    <div className={classes.Header}>
        <div className={classes.RightSide}>
            <Dot />
        </div>
        <div className={classes.LeftSide}>
            <Poster />
        </div>
    </div>
);

export default header;