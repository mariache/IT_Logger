import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { deleteLog } from "../../actions/logActions";

export const LogItem = ({
  deleteLog,
  log: { id, tech, attention, message, date },
}) => {
  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: "Log has been removed" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> last updated by{" "}
          <span className="black-text">{tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog })(LogItem);
