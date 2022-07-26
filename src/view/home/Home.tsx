import SideBar from "../../common/Sidebar";
import Explorer from "../../common/Explorer";
import Header from "../../common/Header";
import AddFolder from "../../common/AddFolder";
import "./home.css";
import { useDispatch } from "react-redux";
import Info from "../../common/Info";
import ViewImage from "../../common/ViewImage";
import { hideLeftClick } from "../../store/action";
import Delete from "../../common/Delete";

function Home() {
	const dispatch = useDispatch();

	const handleLeftClick = () => dispatch(hideLeftClick(""));

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
