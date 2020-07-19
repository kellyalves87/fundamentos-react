import React from 'react';

export default function WithParams(props) {
    const status = props.note >= 7 ? 'Approved' : 'Disapproved'
    return (
    <div>
        <h2>{props.title}</h2>
        <p>
            <strong> {props.student} </strong>
                has note
            <strong> {props.note} </strong>
                and was
            <strong> {status} </strong>!
        </p>
    </div>
    )
}