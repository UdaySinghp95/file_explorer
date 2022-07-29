import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";

import { setFolderInfoVisible } from "../../store/action";
import State from "../../store/types/State";

import getName from "../../utils/getName";

import "./info.css";

function Info() {
	const { folderInfoVisible, folderInfo } = useSelector(
		({ folderInfoVisible, folderInfo }: State) => ({
			folderInfo,
			folderInfoVisible,
		})
	);

	const dispatch = useDispatch();

	if (folderInfoVisible.length === 0) return <></>;

	const handleClose = () => dispatch(setFolderInfoVisible(""));

	const info = folderInfo[folderInfoVisible];

	return (
		<div className="if25ctn">
			<div className="if25sc animate__animated animate__zoomIn">
				<h1 className="if25hd">Infomation ⓘ </h1>
				<div className="if25sub">
					<p className="if25bd">name</p>
					<p>{getName(folderInfoVisible)}</p>
					<p className="if25bd">creater</p>
					<p>{info.creator}</p>
					<p className="if25bd">Size</p>
					<p>{info.size} MB</p>
					<p className="if25bd"> Date</p>
					<p>{info.date}</p>
					<p className="if25bd"> Type</p>
					<p>{info.type}</p>
				</div>
				<Button variant="outlined" onClick={handleClose}>
					{" "}
					Okay
				</Button>
			</div>
		</div>
	);
}

export default Info;
