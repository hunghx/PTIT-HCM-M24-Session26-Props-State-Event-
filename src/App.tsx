import { Component, ReactNode } from "react";
import ListStudent from "./components/ListStudent";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormStudent from "./components/FormStudent";
import StudentManager from "./components/StudentManager";

export interface IStudent {
  id: number;
  name: string;
  dob: string;
  address: string;
  phone: string;
  sex: boolean
}
type StateType = {
  data: IStudent[],
  isAdd : boolean,
  studentEdit: IStudent|undefined,
}

class App extends Component<{}, StateType> {
  // thiết kế ứng dụng quản lí sinh viên   
  // danh sách sinh viên 
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Huỳnh Tam Anh",
          dob: "2005-02-15",
          address: "Sài Gòn",
          phone: "0984384363",
          sex: true
        },
        {
          id: 2,
          name: "Kha Hào",
          dob: "2005-05-05",
          address: "An Giang",
          phone: "0994874363",
          sex: false
        },
      ]
      ,
      isAdd : true,
      studentEdit : undefined
    }
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id: number) {
    // lấy danh sách sau khi xóa
    let afterDeleteList = this.state.data.filter(item => item.id != id);
    // cập nhật lại danh sách
    this.setState({
      ...this.state,
      data: afterDeleteList
    })
  }
  handleAddStudent = (student : IStudent)=>{
    this.setState({
      ...this.state,
      data : [...this.state.data, student]
    })
  }
  handleEditStudent = (id : number)=>{
    // láy đc id 
    this.setState({
     ...this.state,
      isAdd : false,
      studentEdit : this.state.data.find(item=> item.id === id)
    })
  }
  // khai báo các thuộc tính 
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* <div className="col-8">
            <ListStudent handleEdit = {this.handleEditStudent} data={this.state.data} handleDelete={this.handleDelete} />
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Form {this.state.isAdd?"Add":"Edit"}</h5>
              </div>
              <FormStudent student={this.state.studentEdit}  isAdd = {this.state.isAdd} handleAdd={this.handleAddStudent}  />
            </div>
          </div> */}

          {/* form */}

          <StudentManager/>
        </div>
      </div>
    )
  }
}

export default App
