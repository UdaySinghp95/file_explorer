import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./addButton.css";

function index({ onClick }: Props) {
	return (
		<div className="ab20ctn" onClick={() => onClick()}>
			<AddIcon />
		</div>
	);
}

type Props = {
	onClick: Function;
};

export default index;
