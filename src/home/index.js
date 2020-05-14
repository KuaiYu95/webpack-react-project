import React from 'react'
import neza from "@/assets/imgs/neza.jpg"
import "./index.less"
export default class Home extends React.Component {
  render() {
    return (
      <div className="test">
        <p>hello world</p>
        <img src={neza} alt="" />
        <img src={neza} alt="" style={{ width: 360, height: 60 }} />
      </div>
    )
  }
}