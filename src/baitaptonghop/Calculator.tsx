import React, { Component, MouseEventHandler } from 'react'
import { Button } from 'react-bootstrap'

export default class Calculator extends Component <{},{express :string[], result : number}> {
    constructor(props: any){
        super(props)
        this.state = {
            express : [],
            result : 0
        }
    }
    handleClickButton = (e : string) => {
      this.setState({
        express : [...this.state.express, e]
      })
    }
    calExpress = ()=>{
        let result =  eval(this.state.express.join(""))
        console.log( result);
        this.setState({
            ...this.state,
            result : result
        })
    }
  render() {
    
    return (
      <div className='bg-danger container rounded-1 mt-4  p-2 border border-1 border-warning' style={{width: "200px"}}>
        <div className='bg-light mb-3 p-2 border-4 border rounded-2' style={{width:"100%"}}>
            <span>{this.state.express.join("")}</span>
            <br />
            <span className='fw-bold'>= {this.state.result}</span>
        </div>
        <div className="d-flex gap-2 mb-2 justify-content-between">
            <div><Button variant='secondary' onClick={()=>this.handleClickButton('1')}>1</Button></div>
            <div><Button  variant='secondary' onClick={()=>this.handleClickButton('2')}>2</Button></div>
            <div><Button  variant='secondary' onClick={()=>this.handleClickButton('3')}>3</Button></div>
            <div><Button  variant='info' onClick={()=>this.handleClickButton('+')}>+</Button></div>
        </div>
        <div className="d-flex gap-2 mb-2 justify-content-between">
            <div><Button variant='secondary' onClick={()=>this.handleClickButton('4')}>4</Button></div>
            <div><Button  variant='secondary' onClick={()=>this.handleClickButton('5')}>5</Button></div>
            <div><Button  variant='secondary' onClick={()=>this.handleClickButton('6')}>6</Button></div>
            <div><Button  variant='info'onClick={()=>this.handleClickButton('-')} >-</Button></div>
        </div>
        <div className="d-flex gap-2 mb-2 justify-content-between" >
            <div><Button variant='secondary' onClick={()=>this.handleClickButton('7')}>7</Button></div>
            <div><Button  variant='secondary ' onClick={()=>this.handleClickButton('8')}>8</Button></div>
            <div><Button  variant='secondary' onClick={()=>this.handleClickButton('9')}>9</Button></div>
            <div><Button  variant='info'>*</Button></div>
        </div>
        <div className="d-flex gap-2 justify-content-between" >
            <div><Button variant='secondary' onClick={()=>this.handleClickButton('0')}>0</Button></div>
            <div><Button  variant='secondary'>.</Button></div>
            <div><Button onClick={this.calExpress} >=</Button></div>
            <div><Button  variant='info'>/</Button></div>
        </div>
      </div>
    )
  }
}
