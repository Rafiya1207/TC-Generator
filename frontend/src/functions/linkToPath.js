const linkToPath = (event, path, navigate) => {
	event.preventDefault();
	navigate(path);
};

export default linkToPath