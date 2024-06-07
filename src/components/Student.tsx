import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { IStudent } from '../App'
type PropsType = {
    item:IStudent;
    handleDelete: (id:number)=>void,
    handleEdit : Function
}

export default class Student extends Component<PropsType> {
    constructor(props:PropsType){
        super(props)
        this.beforeHandleDelete = this.beforeHandleDelete.bind(this);
    }
    beforeHandleDelete(){
        if(window.confirm("Are you sure want to delete this student này ko ?")){
            this.props.handleDelete(this.props.item.id);
        }
    }
    render() {
        let {id,name, dob, address,phone , sex}  = this.props.item;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{dob}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>{sex?"Nam":"Nữ"}</td>
                <td className='text-center'><Button onClick={()=>this.props.handleEdit(id)} variant="warning">Edit</Button></td>
                <td className='text-center'><Button onClick={this.beforeHandleDelete} variant="danger">Delete</Button></td>
            </tr>
        )
    }
}
