import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteFolder, toggleDeleteVisible } from "../../store/action";
import State from "../../store/types/State";
import "./delete.css";

function Delete() {
	const { folder, curr } = useSelector(({ deleteVisible, path }: State) => ({
		folder: deleteVisible,
		curr: path[path.length - 1],
	}));
	const dispatch = useDispatch();

	if (!folder) return <></>;

	const handleDelete = (folderName: string) => {
		dispatch(toggleDeleteVisible(""));

		dispatch(deleteFolder(curr, folderName));
	};

	return (
		<div className="dl28ctn">
			<div className="dl28sc animate__animated animate__zoomIn ">
				<h1 className="dl28hd">Are you sure !</h1>
				<div className="dl28cb">
					<Button variant="outlined" onClick={() => handleDelete("")}>
						Cancel
					</Button>
					<Button
						variant="outlined"
						color="error"
						onClick={() => handleDelete(folder)}
					>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Delete;
