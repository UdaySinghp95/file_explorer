import "./iconContainer.css";

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

type PropsType = {
	title: string;
	onClick: Function;
	children: JSX.Element;
};

export default index;
