import React from "react";
import { useDispatch } from "react-redux";

import FolderIcon from "@mui/icons-material/Folder";

import { setPath } from "../../store/action";

import { getName } from "../../utils/helper";

import "./treeFolder.css";

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

type PropsType = {
	title: string;
	dir: string[];
	children?: React.ReactNode;
};

export default Treefolder;
