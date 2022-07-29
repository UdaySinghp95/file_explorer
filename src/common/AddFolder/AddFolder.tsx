import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";

import { addFolder, toggleAddFolderVisible } from "../../store/action";
import State from "../../store/types/State";

import Mode from "../Mode";
import InputField from "../InputField";
import Button from "../Button";

import "./addFolder.css";

function AddFolder() {
	let { curr, addFolderVisible, mode } = useSelector(
		({ path, addFolderVisible, mode }: State) => ({
			curr: path[path.length - 1],
			addFolderVisible,
			mode,
		})
	);
	const [name, setName] = useState("");
	const [creator, setCreator] = useState("");
	const [size, setSize] = useState("");
	const [date, setDate] = useState("");

	const dispatch = useDispatch();

	if (!addFolderVisible) return <></>;

	const handleClose = () => dispatch(toggleAddFolderVisible(false));

	const handleCreate = () => {
		if (name.length === 0) return;

		dispatch(addFolder(curr, name, { creator, size, date, type: mode }));

		setName("");
		setCreator("");
		setDate("");

		setSize("");

		handleClose();
	};

	return (
		<div className="af21ctn ">
			<div className="af21sc animate__animated animate__zoomIn">
				<h1 className="af21hd">Create New</h1>

				<div className="af21ac">
					<Mode title="folder" />
					<Mode title="file" />
				</div>
				<InputField title="name" value={name} handleChange={setName} />
				<InputField title="creator" value={creator} handleChange={setCreator} />
				<InputField
					title="size"
					type="number"
					value={size}
					handleChange={setSize}
				/>
				<InputField
					title="date"
					type="date"
					value={date}
					handleChange={setDate}
				/>

				<Button onClick={handleCreate} />

				<CloseIcon onClick={handleClose} />
			</div>
		</div>
	);
}

export default AddFolder;
