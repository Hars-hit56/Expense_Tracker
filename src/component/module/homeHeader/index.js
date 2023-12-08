import React from "react";
import './style.css'
// import CommonButton from "../../common/button";
import Modal from "../../modal/addExpenseModal";
import { colors } from "../../../utils/colors";
import CommonButton from "../../common/button";

const HomeHeader = ({ buttonTitle , onClickAddExpense}) => {
    return (
        <div className="nav" >
            <div className="logo" style={{fontSize : '26px', fontWeight : "500", color : colors.logo}} >Expense Tracker</div>
        
         <CommonButton title={'Add Expenese'} className={'buttonstyle'} padding={'.5rem 2rem'} onClickvalue={onClickAddExpense} /></div>    

       
    )
}

export default HomeHeader