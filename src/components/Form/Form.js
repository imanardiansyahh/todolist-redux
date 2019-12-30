import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../store/actions/todoAction'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }  

  onChangeHandler = (e) => {
    this.setState({ text : e.target.value })
  }

  onSubmit = () => {
    this.props.addTodos(this.state.text)
    this.setState({ text: '' })
  }

  render () {
    return (
      <>
        <p>Add Todo</p>
        <div className="form-group">
          <input 
          value={this.state.text}
          onChange={this.onChangeHandler} type="text" className="form-control" placeholder="Type todo here" />
        </div>
        <button onClick={this.onSubmit} className="btn btn-primary">Add</button>
      </>
    )
  }
} 
const mapDispatchToProps = dispatch =>{
  return{
    addTodos: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(Form)
