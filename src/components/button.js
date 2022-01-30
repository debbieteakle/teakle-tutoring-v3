import React from "react"

class Button extends React.Component {
  render() {
    return <button className="text-white font-bold py-2 px-4 rounded bg-blue-400 hover:bg-blue-600 my-4">{this.props.name}</button>;
  }
}

export default Button;