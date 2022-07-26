import "./button.css";

function index({ onClick }: Props) {
	return (
		<button className="bt24btn" onClick={() => onClick()}>
			Create
		</button>
	);
}

type Props = {
	onClick: Function;
};

export default index;
