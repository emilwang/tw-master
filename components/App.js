import React ,{Component} from 'react';
import {Provider} from 'react-redux';
import {Router,browserHistory,Route} from 'react-router';
import  store from "../store";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Cruise from "./Cruise";
import Agents from "./Agents";
import Help from "./Help";

export default class Root extends Component{

  render(){
    return (
      <Provider store={store}>
        <div>
        	<div className="login"><span>Signed in as Member -></span><a>Sing out</a></div>
          <Router
            history={browserHistory}
          >
          	<Route path="/" component={Home}>
          		<Route path="/dashboard" component={Dashboard}/>
        			<Route path="/cruise" component={Cruise}/>
        			<Route path="/agents" component={Agents}/>
        			<Route path="/help" component={Help}/>
          	</Route>
          </Router>
        </div>
      </Provider>
    );
  }
}
