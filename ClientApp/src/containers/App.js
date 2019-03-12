import React, { Component } from 'react'
import '../styles/css/App.css'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from '../components/Header'
import axios from 'axios'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            resp: null,
            hasData: false
        }

    }

    async componentDidMount  () {
    
        const r = await axios.get('/api/contact')
        this.setState({ resp: r , hasData: true})
        console.log(r)
    }

    
    
    
    
   
  

    render() {
        
        if (this.state.hasData) {
            const data = this.state.resp.data
return (
      <div className="container centerHeader">
        <Header/>
        <div className="flex">
          

           
            {data.map(i => {
               return <p>{i}</p>
            })}
                
        </div>
        <div className="flex">
          <div className="main">
            <h2>Welcome to React</h2>
            <p>
              This is from the redux store: {this.props.dude}
                    </p>
                    
          </div>
        </div>
      </div>
    )
        }
        return (
            <h1>hello world</h1>
            )
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(actions.dummyThunk1(url)),
    fetchString: string => dispatch(actions.dummyThunk2(string)),
    changeImage: index => dispatch(actions.dummyThunk3(index))
  }
}

const mapStateToProps = ({something, dude}) => {
  return {something, dude}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


