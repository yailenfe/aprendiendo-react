// const element =document.createElement('h1')
// element.innerText='hello react..'
// const container=document.getElementById('root')
// container.appendChild(element)


import React from 'react';
import ReactDom from 'react-dom'
import { __promisify__ } from 'glob';

const user = {
    firstName: 'raul',
    lastName: 'fajardo',
    avatar: 'http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}

function getName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hola {getName(user)}</h1>
    }
    return <h1>Hello Strager</h1>
}
const name = 'raul'

const element = (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} />
    </div>
)
const container = document.getElementById('root')

// ReactDom.render(__promisify__QUE__, __DONDE___ )

ReactDom.render(element, container)