import  { Component } from 'react'
import { Table } from 'react-bootstrap'
import Student from './Student';
import { IStudent } from '../App';
interface PropsType {
  data : IStudent[],
  handleDelete: (id:number)=>void
} 

export default class ListStudent extends Component <PropsType> {
  constructor(props:PropsType){
    super(props)
  }
  render() {
    return (
      <div className='mt-5'>
        <h2 className='text-center mb-2'>Danh sách Sinh viên</h2>
        {/*  bảng
         */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className='text-center'>#</th>
              <th className='text-center'>Name</th>
              <th className='text-center'>dob</th>
              <th className='text-center'>Address</th>
              <th className='text-center'>Phone</th>
              <th className='text-center'>Sex</th>
              <th className='text-center' colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* lặp danh sách data để hiển thị student */}
            {
              this.props.data.map((item, index) =><Student handleDelete = {this.props.handleDelete} key={item.id} item={item}/>)
            }
          </tbody>
        </Table>
      </div>
    )
  }
}
