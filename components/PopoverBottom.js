import  React,{Component} from 'react';
import {Popover} from 'react-bootstrap';

export default class PopoverBottom extends Component{
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleAdd(){
    this.props.onAddResource(this.input.value);
    this.input.value = "";
  }

  handleClose(){
    this.props.onClose()
  }

  render(){
    let newProps =_.clone(this.props);
    delete newProps.onAddResource;
    delete newProps.onClose;

    return (
      <Popover {...newProps} id="popover-positioned-bottom" className="popoverBottom"> 
       <strong>(separate multiple resources name with commas)</strong>
       <input 
         ref={(c)=>{this.input=c}} 
         className="resourceInput"/>
       <div style={{margin:"5px"}}>
         <button onClick={this.handleAdd}>Add Resources</button>
         <button onClick={this.handleClose}>Close</button>
       </div>
      </Popover>);
  }
}