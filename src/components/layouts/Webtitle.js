import React from 'react';

function Webtitle(props){
    return (
       <div>
             <div className="wrap__title">
                <h2><strong>{props.text[0]}</strong><em>{props.text[1]}</em></h2>
            </div>
       </div>
    )
}

export default Webtitle;