import "./header.css";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import IconContainer from "../IconContainer";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Search from "../Search";
import { useDispatch } from "react-redux";
import {
	backFolder,
	setSortFolder,
	toggleAddFolderVisible,
	toggleMode,
} from "../../store/action";

function Header() {
	const dispatch = useDispatch();

	const handleAddButtonClick = () => dispatch(toggleAddFolderVisible(true));

	const handleSortClick = () => dispatch(setSortFolder(true));

	const handleImageUpload = () => {
		dispatch(toggleAddFolderVisible(true));
		dispatch(toggleMode("file"));
	};

	const handleBack = () => dispatch(backFolder());

	return (
		<div className="hd14ctn">
			<IconContainer title="New Folder" onClick={handleAddButtonClick}>
				<CreateNewFolderOutlinedIcon />
			</IconContainer>
			<IconContainer title="Image Upload" onClick={handleImageUpload}>
				<PublishOutlinedIcon />
			</IconContainer>
			<IconContainer title="Sort" onClick={handleSortClick}>
				<SortOutlinedIcon />
			</IconContainer>

			<IconContainer title="Back" onClick={handleBack}>
				<ArrowBackIcon />
			</IconContainer>
			<Search />
		</div>
	);
}

export default Header;
