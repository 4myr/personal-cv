import React from 'react-dom';
import Link from './Link/Link';

import classes from './Links.module.css';

const links = () => (
    <ul className={classes.Links}>
        <Link to="/">صفحه یک</Link>
        <Link to="/">صفحه دو</Link>
        <Link to="/">صفحه سه</Link>
    </ul>
)

export default links;