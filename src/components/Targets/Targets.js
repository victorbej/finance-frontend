import React from 'react';
import PostTargets from './PostTargets';

function Targets() {

    function addTarget(e) {
        e.preventDefault();
        console.log('Clicked')
    }

    return (
        <PostTargets onClick={addTarget} />
    )
}

export default Targets;