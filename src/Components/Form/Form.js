import "./Form.css";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const Form = () => {
  const { setOpenForm, sendOrder } = useContext(CartContext);
  return (
    <div className="Form-Container">
      <div className="Form-Content">
        <div className="Form-Content-B1">
          <p className="Form-Content-Txt1">User Form</p>
          <svg
            onClick={() => setOpenForm(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="Form-Content-Btn1"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className="Form-Content-B2">
          <div className="Form-Content-B2-B1">
            <label>Name </label>
            <input className="input"></input>
          </div>
          <div className="Form-Content-B2-B1">
            <label>Phone </label>
            <input className="input"></input>
          </div>
          <div className="Form-Content-B2-B1">
            <label>Email </label>
            <input className="input"></input>
          </div>
        </div>
        <button onClick={() => sendOrder()} className="Form-Content-Btn2">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Form;
