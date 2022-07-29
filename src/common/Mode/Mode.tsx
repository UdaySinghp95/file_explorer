import { useDispatch, useSelector } from "react-redux";

import { toggleMode } from "../../store/action";
import State from "../../store/types/State";

import "./mode.css";

function Mode({ title }: Prop) {
	const mode = useSelector(({ mode }: State) => mode);

	const dispatch = useDispatch();

	const handleClick = () => dispatch(toggleMode(title));

	return (
		<div
			className={"md22ctn " + (title === mode ? "active" : "")}
			onClick={handleClick}
		>
			{" "}
			{title}
		</div>
	);
}

type Prop = {
	title: string;
};

export default Mode;
