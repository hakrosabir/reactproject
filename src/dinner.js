import React from 'react';

function Dinner(props) {

    return (
            <div> 
                    <h1> Today We are also serving { props.dishName} <hr/> </h1>
                    <h1> We serving  {props.sweetdish} as sweetdish <hr/></h1> 
             </div>
             );

}

export default Dinner;