import HashMap from "../../types/HashMap";
import InfoHash from "../../types/InfoHash";

type State = {
	hash: HashMap;
	path: string[];
	folderLoading: boolean;
	pathLoading: boolean;
	mode: string;
	addFolderVisible: boolean;
	leftClickVisible: string;
	folderInfoVisible: string;
	folderInfo: InfoHash;
	sortFolder: boolean;
	imageVisible: string;
	deleteVisible: string;
};

export default State;
