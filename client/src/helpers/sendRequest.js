// eslint-disable-next-line default-param-last
export default async function sendRequest(entity, method = "GET", headers) {
	return fetch(`${entity}`, {
		method,
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
		// eslint-disable-next-line consistent-return
	}).then((response) => {
		if (response.ok) {
			if (method === "GET" || method === "POST" || method === "PUT") {
				return response.json();
			}
			return response.json();
		}
	});
}
export async function sendRequestWithToken(entity, config, headers, method = "GET") {
	return (
		fetch(`${entity}`, {
			method,
			headers: {
				"Content-Type": "application/json",
				...headers,
			},
			...config,
			// eslint-disable-next-line consistent-return
		})
			// eslint-disable-next-line consistent-return
			.then((response) => {
				if (response.ok) {
					if (method === "GET" || method === "POST" || method === "PUT") {
						return response.json();
					}
					return response.json();
				}
			})
			.then((data) => {
				if (data) {
					localStorage.setItem("token", data.token);
				}
				return false;
			})
	);
}
