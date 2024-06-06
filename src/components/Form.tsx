import React, { Component } from 'react'
type StateTypes = {
    name: string,
    address: string,
    dateOfBirth: string
}
export default class Form extends Component<{},StateTypes> {
    constructor(props : {}){
        super(props)
        this.state = {
            name: '',
            address: '',
            dateOfBirth: ''
        } 
        this.onchangeInput = this.onchangeInput.bind(this); 

        // sử dụng thuộc tính value và sự kiện onChange để quản lí dữ liệu trong form 
    }
    onchangeInput(e: React.ChangeEvent<HTMLInputElement>){
            // lấy thông tin của ô input 
            let value = e.target.value;
            // lấy thuộc tính name 
            let name = e.target.name; // address
            this.setState({
                ...this.state,
                [name] : value // thay đổi thuộc tính của o input tương ứng
            })
    }
  render() {
    console.log(this.state);
    
    return (
      <div>
        <form action="">
            <table border={1} cellPadding={10} cellSpacing={10}>
            <tbody>
                <tr>
                    <th><label htmlFor="">Name</label></th>
                    <td><input type="text" name='name' onChange={this.onchangeInput} value={this.state.name}/></td>
                </tr>
                <tr>
                    <th><label htmlFor="">address</label></th>
                    <td><input type="text" name='address' value={this.state.address} onChange={this.onchangeInput} /></td>
                </tr>
                <tr>
                    <th><label htmlFor="">Date of Birth</label></th>
                    <td><input type="date" name='dateOfBirth' value={this.state.dateOfBirth} onChange={this.onchangeInput}/></td>
                </tr>
                <tr>
                    <th colSpan={2}><button type="submit">Send</button></th>
                </tr>
            </tbody>
        </table>
        </form>
        
      </div>
    )
  }
}
