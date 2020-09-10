import React from 'react'
import {View} from 'react-native'
import InputText from './Components/InputText'
import {email} from './Components/Validation/EmailValidation'

export default class App extends React.Component {
  state = {
    EmailID: '',
    error: '',
    suggetion: false
  }

  validateEmail = () => {
    console.log(' value>>>>>+++', this.state.EmailID, this.state.error)
    if (!this.state.EmailID) {
      return this.setState({error: 'Please enter email'})
    }
    if (!email(this.state.EmailID)) {
      this.setState({error: 'Please enter valid email'})
    }
  }

  onChangeEmail = text => {
    // console.log(' value>>>>>+++', this.state.EmailID, this.state.error)
    this.setState({
      EmailID: text,
      error: '',
      suggetion: text.length >3 && text[text.length-1] === '@'
    })
  }

  render () {
    return (
      <View style={{flex: 1, padding:20, marginTop: 100}}>
        <View>
        <InputText
        style={{alignSelf:'stretch', flex:1}}
          onChangeText={this.onChangeEmail}
          placeholder='Enter Email'
          error={this.state.error}
          onBlur={this.validateEmail}
          value={this.state.EmailID}
          suggetion={this.state.suggetion}

        />
        </View>
  
      </View>
    )
  }
}
