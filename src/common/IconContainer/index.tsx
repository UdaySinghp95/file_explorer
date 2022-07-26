import "./iconContainer.css";

type PropsType = {
	title: string;
	onClick: Function;
	children: JSX.Element;
};

function index({ children, title, onClick }: PropsType) {
	return (
		<div
			className="ic15ctn animate__animated animate__bounceIn"
			onClick={() => onClick()}
		>
			{children}
			<p>{title}</p>
		</div>
	);
}

export default index;
