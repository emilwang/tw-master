import {combineReducers} from 'redux';
import _ from 'lodash';

const filter =(state="physical",action)=>{
	if(action.type ==="ChangeFilter"){
		return  action.data;
	}
	return state;
}

const agentsList = [
	{
		addr:'bjstdmngbgr02.thoughtworks.com',
		ip:'192.168.1.2',
		path:'var/lib/cruise-agent',
		kind:'idle',
		user:'deny',
		category:'physical',
		resources:[{id:1,value:'ubuntu'},{id:2,value:'fireFox'},{id:3,value:'core-duo'}]
	},
	{
		addr:'bjstdmngbgr03.thoughtworks.com',
		ip:'192.168.1.3',
		path:'var/lib/cruise-agent',
		kind:'building',
		user:'',
		category:'physical',
		resources:[{id:1,value:'ubuntu'},{id:2,value:'fireFox'},{id:3,value:'core-duo'}]
	},
	{
		addr:'bjstdmngbgr04.thoughtworks.com',
		ip:'192.168.1.4',
		path:'var/lib/cruise-agent',
		kind:'building',
		user:'',
		category:'physical',
		resources:[{id:1,value:'ubuntu'},{id:2,value:'fireFox'},{id:3,value:'core-duo'}]
	},
	{
		addr:'bjstdmngbgr05.thoughtworks.com',
		ip:'192.168.1.5',
		path:'var/lib/cruise-agent',
		kind:'idle',
		user:'deny',
		category:'physical',
		resources:[]
	},

	{
		addr:'bjstdmngbgr05.thoughtworks.com',
		ip:'192.168.1.5',
		path:'var/lib/cruise-agent',
		kind:'idle',
		user:'ben',
		category:'virtual',
		resources:[]
	},
];

const  items =(state=agentsList,action)=>{
	switch(action.type){
		case "AddResources":
			{
				const item = state[action.data.index];
				const values = _.split(action.data.value,',');
				let newId = _.get(_.last(item.resources), 'id', 0);
				
				_.forEach(values,(value)=>{
					item.resources.push({id: ++newId, value})
				});
				
				return [...state]
			}
		case "DeleteResource":
			{
			const item = state[action.data.index]
			item.resources=item.resources.filter(({id})=>(id!==action.data.id));
			return [...state];
			}
		default:{
      return state;
    }
	}
}

export default  combineReducers({
	filter,
	items
})