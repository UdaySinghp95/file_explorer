import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";

import State from "../../store/types/State";
import { setImageVisile } from "../../store/action";

import "./viewImage.css";

function ViewImage() {
	const imageVisible = useSelector(({ imageVisible }: State) => imageVisible);
	const dispatch = useDispatch();

	if (imageVisible.length === 0) return <></>;

	const handleClose = () => dispatch(setImageVisile(""));

	return (
		<div className="vi27ctn ">
			<div className="vi27sc animate__animated animate__zoomIn">
				<img src={imageVisible} className="vi27im" alt="full view " />
				<div onClick={handleClose}>
					<CloseIcon />
				</div>
			</div>
		</div>
	);
}

export default ViewImage;
