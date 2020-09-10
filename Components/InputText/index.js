import React from 'react'
import {TextInput, Text, View, TouchableOpacity} from 'react-native'
import OptionalView from '../../Components/OptionalView'
const styles = {
  textInput: {
    borderRadius: 10,
    minHeight: 44,
    marginBottom: 5,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
  },
  error: {
    color: 'red',
    marginRight: 5,
    textAlign: 'right',
  },
}
const emailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com']
export default class InputText extends React.Component {
  onChangeText = text => {
    this.props.onChangeText && this.props.onChangeText(text)
  }

  onBlur = text => {
    this.props.onBlur && this.props.onBlur(text)
  }

  render () {
    const border = this.props.error ? {borderColor: 'red'} : {}
    return (
      <View style={{marginBottom: 5, alignSelf: 'stretch'}}>
        <TextInput
          onChangeText={this.onChangeText}
          placeholder={this.props.placeholder}
          style={[styles.textInput, border, this.props.style]}
          value={this.props.value}
          onBlur={this.onBlur}
          keyboardType='email-address'
          autoCompleteType='email'
          textContentType='emailAddress'
        />
        <OptionalView hide={this.props.error || !this.props.suggetion}>
          <View>
            {emailDomains.map(item => (
              <TouchableOpacity onPress={() => this.props.onChangeText(this.props.value + item)}>
                <Text>{this.props.value + item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </OptionalView>
        <OptionalView hide={!this.props.error}>
          <Text style={styles.error}>{this.props.error}</Text>
        </OptionalView>
      </View>
    )
  }
}
