import React ,{Component}from 'react';
import {connect} from 'react-redux';
import AgentItem from './AgentItem';
import AgentsHeader from './AgentsHeader';
import AgentsList from './AgentsList';

class Agents extends Component{
	constructor(props) {
		super(props);
		this.handleDeleteResource = this.handleDeleteResource.bind(this);
		this.handleChangeFilter = this.handleChangeFilter.bind(this);
		this.renderContext = this.renderContext.bind(this);
		this.handleAddResoure = this.handleAddResoure.bind(this);
	}

	handleDeleteResource(data){
		this.props.dispatch({
			type:'DeleteResource',
			data
		});
	}

	handleChangeFilter(filter){
		this.props.dispatch({
			type:"ChangeFilter",
			data:filter
		});	
	}

	handleAddResoure(data){
		this.props.dispatch({
			type:"AddResources",
			data
		});	
	}

	renderContext(filteredItems){
		return(
			<div className = "filterContainer">
				<div className = "agentsContext">
				{

					filteredItems.map((item,index)=>{
						return (
							<AgentItem 
								key={index}
								{...item} 
								index={index} 
								onDeleteResource={this.handleDeleteResource}
								onAddResource={this.handleAddResoure}
							/>
						)
					})
				}
			 </div>
			 <AgentsList/>
			</div>
		);
	}

	render(){
		let filteredItems =  this.props.items;
		if(this.props.filter !== 'all'){
 			filteredItems= this.props.items.filter(({category})=>( category === this.props.filter))
		}
		return(
			<div style={{height:"100%"}}>
				<AgentsHeader 
					items={["all","physical","virtual"]}
					onChangeFilter={this.handleChangeFilter}
					filter={this.props.filter}
				/>
				{this.renderContext(filteredItems)}
			</div>
		);
	};
}

function mapStateToProps(state){
	return {
		filter:state.agents.filter,
		items:state.agents.items
	};
}


export default connect(mapStateToProps)(Agents);