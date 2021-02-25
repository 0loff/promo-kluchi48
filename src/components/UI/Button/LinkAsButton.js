import React from 'react'
import { Link } from 'react-router-dom';

const LinkAsButton = props => (
    <React.Fragment>
        <Link
            className={ props.usingClasses }
            to={ props.moveTo }
        >
            { props.label }
        </Link>
    </React.Fragment>
)

export default LinkAsButton