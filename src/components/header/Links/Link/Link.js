import React from 'react-dom';

import classes from './Link.module.css';

const link = (props) => (
    <li className={classes.Link}>
        <a href={props.to}>{props.children}</a>
    </li>
)

export default link;