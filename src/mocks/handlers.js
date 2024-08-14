import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("/api/users", (resolver) => {
		return HttpResponse.json([
			{
				id: 1,
				name: "kasra",
                lastName : 'tavakoli',
                email : "kasrabtavakoli@gmail.com",
			},
		]);
	}),
	
];