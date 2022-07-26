import "./inputField.css";

type Prop = {
	title: string;
	value?: string;
	type?: string;
	handleChange?: Function;
};

function index({ title, value, handleChange, type }: Prop) {
	return (
		<input
			type={type ?? "text"}
			className="if23ip"
			placeholder={title}
			value={value}
			onChange={(e) => handleChange && handleChange(e.currentTarget.value)}
		/>
	);
}

export default index;
