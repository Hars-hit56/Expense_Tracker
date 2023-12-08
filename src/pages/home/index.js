import React, { useEffect, useState } from "react";
import './style.css'
import HomeHeader from "../../component/module/homeHeader";
import ExpenseListComponent from "../../component/module/expenseListComponent";
import TotalBox from "../../component/module/totalbox";
// import Modal from "../../component/modal/addExpenseModal";
import AddExpenseModal from "../../component/modal/addExpenseModal";
import CommonButton from "../../component/common/button";

const Home = () => {
    const [expenseListArrayItems, setExpenseListArrayItems] = useState([])
    const [isAddExpenseModalVisible, setIsAddExpenseModalVisible] = useState(false)

    const [isSortBtnVisible, setIsSortBtnVisible] = useState(false)
    const [sortFilterValue, setSortFilterValue] = useState()

    const [sortValueHover, setSortValueHover] = useState('Sort By Category')

    useEffect(() => {
        let item = localStorage.getItem("expenseListArray")
        let parseItem = JSON.parse(item)
        let currentMonth = new Date().getMonth()
        if (item && parseItem[0]?.month == currentMonth) {
            setExpenseListArrayItems(JSON.parse(item))
        } else {
            localStorage.removeItem('expenseListArray')
        }
    }, [])

    // console.log(expenseListArrayItems)
    function onClickAddExpense() {

        setIsAddExpenseModalVisible(true)
        document.body.style.overflowY = "hidden"

        onkeydown = (event) => {
            if (event.keyCode == 27) {
                onCloseAddExpenseModal()
            }
        }

    }

    function onCloseAddExpenseModal() {

        document.body.style.overflowY = "scroll"
        setIsAddExpenseModalVisible(false)
    }

    function onAddExpense(data) {
        setExpenseListArrayItems([...expenseListArrayItems, data])
        localStorage.setItem("expenseListArray", JSON.stringify([...expenseListArrayItems, data]));
        onCloseAddExpenseModal()
    }


    function onSelectSortBy(categoryValue) {
        console.log(expenseListArrayItems);
        const filterValue = expenseListArrayItems.filter((data) => {
            return data.category == categoryValue
        })
        console.log(filterValue);
        // setExpenseListArrayItems(filterValue)
        setSortFilterValue(filterValue)
        setIsSortBtnVisible(false)

        // const sortClickHover=categoryValue

        // if(sortClickHover){
        setSortValueHover(categoryValue)

        // }
    }

    return (
        <>
            <HomeHeader onClickAddExpense={onClickAddExpense} />
            <div className="container">

            <div className="buttonShow">
                    <CommonButton
                        title={sortValueHover}
                        className={'sortByBtnMobile'}
                        padding={'.5rem 2rem'} isSecodary
                        margin={"0 0 1rem 0"}
                        fontSize={'1rem'}
                        rightComponent={<img
                            className={`downArrowIcon ${isSortBtnVisible && 'downArrowIconshow'}`}
                            src={require("../../image/icons8-down-arrow-50.png")} />}
                        onClickvalue={() => setIsSortBtnVisible(!isSortBtnVisible)} />
                         {isSortBtnVisible && <ul className="sortByBtnShowMobile">
                            <li onClick={() => onSelectSortBy("Shopping")} style={{ color: sortValueHover === "Shopping" && '#fff', background: sortValueHover === "Shopping" && '#e2dede' }}>Shopping</li>
                            <li onClick={() => onSelectSortBy("Grocery")} style={{ color: sortValueHover === "Grocery" && '#fff', background: sortValueHover === "Grocery" && '#e2dede' }}>Grocery</li>
                            <li onClick={() => onSelectSortBy("Entertainment")} style={{ color: sortValueHover === "Entertainment" && '#fff', background: sortValueHover === "Entertainment" && '#e2dede' }}>Entertainment</li>
                            <li onClick={() => onSelectSortBy("Misllineous")} style={{ color: sortValueHover === "Misllineous" && '#fff', background: sortValueHover === "Misllineous" && '#e2dede' }}>Misllineous</li>
                        </ul>}
                </div> 

                <ExpenseListComponent data={expenseListArrayItems} sortFilterValue={sortFilterValue} />

                <div className="subcontainer">
                    <div className=".flexColumnCenter">

                        <CommonButton
                            title={'Sort By Category'}
                            className={'sortByBtn'}
                            padding={'.5rem 3rem'} isSecodary
                            margin={"0 0 1rem 0"}
                            rightComponent={<img
                                className={`downArrowIcon ${isSortBtnVisible && 'downArrowIconshow'}`}
                                src={require("../../image/icons8-down-arrow-50.png")} />}
                            onClickvalue={() => setIsSortBtnVisible(!isSortBtnVisible)} />

                        {isSortBtnVisible && <ul className="sortByBtnShow">
                            <li onClick={() => onSelectSortBy("Shopping")} style={{ color: sortValueHover === "Shopping" && '#fff', background: sortValueHover === "Shopping" && '#e2dede' }}>Shopping</li>
                            <li onClick={() => onSelectSortBy("Grocery")} style={{ color: sortValueHover === "Grocery" && '#fff', background: sortValueHover === "Grocery" && '#e2dede' }}>Grocery</li>
                            <li onClick={() => onSelectSortBy("Entertainment")} style={{ color: sortValueHover === "Entertainment" && '#fff', background: sortValueHover === "Entertainment" && '#e2dede' }}>Entertainment</li>
                            <li onClick={() => onSelectSortBy("Misllineous")} style={{ color: sortValueHover === "Misllineous" && '#fff', background: sortValueHover === "Misllineous" && '#e2dede' }}>Misllineous</li>
                        </ul>}
                    </div>

                    <TotalBox data={expenseListArrayItems} />

                </div>
            </div>
            <AddExpenseModal onClose={onCloseAddExpenseModal} onSubmit={onAddExpense} visible={isAddExpenseModalVisible} />

        </>
    )
}

export default Home 