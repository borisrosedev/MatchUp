export default interface Field {
	placeholder: string;
	id: string;
	type?: "text" | "email" | "password";
	classNames?: string;
}
