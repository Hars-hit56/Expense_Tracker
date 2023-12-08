import React, { useEffect, useState } from "react";
import './style.css'


const COLUMNS_ARRAY = ['category', 'name', 'amount']

const ExpenseListComponent = ({ data ,sortFilterValue}) => {
    // const [ columns,setColumns]=useState([])
console.log(sortFilterValue,data);
    // useEffect(() =>{
    //     if (data.length) setColumns(Object.keys(data[0]))
    // }, [data])

    return (
        <>

            <div className="expenseContainer">
                <div className="expensesubcontainer">


                    {
                        COLUMNS_ARRAY.map((key) => {
                            return (
                                <div className="expenseColoumdeatils">
                                    <h2>{key}</h2>
                                   
                                    {  data.length? (sortFilterValue?sortFilterValue:data).map((value) => <p className="values">{value[key]}</p>):<p>No Data</p>
                                    }
                                </div>
                            )
                        })
                    }

                  
                </div>
                 
            </div>


        </>
    )
}

export default ExpenseListComponent;