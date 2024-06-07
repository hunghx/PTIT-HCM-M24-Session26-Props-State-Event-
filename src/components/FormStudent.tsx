import React, { Component } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { IStudent } from '../App'
type StateTypes ={
    studentForm:{
        id : number,
        name : string,
        dob : string,
        address : string,
        phone : string,
        sex : string
    }
}
type Proptypes = {
handleAdd : Function,
isAdd : boolean,
student : IStudent|undefined,
}
const initState = {
    id : 0,
    name : "",
    dob : "",
    address : "",
    phone : "",
    sex : "true"
}

export default class FormStudent extends Component<Proptypes,StateTypes> {
    constructor(props :Proptypes){
        super(props)
        console.log(this.props.student);
        
        this.state = {
            studentForm: initState
        }
        // this.handleChangeInput = this.handleChangeInput.bind(this)
    }
    handleChangeInput = (e : React.ChangeEvent<HTMLInputElement>)=>{
        let value = e.target.value;
        let name = e.target.name;
        this.setState({
            ...this.state,
            studentForm:{
                ...this.state.studentForm,
                [name]:value
            }
        })
    }
    handleSubmitForm = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()// ngăn load lại trang , ngăn dữ liệu gửi lên server
        this.props.handleAdd({...this.state.studentForm, sex: this.state.studentForm.sex==="true"?true:false})
        this.setState({
            ...this.state,
            studentForm: initState
        })
    }
    componentDidUpdate(prevProps: Readonly<Proptypes>, prevState: Readonly<StateTypes>, snapshot?: any): void {
        // console.log(prevProps);
        // console.log(prevState);
        // console.log(this.props);
        // console.log(this.state)
        
        // console.log("gọi đi update");
        if(this.props.student){
            this.setState({
               ...this.state,    
            })
        }
    }
    // shouldComponentUpdate(nextProps: Readonly<Proptypes>, nextState: Readonly<StateTypes>, nextContext: any): boolean {
    //     return true;
    // }
    
  render() {
    
    let {id,name,address,sex, phone, dob} = this.state.studentForm;
    console.log({id,name,address,sex, phone, dob});
    
    return (
        <Form className='p-3' onSubmit={e=>this.handleSubmitForm(e)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Id</Form.Label>
            <Form.Control name='id' type="number" value={id} onChange={this.handleChangeInput}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" onChange={this.handleChangeInput} value={name} placeholder="Enter name" />
          </Form.Group>
  
          
        </Row>
        <Form.Group controlId="formGridPassword">
            <Form.Label>Birthday</Form.Label>
            <Form.Control name="dob" value={dob} onChange={this.handleChangeInput} type="date" />
          </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control name="address" value={address} onChange={this.handleChangeInput} placeholder="1234 Main St" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Phone</Form.Label>
          <Form.Control name="phone" value={phone} onChange={this.handleChangeInput} placeholder="09xxxxxxxxx" />
        </Form.Group>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Sex</Form.Label>
            <Form.Select value={sex} onChange={this.handleChangeInput} name='sex' >
              <option value={"true"}>Nam</option>
              <option  value={"false"}>Nữ</option>
            </Form.Select>
          </Form.Group> 
        </Row>
        <Button variant={this.props.isAdd?"primary":"warning"} type="submit">
          {this.props.isAdd?"Add":"Update"}
        </Button>
      </Form>
    )
  }
}
