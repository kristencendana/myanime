import React, { Component } from 'react';
// import any other smaller components

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Anime List:
        </h1>
        <p>Anime1</p>
        <p>Anime2</p>
        {/* <form method="POST" action='/login'>
          <input name='username' type='text' placeholder='username'></input>
          <input name='password' type='password' placeholder='password'></input>
          <input type='submit' value='login'></input>
        </form>
        <a href='./signup'>Sign up</a> */}
      </div>
    );
  }
}

export default App;