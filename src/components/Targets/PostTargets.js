import React from 'react';
import './Targets.scss';

function PostTargets({ ...onClick }) {
    return (
        <div {...onClick} className="target">
            Some Action
        </div>
    )
}

export default PostTargets;