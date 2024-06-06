import { Component } from 'react'
import Children from './Children'

export default class Parent extends Component {
    // luồng du lieu từ cha xuống con : sử dụng props và truyền giá trị vào props
    // luồng dữ liệu từ con lên cha : callback function 

  render() {
    let name = "Tâm anh";
    let id = 1;
    let age  = 12;
    const callBack = (keyword : string)=>{ 
        // gọi ngược lại hàm callBack ở component cha để thực thi
        console.log(keyword);
    }

    return (
      <div>
         <Children callBack={callBack} print={()=>console.log("hello wold")} id={id} name={name} age={age}/>
      </div>
    )
  }
}
