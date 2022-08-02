import { useDispatch, useSelector } from "react-redux";

import { setPath, toggleAddFolderVisible } from "../../store/action";
import State from "../../store/types/State";

import { getName } from "../../utils/helper";

import FolderIcon from "../FolderIcon";
import AddButton from "../AddButton";
import Image from "../Images";

import "./explorer.css";

function Explorer() {
	let { hash, curr, folderInfo, sortFolder, path } = useSelector(
		({ hash, path, sortFolder, folderInfo }: State) => ({
			hash,
			curr: path[path.length - 1],
			sortFolder,
			folderInfo,
			path,
		})
	);

	const dispatch = useDispatch();

	const handleAddButtonClick = () => dispatch(toggleAddFolderVisible(true));

	if (sortFolder)
		hash[curr] = hash[curr].sort((a, b) =>
			a.toLocaleLowerCase().localeCompare(b.toLocaleUpperCase())
		);

	const handleSetPath = (folder: string) => {
		let newPath: string[] = [];

		for (let fldr of path)
			if (fldr !== folder) newPath.push(fldr);
			else {
				newPath.push(fldr);
				break;
			}

		dispatch(setPath(newPath));
	};

	return (
		<div className="ep18ctn animate__animated  animate__slideInRight">
			<div className="ep18sp ">
				{path.map((folder) => (
					<p
						className="ep18pr animate__animated animate__backInLeft"
						key={folder}
						onClick={() => handleSetPath(folder)}
					>
						{getName(folder)}
					</p>
				))}
			</div>

			<div className="ep18sc">
				{folderInfo[curr].type === "folder" ? (
					<>
						{hash[curr].map((folder) => (
							<FolderIcon key={folder} title={folder} />
						))}
						<AddButton onClick={handleAddButtonClick} />
					</>
				) : (
					<Image>
						{hash[curr].map((folder) => (
							<FolderIcon key={folder} title={folder} />
						))}
						<AddButton onClick={handleAddButtonClick} />
					</Image>
				)}
			</div>
		</div>
	);
}

export default Explorer;
