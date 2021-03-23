import React from 'react-dom';
import classes from './HeaderText.module.css';

const headertext = (props) => (
    <div className={classes.HeaderText}>
        <h3>{ props.whoami }</h3>
        <h3>{ props.job } </h3>
        <p>{ props.description }</p>
    </div>
);

export default headertext;