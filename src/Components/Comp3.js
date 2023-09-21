import React from "react";

function Comp3({ transaction, settransaction, setTrans }) {
  return (
    <div id="form" className="text-start">
      <h3>Add new transaction</h3>
      <hr />
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Text
        </label>
        <input
          onChange={(e) =>
            settransaction({ ...transaction, Name: e.target.value })
          }
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Text"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Amount(-ve or +ve Expense)
        </label>
        <input
          onChange={(e) =>
            settransaction({ ...transaction, Amount: e.target.value })
          }
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Amount"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Description
        </label>
        <textarea
          onChange={(e) =>
            settransaction({ ...transaction, Desc: e.target.value })
          }
          rows="3"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter description"
        />
      </div>
      <div style={{display:"flex",gap:"0.5rem",flexDirection:"column"}}>
        <button
          onClick={() => {setTrans("form-control");document.querySelector('#form').style.display = "none" }}
          className="add btn w-100 text-white"
          style={{ backgroundColor: "purple" }}
        >
          Add transaction
        </button>
        <button
          onClick={() =>{ document.querySelector('#form').style.display = "none" }}
          className="add btn w-100 text-white"
          style={{ backgroundColor: "crimson" }}
        >
          cancel transaction
        </button>
      </div>
    </div>
  );
}

export default Comp3;
