import "./sidebar.css";
import createTree from "../../utils/createTree";
import { useSelector } from "react-redux";
import State from "../../store/types/State";

function Sidebar() {
	const { hash, path } = useSelector(({ hash, path }: State) => ({
		hash,
		path,
	}));

	return (
		<div className="sd13ctn animate__animated  animate__slideInLeft">
			{createTree(hash, path, [])}
		</div>
	);
}

export default Sidebar;
