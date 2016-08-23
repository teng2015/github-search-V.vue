export default {
	//ugly writing and rewrite  JSONParam/restful later
	loadRepo ({query,page,per_page}) {
		let baseUrl = "https://api.github.com/search/repositories?q="
			+(query.length>0?query+"+stars:>=0":"stars:>=0&sort=stars")
			+"&page="+page
			+"&per_page="+per_page
		return fetch(baseUrl).then(res => res.json())
  			.then(data => data)
  			.catch(e => console.log("uh error", e))
	},
	loadRepoByOrg ({org,query,page,per_page}) {
		let baseUrl = "https://api.github.com/orgs/"+org+"/repos?query="+query;
		if(!(page==1 && query.length>0)){
			baseUrl = baseUrl+"&page="+page+"&per_page="+per_page
		}
		return fetch(baseUrl).then(res => res.json())
			.then(data => data)
			.catch(e => console.log("uh error", e))
	}
}

