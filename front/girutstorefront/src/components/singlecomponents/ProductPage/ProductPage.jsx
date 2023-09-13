import { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { increase, decrease } from "../../../functions/changeCountervalue";
import Stars from "../Stars.jsx";
import "./ProductPage.scss";
import GlobalContext from "../../../context/GlobalContext";
import axios from "axios";

function Example({ data }) {
  const { modal, setModal } = useContext(GlobalContext);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setModal(false);
  };

  const [counter, setCounter] = useState(1);
  const { name, company, img, rating, price } = data;

  //console.log(data._id);

  const handleAddToCart = async () => {
    try {
      const url = `http://localhost:5000/api/cart`;
      const body = { name: name, price: price, quantity: counter };
      const response = await axios.post(url, body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  useEffect(() => {
    if (!show) {
      setShow(true);
    }
  }, [modal]);

  return (
    <>
      <Modal className="productPage" show={show} onHide={handleClose}>
        <Modal.Body className="__stats">
          <div className="productPage">
            <div className="productPage__img">
              <img src={img} alt={company} />
            </div>
            <div className="productPage__stats">
              <h5>{name}</h5>

              <div className="dualStat">
                <p className="rating">
                  <Stars value={rating} />
                  {rating}
                </p>

                <p className="company">{company}</p>
              </div>

              <h6 className="singleStat price">${price}</h6>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="bottom">
          <div className="counters">
            <button
              className="button counter"
              onClick={() => decrease(setCounter)}
            >
              -
            </button>

            <div className="number">{counter}</div>

            <button
              className="button counter"
              onClick={() => increase(setCounter)}
            >
              +
            </button>
          </div>

          <button onClick={() => handleAddToCart()} className="button">
            Add to cart
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
