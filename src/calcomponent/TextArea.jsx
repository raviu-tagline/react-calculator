import React from 'react';

const TextArea = (props) => {
    return <textarea style={{width: 85 + '%', resize: 'none', backgroundColor: '#f4f7f8'}} value={props.ansValue != '' ? props.ansValue : props.queVal} readOnly></textarea>
};

export default TextArea;