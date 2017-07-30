import React ,{Component} from 'react';
import style from '../style/home.css'
import classNames  from 'classnames'

const cx=classNames.bind(style);

const FilterItem =(props)=>{
	return(
		<span 
			className={cx({selectedFilter:props.isSelected,filter:true})}
			onClick = {()=>(props.onChangeFilter(props.filter))}>
			{props.filter}
		</span>
	);
}


class AgentsHeader extends Component{
	constructor(props){
		super(props);
		this.handleChangeFilter = this.handleChangeFilter.bind(this);
		this.state = {filter:props.filter};
	}

	handleChangeFilter(filter){
		this.props.onChangeFilter(filter);
		this.setState({filter});
	}

	render(){
		const that = this;
		return(
			<div className ="headContainer">
				<span className="title">Agents</span>
				{
					this.props.items.map((key,index)=>{
						return (
							<FilterItem
								key={index}
								filter={key}	
								isSelected={that.state.filter === key}
								onChangeFilter = {this.handleChangeFilter}
							/>
						)
					})
				}
			</div>
		);
	}
}

export default AgentsHeader;