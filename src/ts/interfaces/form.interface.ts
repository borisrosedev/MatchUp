import Button from "./button.interface";
import Field from "./field.interface";

export default interface Form {
	formId: string;
	inputs: Required<Field>[];
	buttons: Required<Button>[];
}
