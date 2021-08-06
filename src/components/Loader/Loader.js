import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function ImagePendingView() {
  return (
    <Loader
      type="Circles"
      color="#f50057"
      height={80}
      width={80}
      style={{
        position: "absolute",
        display: "block",
        left: "50%",
        bottom: "30%",
        transform: "translate (-50%, -50%)",
        zIndex: 1000,
      }}
    />
  );
}

Loader.propTypes = {
  marginLeft: PropTypes.number,
};
