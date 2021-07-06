import PropTypes from "prop-types";

const OrderList = ({ orders }) => {
  console.log("ord", orders)
  const { id, name, description, workerId, deadline, worker,
    worker:{companyName, email, image } } = orders || {};
// let {id, name} = orders.worker
  return (
    <div className="order" key={id} data-testid="order_list">
      <div className="card order-card">
        <div className="order-details">
          <div className="top">
            <div className="photo-wrap">
              <img src={ image} alt="order-img" />
            </div>
            <h3>{worker && worker.name}</h3>
            <p className="email">{email}</p>
            <p>
              Company:{" "}
              <i>
                <b>{companyName}</b>
              </i>{" "}
            </p>
            <p></p>
          </div>

          <div className="bottom">
            <h4 className="worker__title">Worker Details</h4>
            <p className="order__desc">{description}</p>
            <div className="workerId-wrap">
              <div className="title">Worker Id</div>
              <div className="desc">{workerId}</div>
            </div>
            <div className="name-wrap">
              <div className="title">Name</div>
              <div className="desc">{name}</div>
            </div>

            <div className="workerId-wrap">
              <div className="title">Deadline</div>
              <div className="desc">{new Date(deadline).toLocaleString()}</div>
            </div>
          </div>
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
