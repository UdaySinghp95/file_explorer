import HashMap from "../../types/HashMap";
import InfoHash from "../../types/InfoHash";
import State from "../types/State";

const treePath: HashMap = {};

treePath["root-000"] = [
	"movies-999",
	"music-998",
	"user-997",
	"writing-666",
	"other-993",
	"coffee-324",
	"data-323",
	"images-502",
];

treePath["movies-999"] = [];
treePath["music-998"] = ["mix-242"];
treePath["mix-242"] = ["romantic-432"];
treePath["data-323"] = ["user-997"];
treePath["user-997"] = [];
treePath["writing-666"] = [];
treePath["coffee-324"] = [];
treePath["user-997"] = [];
treePath["other-993"] = [];
treePath["romantic-432"] = [];
treePath["images-502"] = [];

const path = ["root-000"];

const folderInfo: InfoHash = {};

folderInfo["root-000"] = {
	creator: "root",
	date: new Date().toLocaleDateString(),
	size: "12",
	type: "folder",
};

folderInfo["images-502"] = {
	creator: "root",
	date: new Date().toLocaleDateString(),
	size: "30",
	type: "file",
};

folderInfo["movies-999"] =
	folderInfo["music-998"] =
	folderInfo["user-997"] =
	folderInfo["writing-666"] =
	folderInfo["other-993"] =
	folderInfo["coffee-324"] =
	folderInfo["data-323"] =
	folderInfo["mix-242"] =
	folderInfo["romantic-432"] =
	folderInfo["data-323"] =
		folderInfo["root-000"];

const initialState: State = {
	hash: treePath,
	path: path,
	folderLoading: false,
	pathLoading: false,
	mode: "folder",
	addFolderVisible: false,
	leftClickVisible: "",
	folderInfoVisible: "",
	folderInfo,
	sortFolder: false,
	imageVisible: "",
	deleteVisible: "",
};

export default initialState;
