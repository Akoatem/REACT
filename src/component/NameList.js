// use rfce to create a functional component

import React from 'react'
import Person from './Person'

function NameList() {
    // use of index as a key for list rendering, to clear duplicate names in the array
    // the index is use as a value to the key props
    const names = ['Bruce', 'Tiger', 'William', 'Joshua', 'Bruce', 'William']

    // use the map method in javascript to return the param using the arrow function
    // this is how you render list in an array in react using map function
    
    
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Ako',
    //         age: 34,
    //         skill: 'Python'
    //     },
    //     {
    //         id: 23,
    //         name: 'Atem',
    //         age: 43,
    //         skill: 'React'
    //     },
    //     {
    //         id: 32,
    //         name: 'Bertrand',
    //         age: 27,
    //         skill: 'Electrician'
    //     },
    //     {
    //         id: 21,
    //         name: 'Suh',
    //         age: 48,
    //         skill: 'Doctor'
    //     }

    // ]
    // pass the person as a props from Person function
//    const personList = persons.map(person => <Person key = {person.name} person= {person} />)
//    return<div>{personList }</div>

   const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
   return<div>{nameList}</div>
}

export default NameList