import React from "react"

let red = false;

export default class redirectEN extends React.Component{

  redirect = () => {
    if(red === false){
      window.location.replace("http://localhost:8000/en/");
      red = true;
    }
  }
  render() {
    return (
      <div>
        {this.redirect()}
      </div>
    )
  }
}
