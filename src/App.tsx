import { Component, ReactNode } from "react";
import ListStudent from "./components/ListStudent";
import 'bootstrap/dist/css/bootstrap.min.css';

export interface IStudent {
  id: number;
  name: string;
  dob: string;
  address: string;
  phone : string;
  sex : boolean
}
type StateType = {
  data : IStudent[]
}

class App extends Component <{},StateType> {
 // thiết kế ứng dụng quản lí sinh viên   
  // danh sách sinh viên 
  constructor(props:{}){
    super(props);
    this.state = {
      data : [
        {id: 1,
          name: "Huỳnh Tam Anh",
          dob: "2005-02-15",
          address: "Sài Gòn",
          phone : "0984384363",
          sex : true
        },
        {id: 2,
          name: "Kha Hào",
          dob: "2005-05-05",
          address: "An Giang",
          phone : "0994874363",
          sex : false
        },
      ]
    }
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id:number){
    // lấy danh sách sau khi xóa
    let afterDeleteList= this.state.data.filter(item=>item.id != id);
    // cập nhật lại danh sách
    this.setState({
      ...this.state,
      data : afterDeleteList
    })
  }
 // khai báo các thuộc tính 
  render() {
    return (
      <div className="container">
        <ListStudent data={this.state.data} handleDelete={this.handleDelete}/>
        {/* form */}
      </div>
    )
  }
}

export default App
