import React from 'react';

function TotalVisitCounter(props) {
    // TODO: 跟後端要總人數(看能不能使用)
    const amount = props.value | 1;
    return (
        <span>You are No. <strong>{amount}</strong> visitor</span>
    );
}

export default TotalVisitCounter;