import { useDispatch } from "react-redux";

import SideBar from "../../common/Sidebar";
import Explorer from "../../common/Explorer";
import Header from "../../common/Header";
import AddFolder from "../../common/AddFolder";
import Info from "../../common/Info";
import ViewImage from "../../common/ViewImage";
import Delete from "../../common/Delete";

import { hideLeftClick, setCacheData } from "../../store/action";

import "./home.css";
import { useEffect } from "react";

function Home() {
	const dispatch = useDispatch();

	const handleLeftClick = () => dispatch(hideLeftClick(""));

	useEffect(() => {
		const cacheStore = localStorage.getItem("file-explorer");

		if (cacheStore) dispatch(setCacheData(JSON.parse(cacheStore)));
	}, [dispatch]);

	return (
		<div
			className="hm12ctn animate__animated animate__backInDown "
			onClick={handleLeftClick}
		>
			<Header />
			<div className="hm12sc">
				<SideBar />
				<Explorer />
			</div>
			<Info />
			<AddFolder />
			<ViewImage />
			<Delete />
		</div>
	);
}

export default Home;
