import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import "./treeFolder.css";
import { useDispatch } from "react-redux";
import { setPath } from "../../store/action";
import getName from "../../utils/getName";

type PropsType = {
	title: string;
	dir: string[];
	children?: React.ReactNode;
};

function Treefolder({ title, children, dir }: PropsType) {
	const dispatch = useDispatch();

	const handleClick = () => dispatch(setPath(dir));

	return (
		<div className="tf17ctn">
			<div className="tf17sc" onClick={handleClick}>
				<FolderIcon />
				{getName(title)}
			</div>
			{children}
		</div>
	);
}

export default Treefolder;
