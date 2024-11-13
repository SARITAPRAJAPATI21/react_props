import React from "react";
import './UserCard.css'

function UserCard (props){

    return (<>
        
        <div class="card">
  <div class="card-content">
    <p class="card-title">{props.title}</p>
    <p class="card-text">{props.text}</p>
    </div>
</div>
    </>);
}

UserCard.defaultProps = {
     text:"React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props"
   
   
  }
export default UserCard;