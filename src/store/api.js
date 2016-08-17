import {ajax} from 'jquery'

export default {
	loadRepo ({query,page,per_page}) {
		const sendJSON = {q:(query.length>0?query+"\+":"")+"stars:>=0",sort:"stars",page,per_page};
		if(query.length>0){
			delete(sendJSON.sort);
		}
		return new Promise((resolve,reject) => {
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
	loadRepoByOrg ({org,query,page,per_page}) {
		let sendJSON;
		if(page==1 && query.length>0){
			sendJSON = {query}
		}else{
			sendJSON = {query,page,per_page}
		}
		return new Promise( (resolve,reject) => {
			ajax({
	  			url: 'https://api.github.com/orgs/'+org+'/repos',
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

