import React from "react";
import * as actions from "../../store/actions/orderActions";
import "../../components/layouts/layout.css";
import { useDispatch } from "react-redux";
import "../assets/css/switch.css";

const Switch = () => {
  const dispatch = useDispatch();

  const handleChecked = ({ target }) => {
    if (target.checked) {
      dispatch(actions.handleSortDate("Latest"));
    } else {
      dispatch(actions.handleSortDate("Earliest"));
    }
  };
  return (
    <div className="container switch-wrap">
      <span className="font-12 title"> Earliest First</span>
      <label className="switch">
        <input type="checkbox" onChange={handleChecked} />
        <div></div>
      </label>
      <span className="font-12 title"> Latest First</span>
    </div>
  );
};

export default Switch;
