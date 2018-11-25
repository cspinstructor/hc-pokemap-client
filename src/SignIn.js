import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
const myBackground = require('../assets/landing.jpg');
import { Form, Item, Label, Input, Button } from 'native-base';

//client
export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  login = () => {};

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={myBackground} style={styles.imgBg}>
          <View style={styles.tmp}>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  style={styles.tmp}
                  autoCorrect={false}
                  onChangeText={email => {
                    this.setState({ email: email });
                  }}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  style={styles.tmp}
                  autoCorrect={false}
                  onChangeText={password => {
                    this.setState({ password: password });
                  }}
                  secureTextEntry
                />
              </Item>
            </Form>
            <View style={{ marginTop: 10 }}>
              <Button primary block onPress={this.login}>
                <Text>Sign In/Sign Up</Text>
              </Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  tmp: {
    flex: 1
  },
  imgBg: {
    width: '100%',
    height: '100%'
  }
};

export default SignIn;
