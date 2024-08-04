import './App.css';

const App = () => {
  const expenses = [
    { item: 'Car', withinbudget: true },
    { item: 'PC', withinbudget: false },
    { item: 'Refrigerator', withinbudget: false },
  ];

  return (
    <>
      <h1>List of Expenses</h1>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className={expense.withinbudget ? 'within' : 'without'}>
            {`${expense.item} ${expense.withinbudget ? 'is within budget!' : 'is above budget!'}`}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;