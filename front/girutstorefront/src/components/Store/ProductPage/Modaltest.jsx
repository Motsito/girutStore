import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { increase, decrease } from "../../../functions/changeCountervalue";

function Example({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const firstProduct = data[0];
  const [counter, setCounter] = useState(1);
  const { name, company, img, rating, price } = firstProduct;

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="productPage">
            <img className="productPage__img" src={img} alt={company} />

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

        <Modal.Footer>
          <div className="bottom">
            <div className="counter">
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

            <button className="button">Add to cart</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
