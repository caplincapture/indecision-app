import React from 'react';
import Modal from 'react-modal';

const Option = (props) => (
    <div>
        {props.optionText}
        <button 
            onClick={() => {
                props.handleDeleteOption(props.optionText);
            }}
                >
        remove</button>
    </div>
);

export default Option