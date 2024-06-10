import  { Component } from 'react'

export default class Modal extends Component  <{},{isOpen : boolean}>{ // khai báo kiểu dữ liệu cho prop, state
    constructor(props : {}){
        super(props)
        this.state = {
            isOpen : false //khởi tạo giá trị cho state 
        }
    }
    changeIsOpen = (status : boolean)=>{
        this.setState({isOpen : status}) // cập nhật state
    }

  render() {
    return (
      <div>
        
            <h1 onMouseOver={()=>this.changeIsOpen(true)} onMouseOut={()=>this.changeIsOpen(false)}>Hover me</h1>
            <button onClick={()=>this.changeIsOpen(true)}  // gán sự kiện cho element 
            style={
                {backgroundColor : 'blue' , 
                color:'white' ,padding : '4px 10px', 
                border:'none',borderRadius : '4px'}
                }>Show Notification</button>
            {
                this.state.isOpen && (<div style={{
                    display : 'flex',
                    justifyContent : 'space-between',
                    gap: "20px",
                    maxWidth : "200px",
                    backgroundColor : 'whitesmoke',
                    padding:"10px" ,
                    borderRadius : "5px",
                    boxShadow : "0px 0px 5px 2px black",
                    position: "absolute",
                    top : "10px",
                    right:"10px"
                }}>
                    <p>Hiển thị thông báo</p>
                    <span onClick={()=>this.changeIsOpen(false)} style={{color:"red"}}>X</span>
                </div>)
            
            }

            
      </div>
    )
  }
}
