import React from 'react';

function Dinner(props) {

    return ( <div> 
                    <h1> Today We are also serving { props.dishName}  </h1>
                    <h1> We serving  {props.sweetdish} as sweetdish</h1> 
             </div>
             );

}

export default Dinner;