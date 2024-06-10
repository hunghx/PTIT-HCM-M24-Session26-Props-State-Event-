import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Calculator extends Component {
  render() {
    return (
      <div className='bg-danger container rounded-1 mt-4  p-2 border border-1 border-warning' style={{width: "200px"}}>
        <div className='bg-light mb-3 p-2 border-4 border rounded-2' style={{width:"100%"}}>
            <span>1+2+3</span>
            <br />
            <span className='fw-bold'>= 6</span>
        </div>
        <div className="d-flex gap-2 mb-2 justify-content-between">
            <div><Button variant='secondary'>1</Button></div>
            <div><Button  variant='secondary'>2</Button></div>
            <div><Button  variant='secondary'>3</Button></div>
            <div><Button  variant='info'>+</Button></div>
        </div>
        <div className="d-flex gap-2 mb-2 justify-content-between">
            <div><Button variant='secondary'>4</Button></div>
            <div><Button  variant='secondary'>5</Button></div>
            <div><Button  variant='secondary'>6</Button></div>
            <div><Button  variant='info'>-</Button></div>
        </div>
        <div className="d-flex gap-2 mb-2 justify-content-between" >
            <div><Button variant='secondary'>7</Button></div>
            <div><Button  variant='secondary'>8</Button></div>
            <div><Button  variant='secondary'>9</Button></div>
            <div><Button  variant='info'>*</Button></div>
        </div>
        <div className="d-flex gap-2 justify-content-between" >
            <div><Button variant='secondary'>0</Button></div>
            <div><Button  variant='secondary'>.</Button></div>
            <div><Button >=</Button></div>
            <div><Button  variant='info'>/</Button></div>
        </div>
      </div>
    )
  }
}
