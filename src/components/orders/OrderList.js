import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const OrderList = ({ orders }) => {
  const { id, name, description, workerId, deadline } = orders;
  return (
    <div className="order" key={id}>
      <div className="card order-card">
        <div className="order-details">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{new Date(deadline).toLocaleString()}</p>
        </div>
        <div className="use-order">
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              window.open(workerId);
            }}
          >
            Use Order
          </Link>
        </div>
      </div>
    </div>
  );
};

OrderList.propTypes = {
  orders: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    workerId: PropTypes.number.isRequired,
    deadline: PropTypes.number.isRequired,
  }),
};

export default OrderList;
