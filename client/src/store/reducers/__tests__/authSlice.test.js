import axios from "axios";
import authReducer, { fetchAuth, fetchRegister, setIsAuth } from "../authSlice";
import { updateCartFromNotAuthToAuth } from "../cartSlice";
import { updateNotAuthToAuthCart } from "../../../helpers/updateNotAuthToAuthCart";
import { DOMAIN } from "../../../config/API";

jest.mock("axios");

describe("fetchAuth", () => {
	it("should return user data when login succeeds", async () => {
		const mockData = { email: "example@example.com", password: "password" };
		const mockThunkAPI = {
			dispatch: jest.fn(),
			getState: () => ({ cart: { shoppingCart: [] } }),
		};
		const mockResponse = { data: { token: "example_token" } };

		axios.post.mockResolvedValue(mockResponse);
		const dispatch = jest.fn();

		await fetchAuth(mockData, mockThunkAPI)(dispatch);

		expect(axios.post).toHaveBeenCalledWith(`${DOMAIN}/customers/login`, {
			email: "example@example.com",
			password: "password",
		});
	});
});
