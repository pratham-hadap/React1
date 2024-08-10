// import logo from './logo.svg';
import './App.css';
import Item from './components/Items';
import ItemDate from './components/ItemDate';
import Card from './components/Card'

function App() {

  const response = [
    {
      itemName: "Nirma",
      itemDate: "1",
      itemMonth: "January",
      itemYear: "2001"
    },
    {
      itemName: "surfExcel",
      itemDate: "2",
      itemMonth: "February",
      itemYear: "2002"
    },
    {
      itemName: "555",
      itemDate: "3",
      itemMonth: "March",
      itemYear: "2003"
    }
  ]

  return (
    <Card>
      <div className="App">
    <div className='Sdiv'>
     <div className='Name'>
     <Item name={response[0].itemName}>hello pratham</Item>
     <Item name={response[1].itemName}></Item>
     <Item name={response[2].itemName}></Item>
     </div>
     <div className='Data'>
     <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} ></ItemDate>
     <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear} ></ItemDate>
     <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear} ></ItemDate>
     </div>
     </div>
    </div>
    </Card>
  
  );
}

export default App;
