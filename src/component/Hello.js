import React from "react";

// JSX application

const Hello = () =>{
    // return (
    //     <div className='dumyClass'>
    //         <h1>Hello ako</h1>
    //     </div>
    // )

    // without JSX
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dumyClass'}, 
        React.createElement('h1', null,'Hello Ako Atem'))
}

export default Hello