import React, { ChangeEvent, Component, FormEvent } from 'react'
interface Task {
    id:number ;
    content: string;
    status : boolean
}
type StateType = {
    data : Task[],
    addFormStudent: Task
}

export default class StudentManager extends Component <any,StateType> {
    constructor(props: any){
        super(props)
        this.state = {
            data : [
                {
                    id : 1,
                    content : "Learn React",
                    status : true
                },
                {
                    id : 2,
                    content : "Learn Angular",
                    status : false
                },
                {
                    id : 3,
                    content : "Learn Vue",
                    status : true
                },
                {
                    id : 4,
                    content : "Learn Nodejs",
                    status : false
                }
            ],
            addFormStudent : {
                id : 0,
                content : "",
                status : false
            }
        }
        this.handleDelete = this.handleDelete.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleDelete = (id:number)=>{
        this.setState({
            ...this.state,
            data: this.state.data.filter(d=>d.id !== id)
        })
    }
    onchangeInput=(e : React.ChangeEvent<HTMLInputElement>)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
           ...this.state,
            addFormStudent : {
               ...this.state.addFormStudent,
                [name] : value
            }
        })
    }
    handleAdd = (e : FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({
            ...this.state,
            data : [
               ...this.state.data,
                this.state.addFormStudent
            ]
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAdd}>
            <input type="number"  name ="id" value={this.state.addFormStudent.id} onChange={this.onchangeInput} />
            <br />
            <input type="text"  name ="content" value={this.state.addFormStudent.content} onChange={this.onchangeInput}/>
            <br />
            <button type="submit">Add</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map(task=>(
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.content}</td>
                        <td><button onClick={()=>this.handleDelete(task.id)}>Delete</button></td>
                        <td><button onClick={()=>this.handleEdit(task.id)}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    )
  }
}
