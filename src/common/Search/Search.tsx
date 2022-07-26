import { useState } from "react";
import "./search.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import State from "../../store/types/State";
import searchFolder from "../../utils/searchFolder";
import { setPath } from "../../store/action";
import getName from "../../utils/getName";

function Search() {
	const [value, setValue] = useState("");
	const [list, setList] = useState<string[][]>([]);
	const [eventId, setEventId] = useState<NodeJS.Timeout>();

	const { path, hash } = useSelector(({ path, hash }: State) => ({
		path,
		hash,
	}));

	const dispatch = useDispatch();

	const handleChange = (value: string) => {
		clearTimeout(eventId);

		setValue(value);

		if (value.length === 0) return setList([]);

		const id = setTimeout(() => {
			setList(searchFolder(hash, path[path.length - 1], value, path));
		}, 250);

		setEventId(id);
	};

	const handleClick = (curr: string[]) => {
		dispatch(setPath(curr));

		setList([]);
		setValue("");
	};

	return (
		<div className="sh16ctn">
			<SearchOutlinedIcon />
			<input
				type="text"
				value={value}
				className="sh16ip"
				placeholder="Search"
				onChange={(e) => handleChange(e.currentTarget.value)}
			/>
			<div className={"sh16sub " + (list.length !== 0 ? "active" : "")}>
				{list.map((folder) => (
					<p className="sh16pr  " onClick={() => handleClick(folder)}>
						{getName(folder[folder.length - 1])}
					</p>
				))}
			</div>
		</div>
	);
}

export default Search;
