import React from 'react'
import { ExpenseItem } from './ExpenseItem'
import { MdDelete } from "react-icons/md";
export const ExpenseList = ({ expense }) => {
    return (
        <>
            <ul className='list'>
                {
                    expense.map((e) => {
                        return <ExpenseItem key={e.id} expense={e} />
                    })
                }
            </ul>
            {
                expense.length > 0 && <button className="btn">clear expenses
                    <MdDelete className='btn-icon' />
                </button>
            }
        </>
    )
}
