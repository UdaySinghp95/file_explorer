import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import Folder from "@mui/icons-material/Folder";

import {
	hideLeftClick,
	setFolderInfoVisible,
	toggleDeleteVisible,
	upatePath,
} from "../../store/action";
import State from "../../store/types/State";

import getName from "../../utils/getName";

import "./folderIcon.css";

function FolderIcon({ title }: PropType) {
	const leftClickVisible = useSelector(
		({ leftClickVisible }: State) => leftClickVisible
	);

	const dispatch = useDispatch();

	const handleFolderClick = () => {
		dispatch(upatePath(title));
		dispatch(hideLeftClick(""));
	};

	const handleLeftClick = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(hideLeftClick(title));
	};

	const handleDelete = () => dispatch(toggleDeleteVisible(title));
	const handleInfoClick = () => dispatch(setFolderInfoVisible(title));

	return (
		<div
			className="fi19ctn  "
			onDoubleClick={handleFolderClick}
			onContextMenu={handleLeftClick}
			onClick={() => {
				// handleFolderClick();
				dispatch(hideLeftClick(""));
			}}
		>
			<Folder />
			<p className="fi19pr  ">{getName(title)}</p>
			{leftClickVisible === title && (
				<div className="fi19lf">
					<p onClick={handleFolderClick}> Open</p>
					<p onClick={handleInfoClick}>Info</p>
					<p className="danger" onClick={handleDelete}>
						Delete
					</p>
				</div>
			)}
		</div>
	);
}

type PropType = {
	title: string;
};

export default FolderIcon;

// animate__animated animate__bounceIn
