import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
const students = [
  { id: 1, name: "John Doe", result: "Passed", class_name: "10A", marks: 85 },
  { id: 2, name: "Jane Smith", result: "Failed", class_name: "10B", marks: 40 },
  { id: 3, name: "Alice Johnson", result: "Passed", class_name: "9C", marks: 78 },
  { id: 4, name: "Bob Brown", result: "Passed", class_name: "10A", marks: 92 },
  { id: 5, name: "Charlie Davis", result: "Failed", class_name: "8D", marks: 35 },
  { id: 6, name: "Emma Wilson", result: "Passed", class_name: "9B", marks: 88 },
  { id: 7, name: "Michael Scott", result: "Failed", class_name: "10C", marks: 45 },
  { id: 8, name: "Nancy White", result: "Passed", class_name: "8E", marks: 75 },
  { id: 9, name: "Oliver Thomas", result: "Passed", class_name: "10A", marks: 81 },
  { id: 10, name: "Sophia Lee", result: "Failed", class_name: "9C", marks: 50 }
];

const Chart = () => {
  return (
    <div className='flex justify-center mt-10'>
      <LineChart width={600} height={300} data={students}>
        <Line type="monotone" dataKey="marks" stroke="#8884d8"></Line>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Line type='monotone' dataKey='id' stroke="#8884d8"></Line>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Chart;