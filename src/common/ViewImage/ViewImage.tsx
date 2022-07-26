import { useDispatch, useSelector } from "react-redux";
import State from "../../store/types/State";
import "./viewImage.css";
import CloseIcon from "@mui/icons-material/Close";
import { setImageVisile } from "../../store/action";

function ViewImage() {
	const imageVisible = useSelector(({ imageVisible }: State) => imageVisible);
	const dispatch = useDispatch();

	if (imageVisible.length === 0) return <></>;

	const handleClose = () => dispatch(setImageVisile(""));

	return (
		<div className="vi27ctn ">
			<div className="vi27sc animate__animated animate__zoomIn">
				<img src={imageVisible} className="vi27im" />
				<div onClick={handleClose}>
					<CloseIcon />
				</div>
			</div>
		</div>
	);
}

export default ViewImage;
