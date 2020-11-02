import React from "react"

let red = false;
// const window = document.defaultView;

export default class redirectEN extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       ready: false
    }
}

  componentDidMount(){
    this.ready = true;
    this.redirect();
    }
  redirect = () => {
    if (this.ready===true){
      window.location.replace("http://localhost:8000/en/");
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
