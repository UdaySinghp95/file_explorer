import "./button.css";

function index({ onClick }: Props) {
	return (
		<button className="bt24Button" onClick={() => onClick}>
			Create
		</button>
	);
}

type Props = {
	onClick: Function;
};

export default index;
