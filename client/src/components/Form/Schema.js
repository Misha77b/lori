import * as yup from "yup";

const REQUIRED = "This field is required to fill in";

export const schema = yup.object().shape({
	firstName: yup.string().required(REQUIRED),
	lastName: yup.string().required(REQUIRED),
	email: yup.string().required(REQUIRED),
	password: yup.string().required(REQUIRED),
	changePassword: yup.string().when("password", {
		is: (val) => val && val.length > 0,
		then: yup.string().oneOf([yup.ref("password")], "Both password need to be the same"),
	}),
});
export const validationSchema2 = yup.object().shape({
	email: yup.string().required(REQUIRED),
	password: yup.string().required(REQUIRED),
});
