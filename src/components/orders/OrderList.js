import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

const OrderList = ({ orders }) => {
  const [workerDetails, setWorkerDetails] = useState({})
  let url = `https://api.hatchways.io/assessment/workers`
  const { id, name, description, workerId, deadline } = orders;

  const fetchWorker = useCallback(() => { 
    fetch(`${url}/${workerId}`).then(res => res.json()).then(data=> setWorkerDetails(data.worker))
  }, [url]);
  useEffect(() => {
    fetchWorker()
  }, [fetchWorker])
  return (
    <div className="order" key={id}>
      <div className="card order-card">
        <div className="order-details">
          <div className="top">
            <div className="photo-wrap">
              <img src={workerDetails && workerDetails.image} alt="order-img" />
            </div>
          <h3>{workerDetails && workerDetails.name}</h3>
          <p className="email">{workerDetails && workerDetails.email}</p>
          <p>Company: <i><b>{workerDetails && workerDetails.companyName}</b></i> </p>
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
