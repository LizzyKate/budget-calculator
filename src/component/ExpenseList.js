import React from 'react'
import { ExpenseItem } from './ExpenseItem'
import { MdDelete } from "react-icons/md";
export const ExpenseList = ({ expense, clearItems, handleDelete, handleEdit }) => {
    return (
        <>
            <ul className='list'>
                {
                    expense.map((e) => {
                        return <ExpenseItem key={e.id} expense={e} handleDelete={handleDelete} handleEdit={handleEdit} />
                    })
                }
            </ul>
            {
                expense.length > 0 && <button className="btn" onClick={clearItems}>clear expenses
                    <MdDelete className='btn-icon' />
                </button>
            }
        </>
    )
}
