import React from 'react'
import { Text } from 'react-native'
import Journal from './Journal'
import ReactDOM from 'react-dom'


class Logged extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amIHidden: false,
    }
    this.showHide = this.showHide.bind(this)
  }
  showHide(event) {
    this.setState({amIHidden: !this.state.amIHidden})
  }
  render() {
    return (
      <div className = 'logged'>
        <button id='preview-toggle' onClick = {this.showHide}>VIEW LOG</button>
        <section id= 'foodlog-preview' className={this.state.amIHidden? 'hidden':''}>{this.props.textStuff}</section>
      </div>
    )
  }
}

export default Logged