import deleteNode from "../../utils/deleteNode";
import generateID from "../../utils/generateID";
import getName from "../../utils/getName";

import actionEnum from "../action/actionEnum";

import Action from "../types/Action";
import State from "../types/State";

import initialState from "./rawData";

function reducer(state: State = initialState, action: Action): State {
	const newState = { ...state };

	let name: string, parent: string;

	switch (action.type) {
		case actionEnum.Add_Folder:
			parent = action.payload.folder?.parent + "";
			name = action.payload.folder?.name + "";

			const res = newState.hash[parent].findIndex(
				(folder) => getName(folder) === name
			);

			if (res !== -1) name += "(" + generateID() + ")";

			name = name + "-" + generateID();

			newState.hash[parent].push(name);
			newState.hash[name] = [];

			if (action.payload.folder?.info)
				newState.folderInfo[name] = action.payload.folder?.info;

			break;

		case actionEnum.Delete_Folder:
			name = action.payload.folder?.name || "";
			parent = action.payload.folder?.parent || " ";

			newState.hash = deleteNode(newState.hash, name);

			delete newState.hash[name];

			newState.hash[parent] = newState.hash[parent].filter(
				(folder) => folder !== name
			);

			break;

		case actionEnum.Set_Path:
			newState.path = action.payload.path || initialState.path;

			break;

		case actionEnum.Update_Path:
			newState.path.push("" + action.payload.addPath);

			break;

		case actionEnum.Folder_Loading:
			newState.folderLoading = !newState.folderLoading;

			break;

		case actionEnum.Path_Loading:
			newState.pathLoading = !newState.pathLoading;

			break;

		case actionEnum.Toggle_Mode:
			newState.mode = action.payload.mode || initialState.mode;
			break;

		case actionEnum.Add_Folder_Visible:
			newState.addFolderVisible = action.payload.addFolderVisible || false;
			newState.mode = "folder";

			break;

		case actionEnum.Left_Click_Visible:
			newState.leftClickVisible = action.payload.leftClickVisible || "";
			break;

		case actionEnum.Folder_Info_Visible:
			newState.folderInfoVisible = action.payload.folderInfoVisible || "";
			break;

		case actionEnum.Sort_FOLDER:
			newState.sortFolder = action.payload.sortFolder || false;

			break;

		case actionEnum.Image_Visible:
			newState.imageVisible = action.payload.imageVisible || "";
			break;

		case actionEnum.Back_Folder:
			if (newState.path.length > 1) newState.path.pop();

			break;

		case actionEnum.Delete_Visible:
			newState.deleteVisible = action.payload.deleteVisible || "";

			break;

		case actionEnum.Toggle_Loading:
			newState.loading = action.payload.loading || false;

			break;

		case actionEnum.Toggle_Error:
			newState.error = action.payload.error || false;

			break;

		default:
			break;
	}

	return newState;
}

export default reducer;
