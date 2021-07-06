import * as actions from "../../store/actions/orderActions";
import "../../components/layouts/layout.css";
import { useDispatch } from "react-redux";


import "./header.scss";
import Switch from "../layouts/switch";

const Header = (props) => {
  const dispatch = useDispatch();

  const handleSearch = ({ target }) => {
    dispatch(actions.handleSearchOrders(target.value.toLowerCase()));
  };
  return (
    <header className="header" data-testid="header">
      <form>
        <div className="header-wrap">
          <div className="search-input">
            <input
              type="text"
              id="name-input"
              className="form-tag search-textbox"
              data-testid="search-textfield"
              aria-label="search-textfield"
              placeholder="Search Orders"
              value={props.searchValue}
              onChange={handleSearch}
            />
            <span className="search-icon">
              {" "}
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="sort-row">
            <div className="select-wrap sort-items">
              <Switch />
            </div>
          </div>
        </div>
      </form>
    </header>
  );
};

export default Header;
