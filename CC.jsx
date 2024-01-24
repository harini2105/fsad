import React, { Component } from 'react'

export default class CC extends Component {
    state={
        name:"harini",
        age:18,
        gender:"female"
    }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
        <h2>{this.state.gender}</h2>
      </div>
    )
  }
}
