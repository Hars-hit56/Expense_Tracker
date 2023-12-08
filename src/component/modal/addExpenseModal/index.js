import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import CommonButton from "../../common/button";
import Inputbox from "../../common/input";
import './style.css';

const AddExpenseModal = ({ visible, onClose, onSubmit }) => {


  const titleInputRef = useRef(null);
  const amountInputRef = useRef(null);
  // useEffect(() => {
  // document.body.style.overflowY = "hidden"
  // return () => {
  // document.body.style.overflowY = "scroll"
  // }
  // },)
  // const expenseListArray = JSON.parse(localStorage.getItem(" expenseListArray") || "[]")
  // console.log(expenseListArray)



  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")

  const [categoryError, setCategoryError] = useState("")
  const [nameError, setNameError] = useState("")
  const [amountError, setAmountError] = useState("")

  const submit = () => {
    let Regexname= /^[a-zA-Z].*[\s\.]*$/g;
    let hasError = false
    const currentMonth = new Date();

    if (category === "") { setCategoryError("Please Enter category"); hasError = true } else {
      setCategoryError("")
    }
    if (name === "") { setNameError("Please Enter Name"); hasError = true }
    else if(Regexname.test(name)==false){setNameError("Please Enter Name"); hasError = true}
    else { setName(""); setNameError("") }

    if (amount === "") { setAmountError("Please Enter Amount"); hasError = true } else { setAmount(""); setAmountError("") }

    if (hasError) return
    const expenseList = { category: category, name: name, amount: parseInt(amount), month: currentMonth.getMonth() }
    
    onSubmit(expenseList)
  }

  function handle(event,istrue) {
    // console.log("event",event.target.type)
    if (event.key === 'Enter') {
      amountInputRef.current.focus();
      if(istrue)submit()
    }
  }





  // return<>
  return (
    <>
      {visible ? ReactDOM.createPortal(
        <>
          <div className="Modal-wrapper" onClick={onClose} ></div>
          <div className="Modal-container" >

            <h3>Expense Category</h3>
            <select className="Category-Info" onChange={(e) => setCategory(e.target.value)} >
              <option value='' >Enter category</option>
              {/* Available option */}
              <option value='Shopping'>Shopping</option>
              <option value='Grocery'>Grocery</option>
              <option value='Entertainment'>Entertainment</option>
              <option value='Misllineous'>Misllineous</option>
            </select>
            {categoryError != "" &&
              <p className="error">{categoryError}</p>
            }

            <h3>Expense Name</h3>
            <Inputbox type={"text"} value={name} onChangeValue={(e) => setName(e.target.value)} placeholder={'Enter Expense Name'} error={nameError ? nameError : ""} inputRef={titleInputRef} onkeydown={handle} />
            <h3>Expense Amount</h3>
            
            <Inputbox type={"number"} onkeydown={(event,istrue) => handle(event,istrue=true)} value={amount} onChangeValue={(e) => setAmount(e.target.value)} placeholder={'Enter Expense Amount'} error={amountError ? amountError : ""} inputRef={amountInputRef} />


            <CommonButton title={'Submit'} className={'submitbutton'} padding={'.5rem'} onClickvalue={submit} margin={'1rem 0 0 0'}display={'inherit'} />

          </div>

        </>, document.querySelector('.PortalModal')
      ) : null
      }
    </>)
}




export default AddExpenseModal;