import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();
    console.log(window.location.href)
    window.location.href = "/";
  }

  render() {
    return null;
  }
}

export default Callback;
