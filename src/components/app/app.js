import React, {Component} from 'react'
import Nav from '../nav/nav'
import Loader from '../loader/loader'

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Loader/>
        {this.props.children}
      </div>
    )
  }
}

export default App
