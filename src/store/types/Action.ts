import Info from "../../types/Info";

import actionEnum from "../action/actionEnum";
import State from "./State";

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
		loading?: boolean;
		error?: boolean;
		store?: State;
	};
};

export default Action;
