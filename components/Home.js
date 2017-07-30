import  React,{Component} from 'react';
import {Link} from 'react-router';
import style from '../style/home.css'
import Agents from './Agents'
import classNames  from 'classnames'

const cx=classNames.bind(style);

export default class Home extends Component{

	render(){
		const route = _.get(this.props,"routes[1].path","/");
		return(
			<div id="home">
				<div className={cx({homeContanier:true})}>
					<span>cruise</span>
					<div className = {cx({nav:true})}>
						<Link className={cx({selectedTab: route === '/dashboard'})} to="/dashboard">dashboard</Link>
						<Link className={cx({selectedTab: route === '/cruise'})} to="/cruise">cruise</Link>
						<Link className={cx({selectedTab: route === '/agents'})} to="/agents">agents</Link>
						<Link className={cx({selectedTab: route === '/help'})} to="/help">help</Link>
					</div>
				</div>
				<div className="custcontainer">
					{this.props.children || <Agents/>}
				</div>
			</div>
		)
	}
}
