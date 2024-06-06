import{ Component } from 'react'
type PropTypes = {
    id : number,
    name : string,
    age : number,
    print: ()=>void,
    callBack: (a:string)=>void
}
type StateTypes = {
    name : string,
    dob : string,
    count : number,
}

export default class Children extends Component<PropTypes,StateTypes> {
    constructor(props:PropTypes){
        super(props)
        // khai báo thêm các thuộc tính khác 
        this.state = {
            name : "",
            dob : "",
            count : 0
        }
    }

    // giả sử có 1 thuộc tính là name và 1 thuộc tính age
  render() {
    let keyword = "Như Ngọc"
    return (
      <div>
        {/* hiển các thông tin ở đây */}
        <ul>
            <li>id : {this.props.id}</li>
            <li>name : {this.props.name}</li>
            <li>age : {this.props.age}</li>
            <li>kq : {this.state.name}</li>
            <li>count : {this.state.count}</li>
        </ul>
        <button onClick={()=>this.props.callBack(keyword)}>click</button><br />
        <button onClick={()=>this.setState({...this.state, name : "Tâm Anh"})}>click</button><br />
        <button onClick={()=>this.setState({...this.state, count: this.state.count + 10})}>Increment count</button>
      </div>
    )
  }
}
