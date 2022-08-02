import { useCallback, useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "react-content-loader";
import axios from "axios";

import State from "../../store/types/State";
import { setImageVisile, toggleError, toggleLoading } from "../../store/action";

import { getName } from "../../utils/helper";

import Photo from "../../types/Photos";

import "./images.css";

function Images({ children }: PropsType) {
	const [list, setList] = useState<string[]>([]);
	const [page, setPage] = useState(0);

	const observer = useRef<IntersectionObserver>();

	const { curr, loading, error } = useSelector(
		({ path, loading, error }: State) => ({
			curr: path[path.length - 1],
			loading,
			error,
		})
	);
	const dispatch = useDispatch();

	useEffect(() => {
		setList([]);
		dispatch(toggleLoading(false));
		dispatch(toggleError(false));
		setPage(0);
	}, [curr, dispatch]);

	const fetchImages = useCallback(async () => {
		try {
			dispatch(toggleLoading(true));

			const {
				data: { results },
			} = await axios.get(
				`https://api.unsplash.com/search/photos/?query=${getName(
					curr
				)}&page=${page}&per_page=20&orientation=landscape&client_id=H8VJv2yEWzXwlRYpjUT_dx88geTwpCYnyRUcUZvQgM4`
			);

			let newList: string[] = [];

			console.log(curr, list[0]?.includes(getName(curr)));

			if (list.length !== 0 && list[0].includes(getName(curr)))
				newList = [...list];

			results.map((img: Photo) => newList.push(img.urls.small as string));

			setPage(page + 1);

			setList(newList);

			dispatch(toggleLoading(false));

			if (results.length === 0) dispatch(toggleError(true));
		} catch (e) {
			console.log("setting error");
			dispatch(toggleError(true));
			console.log(e);
		}
	}, [curr, list, page, dispatch]);

	const lastElementRef = useCallback(
		(node: HTMLImageElement) => {
			console.log(loading);
			if (loading) return;

			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].intersectionRatio) fetchImages();
			});

			if (node && loading === false && error === false)
				observer.current.observe(node);
		},
		[loading, fetchImages, error]
	);

	const handleClick = (img: string) =>
		dispatch(setImageVisile(img.replace("w=400", "w=1080")));

	return (
		<div className="im26ctn">
			<div className="im26sc">
				{children}

				{list.map((url, index) => (
					<img
						src={url}
						key={index}
						className="im26im "
						onClick={() => handleClick(url)}
						alt="related to folder name"
					/>
				))}

				{error === false && (
					<>
						<div ref={lastElementRef} />
						{[...Array(20)].map((d, index) => (
							<ContentLoader
								key={index}
								width="18rem"
								height="13rem"
								className="im26ld"
							>
								<rect width="100%" height="100%" />
							</ContentLoader>
						))}
					</>
				)}
			</div>

			<div className="im26st">
				{error && (
					<img
						src={process.env.PUBLIC_URL + "/error.gif"}
						alt="error state"
						className="im26er"
					/>
				)}
			</div>
		</div>
	);
}

type PropsType = {
	children?: React.ReactNode;
};

export default Images;
