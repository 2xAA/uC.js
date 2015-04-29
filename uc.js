var uC = {
	audio: {
		all: function(params) {
			if(!('page' in params)) params.page = 1;

			var reqObj = {
				request: 'audio',
				scope: 'all',
				page: params.page
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		},

		frontpage: function(params) {
			if(!('page' in params)) params.page = 1;

			var reqObj = {
				request: 'audio',
				scope: 'frontpage',
				page: params.page
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		},

		id: function(params) {
			var reqObj = {
				request: 'audio',
				id: params.id
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		},

		rand: function(params) {
			var reqObj = {
				request: 'audio',
				scope: 'rand',
				amount: params.amount
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		},

		search: function(params) {
			if(!('page' in params)) params.page = 1;
			var reqObj = {
				request: 'audio',
				scope: 'search',
				page: params.page
			};

			if('title' in params) reqObj.title = params.title;
			if('description' in params) reqObj.description = params.description;
			if('groupBy' in params) reqObj.groupBy = params.groupBy;

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		},

		top: function(params) {
			var reqObj = {
				request: 'audio',
				scope: 'top'
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		}
	},

	visual: {
		all: function(params) {
			if(!'page' in params) params.page = 1;

			var reqObj = {
				request: 'visual',
				scope: 'all',
				page: params.page
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		},

		id: function(params) {
			var reqObj = {
				request: 'visual',
				id: params.id
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		},

		rand: function(params) {
			var reqObj = {
				request: 'visual',
				scope: 'rand',
				amount: params.amount
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		},

		search: function(params) {
			if(!('page' in params)) params.page = 1;

			var reqObj = {
				request: 'visual',
				scope: 'search',
				page: params.page
			};

			if('title' in params) reqObj.title = params.title;
			if('description' in params) reqObj.description = params.description;
			if('groupBy' in params) reqObj.groupBy = params.groupBy;

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		},

		top: function(params) {
			var reqObj = {
				request: 'visual',
				scope: 'top'
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		}
	},

	comment: {
		audio : {
			get: function(params) {
				var reqObj = {
					request: 'comment',
					scope: 'audio',
					id: params.id
				};

				if('warn' in params) reqObj.warn = params.warn;
				if('error' in params) reqObj.error = params.error;
				if('success' in params) reqObj.success = params.success;

				return uC.request(reqObj);
			}
		},

		visual : {
			get: function(params) {
				var reqObj = {
					request: 'comment',
					scope: 'visual',
					id: params.id
				};

				if('warn' in params) reqObj.warn = params.warn;
				if('error' in params) reqObj.error = params.error;
				if('success' in params) reqObj.success = params.success;

				return uC.request(reqObj);
			}
		}
	},

	favourite: {
		audio : {
			get: function(params) {
				var reqObj = {
					request: 'favourite',
					scope: 'audio',
					id: params.id
				};

				if('warn' in params) reqObj.warn = params.warn;
				if('error' in params) reqObj.error = params.error;
				if('success' in params) reqObj.success = params.success;

				return uC.request(reqObj);
			}
		},

		visual : {
			get: function(params) {
				var reqObj = {
					request: 'favourite',
					scope: 'visual',
					id: params.id
				};

				if('warn' in params) reqObj.warn = params.warn;
				if('error' in params) reqObj.error = params.error;
				if('success' in params) reqObj.success = params.success;

				return uC.request(reqObj);
			}
		}
	},

	user: {
		info: function(params) {
			var reqObj = {
				request: 'user',
				scope: 'info',
				user: params.user
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		},

		stats: function(params) {
			var reqObj = {
				request: 'user',
				scope: 'stats'
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		},

		search: function(params) {
			var reqObj = {
				request: 'user',
				scope: 'search',
				user: params.user
			};

			if('warn' in params) reqObj.warn = params.warn;
			if('error' in params) reqObj.error = params.error;
			if('success' in params) reqObj.success = params.success;

			return uC.request(reqObj);
		}
	},

	request: function(params) {
		var url = 'http://ucollective.org/api/';

		if('request' in params) url += '?request=' + params.request;
		else return {error: 'µC.js: No request.'};

		delete params['request'];

		for(var attrname in params) {
			if(attrname != 'success' && attrname != 'error' && attrname != 'warn') url += '&' + attrname.toLowerCase() + '=' + params[attrname];
		}

		var req = new XMLHttpRequest();
		req.open("GET", url, true);
		req.responseType = "json";
		req.onload = function () {
			var status = req.status;
			if (status == 200) {

			  if('error' in req.response && typeof params.error != 'undefined') params.error(req.response);
			  else if('warn' in req.response && typeof params.warn != 'undefined') params.warn(req.response);
			  else if(typeof params.success != 'undefined') params.success && params.success(req.response);

			} else {
			  params.error && params.error(status);
			}
		};
		req.send();

		return url;
	}
}