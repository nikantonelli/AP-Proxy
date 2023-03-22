class BoardService {
	/**
	 * 
	 * @param {object to access AgilePlace} apiAccess 
	 */
	constructor(apiAccess) {
		this.cache = null;
	}

	async find(options) {
		var params = {
			url: "/board/",
			method: "GET"
		}
		if (globalThis.apiRoot) {
			var response = await globalThis.apiRoot.xfr(params);
			return JSON.stringify(response.data);
		}
		else {
			return "apiRoot not configured";
		}
	}

	async get(id, options) {
		console.log(id, params)
		var params = {
			url: "/board/" + id,
			method: "GET"
		}
		var response = await this.apiAccess.xfr(params);
		return JSON.stringify(response.data);
	}
}
export default BoardService;