import { Table } from '@organisms';
import './App.scss';

const testData = [
  {
    item: 'Price',
    maximum: '$100',
    minimum: '$50',
    average: '$300',
  },
  {
    item: 'volume',
    maximum: '1000',
    minimum: '500',
    average: '700',
  },
];

function App() {
  return (
    <div className="app">
      <Table data={testData} />
    </div>
  );
}

export default App;
