import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import '../App.css';

const MaterialButton = ({ path, label, className }) => {
  return (
    <div className={className}>
      <Link to={path}>
        <Button type="button" variant="contained" color="primary">
          {label}
        </Button>
      </Link>
    </div>
  );
};

export default MaterialButton;