import React from 'react'
import { Text } from 'react-native'
import ReactDOM from 'react-dom'
import SettingsScreen from './SettingsScreen'


class Journal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textStuff: '',
    }
    this.typeText - this.typeText.bind(this)
  }

  render() {
    return (
      <form id='foodlog-input' onSubmit={this.props.submitCallBack}>
        <label>LOG HERE </label>
        <textarea id='foodlog-text' onChange={this.props.textCallBack}></textarea>
        <input id="submit" type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Journal