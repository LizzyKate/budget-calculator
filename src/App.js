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
  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className='App'>
        <ExpenseForm />
        <ExpenseList expense={expense} />
      </main>
      <h1>total spending:
        <span>
          ${
            expense.reduce((acc, cur) => {
              return acc += cur.amount
            }, 0)
          }
        </span>
      </h1>
    </>
  );
}

export default App;
