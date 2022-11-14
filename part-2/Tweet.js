"use strict";

function Tweet(props) {


  return (
    <div>
        <h3 className='Tweet'>Tweet by {props.name}: {props.message}</h3>
        <p>Date: {props.date}</p>
        <p>Username: {props.username}</p>
    </div>
  )
}