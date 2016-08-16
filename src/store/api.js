import {ajax} from 'jquery'

export default {
	loadRepo: function(params){
		const sendJSON = {q:(params.search.length>0?params.search+"\+":"")+"stars:>=0",sort:"stars",page:params.page,per_page:params.per_page};
		if(params.search.length>0){
			delete(sendJSON.sort);
		}
		return new Promise(function(resolve,reject){
			ajax({
	  			url: 'https://api.github.com/search/repositories',
	          	type: "GET",
	          	contentType: "application/json; charset=utf-8",
	        	data: sendJSON,
	        })
	        .done(function(data) {
	          	resolve(data);
	        })
	        .fail(function(e) {
	          	alert(e)
	        })
		})
	},
	loadRepoByOrg: function(params){
		let sendJSON;
		if(params.page==1 && params.search.length>0){
			sendJSON = {query:params.search};
		}else{
			sendJSON = {query:params.search,page:params.page,per_page:params.per_page};
		}
		return new Promise(function(resolve,reject){
			ajax({
	  			url: 'https://api.github.com/orgs/'+params.org+'/repos',
	          	type: "GET",
	          	contentType: "application/json; charset=utf-8",
            	data: sendJSON,
	        })
	        .done(function(data) {
	          	resolve(data);
	        })
	        .fail(function(e) {
	          	alert(e)
	        })
		})
	}
}

