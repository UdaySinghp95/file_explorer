import Info from "../../types/Info";
import actionEnum from "../action/actionEnum";

type Action = {
	type: actionEnum;
	payload: {
		path?: string[];
		folder?: {
			parent: string;
			name: string;
			info?: Info;
		};
		addPath?: string;
		mode?: string;
		addFolderVisible?: boolean;
		leftClickVisible?: string;
		folderInfoVisible?: string;
		sortFolder?: boolean;
		imageVisible?: string;
		deleteVisible?: string;
	};
};

export default Action;
