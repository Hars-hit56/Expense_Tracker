import React, { useEffect, useState } from "react";
import './style.css'
import CommonButton from "../../common/button";

const TotalBox = ({ data }) => {
    // const[columns,setColumns]=useState([])
    // const[total,setTotal]=useState()

    // useEffect(() =>{
    //     if (data.length) setColumns(Object.keys(data[0]))
    // }, [data])
    const categoryTotal = {}
    let total = 0

    return (
    <>{ data.length?
        <div className="totalcontainer">
            <h1 className="heading">Analytic</h1>
            <div className="totalsubcontainer">
                <div className="categorytotal">
                    {
                        data.map((item) => {
                            const { category, amount } = item
                            if (category in categoryTotal) {
                                categoryTotal[category] += amount
                            }
                            else {
                                categoryTotal[category] = amount
                            }

                        })
                    }
                    {
                        Object.entries(categoryTotal).map(([category, amount]) => {
                            return <div className="categorytotalDetails"><p>{category}</p>
                                <span>Rs {amount}</span>
                            </div>

                        })
                    }
                </div>
            </div>

            <div className="overalltotal">
                <p>Total</p>
                {
                    data.map((value) => {
                        const { amount } = value
                        total += amount
                    })
                }
                <span>Rs {total}</span>
            </div>
        </div>
        :null}
    </>
    )
}




export default TotalBox;