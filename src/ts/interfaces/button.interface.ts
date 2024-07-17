export default interface Button {
	id: string;
	textContent: string;
	type?: "submit" | "reset" | "button";
	classNames?: string;
}
