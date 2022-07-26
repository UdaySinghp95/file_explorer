import Info from "../../types/Info";
import Action from "../types/Action";
import actionEnum from "./actionEnum";

export function upatePath(addPath: string): Action {
	return {
		type: actionEnum.Update_Path,
		payload: {
			addPath,
		},
	};
}

export function setPath(path: string[]): Action {
	return {
		type: actionEnum.Set_Path,
		payload: {
			path,
		},
	};
}

export function toggleMode(mode: string): Action {
	return {
		type: actionEnum.Toggle_Mode,
		payload: {
			mode,
		},
	};
}

export function toggleAddFolderVisible(visible: boolean): Action {
	return {
		type: actionEnum.Add_Folder_Visible,
		payload: {
			addFolderVisible: visible,
		},
	};
}

export function hideLeftClick(leftClickVisible: string): Action {
	return {
		type: actionEnum.Left_Click_Visible,
		payload: {
			leftClickVisible,
		},
	};
}

export function addFolder(parent: string, name: string, info: Info): Action {
	return {
		type: actionEnum.Add_Folder,
		payload: {
			folder: {
				parent,
				name,
				info,
			},
		},
	};
}

export function deleteFolder(parent: string, name: string): Action {
	return {
		type: actionEnum.Delete_Folder,
		payload: {
			folder: {
				parent,
				name,
			},
		},
	};
}

export function setFolderInfoVisible(folderInfoVisible: string): Action {
	return {
		type: actionEnum.Folder_Info_Visible,
		payload: {
			folderInfoVisible,
		},
	};
}

export function setSortFolder(sort: boolean): Action {
	return {
		type: actionEnum.Sort_FOLDER,
		payload: {
			sortFolder: sort,
		},
	};
}

export function setImageVisile(image: string): Action {
	return {
		type: actionEnum.Image_Visible,
		payload: {
			imageVisible: image,
		},
	};
}

export function backFolder(): Action {
	return {
		type: actionEnum.Back_Folder,
		payload: {},
	};
}
export function toggleDeleteVisible(deleteVisible: string): Action {
	return {
		type: actionEnum.Delete_Visible,
		payload: {
			deleteVisible,
		},
	};
}
