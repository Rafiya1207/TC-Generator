import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import '../../App.css';

const MaterialButton = ({ path, label, type = 'button', className, onClick }) => {
	const button = <Button type={type} variant="contained" color="primary" onClick={onClick}>
		{label}
	</Button>
	return (
		<div className={className}>
			{
				type !== 'submit' ?
					<Link to={path}>
						{button}
					</Link> :
					button
			}
		</div>
	);
};

export default MaterialButton;