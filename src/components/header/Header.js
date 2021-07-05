import * as actions from "../../store/actions/orderActions";
import "../../components/layouts/layout.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./header.scss";

const Header = (props) => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state);

  const handleSearch = ({ target }) => {
    dispatch(actions.handleSearchOrders(target.value.toLowerCase()));
  };
  const sortDate = ({ target }) => {
    dispatch(actions.handleSortDate(target.value));
  };

  return (
    <header className="header" data-testid="header">
      <form action="">
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
            <span className="sort-items sort-title">Sort By: </span>

            <div className="select-wrap sort-items">
              <label htmlFor="sortDate" className="sort-label">
                Date
              </label>
              <select
                className="select-item"
                aria-label="select"
                onChange={sortDate}
                data-testid="sort-date"
              >
                <option value="Earliest">Earliest</option>
                <option value="Latest">Latest</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </header>
  );
};

export default Header;
