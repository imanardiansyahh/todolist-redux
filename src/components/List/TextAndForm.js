import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editTodo, deleteTodo} from '../../store/actions/todoAction'

class TextAndForm extends Component{
    constructor(props){
        super(props)
        this.state={
            viewMode: 'show',
            text:props.todo
        }
    }

    editButtonHandler=() =>{
        this.setState({viewMode: 'edit'})
    }
    saveButtonHandler = () => {
        this.props.editTodo(this.props.index, this.state.text)
        this.setState({viewMode: 'show'})

    }
    cancelButtonHandler = () => {
        this.setState({viewMode: 'show'})
    }

    onChangeHandler =(e) => {
        this.setState({text: e.target.value})
    }
    deleteButtonHandler =() => {
        this.props.deleteTodo(this.props.index)
    }
render(){
    var todo = (
        <p>{this.props.todo}</p>)
    var buttonEdit =(
        <button className="btn btn-primary" onClick={this.editButtonHandler}>edit</button>
    )

    if (this.state.viewMode ==='edit') {

        todo = (
            <input classname="form-control" type="text" value={this.state.text} onChange={this.onChangeHandler}/>
        )
            buttonEdit = (
                <>
                <button className="btn btn-succes" onClick={this.saveButtonHandler}>save</button>
                <button className="btn btn-warning" onClick={this.cancelButtonHandler}>cancel</button>
                </>
            )
    }




    return(
        <div className="row">
        <div className="col-8">
        {todo}
        </div>
        <div className="col-4">
            {buttonEdit}
            <button className="btn btn-danger" onClick={this.deleteButtonHandler}>delete</button>
        </div>



        </div>
    )
}




}


const mapDispatchToProps = dispatch => {
    return{
        editTodo:(index, todo)=> dispatch(editTodo({index,todo})),
        deleteTodo: (index) => dispatch(deleteTodo(index))
    }
}
export default connect (null, mapDispatchToProps) (TextAndForm)