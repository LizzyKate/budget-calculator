import './App.css';
import { Alert } from './component/Alert';
import { ExpenseForm } from './component/ExpenseForm';
import { ExpenseList } from './component/ExpenseList';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const initialExpenses = [
  {
    id: uuidv4(),
    charge: "rent",
    amount: 1600
  },
  {
    id: uuidv4(),
    charge: 'Car payment',
    amount: 2000
  },
  {
    id: uuidv4(),
    charge: 'Credit card bill',
    amount: 1200
  }

]

function App() {
  const [expense, setExpense] = useState(initialExpenses)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({show:false})
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)
  const handleCharge = (e) => {
    setCharge(e.target.value)
  }
  const handleAmount = (e) => {
    setAmount(e.target.value)
  }
  const handleAlert = ({type, text}) => {
    setAlert({show:true, type, text})
    setTimeout(() => {
      setAlert({show: false})
    }, 3000)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(charge !== '' && amount !== ''){
      if(edit){
        let editing = expense.map(e => e.id === id ? {...e, charge, amount} : e)
        setExpense(editing)
        setEdit(false)
        handleAlert({type:'success', text:'item Edited'})
      }else{
        const singleExpense = {
          id:uuidv4(),
          charge,
          amount
        }
        setExpense([...expense, singleExpense])
        handleAlert({type:'success', text:'item added'})
      }
      setCharge('')
      setAmount('')
    } else {
     handleAlert({type:'danger', text:'Please enter charge and amount'})
    }
  }
  const clearItems = () => {
   setExpense([])
   handleAlert({type:'danger', text:" All items deleted"})
  }
  const handleDelete = (id) => {
    let tempExpenses = expense.filter((e) => {
      return e.id !== id
    })
    setExpense(tempExpenses)
    handleAlert({type:'danger', text:"Item deleted"})
  }
  const handleEdit = (id) => {
   let editExpense = expense.find(e => e.id === id)
   let { charge, amount } = editExpense
   setCharge(charge)
   setAmount(amount)
   setEdit(true)
   setId(id)
  }
  return (
    <>
    {
      alert.show && <Alert type={alert.type} text={alert.text}/>
    }
      <h1>budget calculator</h1>
      <main className='App'>
        <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} edit={edit}/>
        <ExpenseList expense={expense} clearItems={clearItems} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </main>
      <h1>total spending:
        <span>
          ${
            expense.reduce((acc, cur) => {
              return acc += parseInt(cur.amount)
            }, 0)
          }
        </span>
      </h1>
    </>
  );
}

export default App;
