import React,{Component} from 'react';
import {OverlayTrigger} from 'react-bootstrap';
import PopoverBottom from './PopoverBottom';

const popoverBottom = (props) => {
	return (<PopoverBottom {...props} />)
}

const Resource =({id,value,onDelete})=>{
	return (
		<span>
			<span style={{paddingLeft: "5px"}}>{value}</span>
			<span className="deleteResource" onClick={()=>{onDelete(id)}}>X</span>
		</span>
	);
}

class AgentItem extends Component{
	constructor(props) {
		super(props);
		this.handleDeleteResource = this.handleDeleteResource.bind(this);
		this.handleAddResoure=this.handleAddResoure.bind(this);
		this.handleClose=this.handleClose.bind(this);
	}

	handleDeleteResource(id){
		this.props.onDeleteResource({id,index:this.props.index});
	}

	handleAddResoure(value){
		this.props.onAddResource({index:this.props.index,value});
	}

	handleClose(){
    this.trigger.click()
	}

	render(){
		const {addr,ip,path,kind,user,resources,index,onDeleteResource,onAddResource} = this.props;
		const  itemStyle = {
												borderLeft: "1px solid #908484",
										    paddingLeft: "5px",
										    paddingRight: "5px"
										   };
		let bgColor = {backgroundColor: "#cde9b6"};
		if(user !== "deny"){
				bgColor = {backgroundColor: "#fff99b"};
		}
		return (
			<div className="agentItemContainer" style={bgColor}>
				<span className="circle"></span>
				<div style={{marginLeft:"10px",marginRight:"10px",flex:"1"}}>
					<div style={{padding:"5px",fontWeight: "bold"}}>
						<span style={{marginRight:"5px"}}>{addr}</span>
						<span style={itemStyle}>{kind}</span>
						<span style={itemStyle}>{ip}</span>
						<span style={itemStyle}>{path}</span>
					</div>
					<div style={{padding:"5px"}}>
					  <OverlayTrigger 
					  	delay={0} 
					  	animation={false} 
					  	rootClose 
					  	trigger="click" 
					  	placement="bottom" 
					  	tabindex={0}
					  	overlay={popoverBottom({onAddResource:this.handleAddResoure, onClose: this.handleClose})}>
							<span 
								ref={(c) => {this.trigger = c}} 
								style={{paddingRight: "5px",fontWeight:"bold",textDecoration:"underline"}}>
								+Specify Resources
						  </span>
						</OverlayTrigger>	
						<span style={{borderLeft: "1px solid",paddingLeft: "5px"}}>Resources:</span>
						{resources.map((item,key)=>{
							return (<Resource 
									key={key}
									{...item}
									onDelete={this.handleDeleteResource}
								/>)
						})}
					</div>
				</div>	
				<span style={{display:"flex",alignItems:"flex-end",  height: "100%"}}>{user}</span>
			</div> 
		);
	}
}

export default AgentItem;