import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/orderActions";
import PropTypes from "prop-types";
import OrderList from "./OrderList";
import "./orders.scss";
import loadingImg from "../assets/loading.gif";
import networkImg from "../assets/no-connection.png";

const Orders = (props) => {
  let { getOrders } = props;
  useEffect(() => {
    getOrders();
  }, [getOrders]);
  const isDataLoaded = props.pageData && props.pageData.length > 0;
  let { errorMessage } = props;
  return (
    <div className="orders-wrap" data-testid="orders-wrap">
      {isDataLoaded && (
        <h5 className="order-header">
          {props && props.currentCategory} Orders
        </h5>
      )}

      <div className={isDataLoaded ? "orders" : "no-orders"}>
        {errorMessage === "Network Error" ? (
          <div className="text-center network-error">
            <img src={networkImg} alt="Loading animation" height="150" />
            <p>Unable to connect to the Internet</p>
            <button
              className="btn-network__error pointer"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        ) : !props.loading ? (
          isDataLoaded ? (
            props.pageData.map((order) => {
              return <OrderList key={order.id} orders={order} />;
            })
          ) : (
            <p className="text-center">No Data Available!</p>
          )
        ) : (
          <div className="text-center">
            <img
              src={loadingImg}
              className="load_icon"
              alt="Loading animation"
            />
          </div>
        )}
      </div>
    </div>
  );
};

Orders.propTypes = {
  getOrders: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { pageData, loading, currentCategory, errorMessage } = state.orders;
  return {
    pageData,
    loading,
    currentCategory,
    errorMessage,
  };
};

export default connect(mapStateToProps, actions)(Orders);
