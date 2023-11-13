import './App.css'
// import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import ShoppingList from "./ShoppingList";
const data = [
  {id:1, item:"eggs", quantity:12, completed:false},
  {id:2,item:"milk", quantity:1, completed:true},
  {id:3,item:"chicken breasts", quantity:4, completed:false},
  {id:4,item:"carrots", quantity:6, completed:true},
]

function App() {
  
  return (
  <div>
    <ShoppingList items={data}/>
    {/* 동적 style */}
    {/* <Heading text="welcome!"/>
    <Heading color="magenta" text="welcome!"/>
    <Heading color="teal" text="welcome!"/> */}
  
    {/* 조건문 */}
    {/* <DoubleDice/>
    <DoubleDice/>
    <DoubleDice/> */}

    {/* map */}
    {/* <ColorList colors={["red","pink", "purple","teal"]}/>
    <ColorList colors={["olive","orangered"]}/> */}

      {/* pros 초기화*/}
    {/* <Greeter person="Bill" from ="Hong"/>
    <Greeter from ="Hong"/>
    <Greeter person="Bill" />

    {/* 숫자 */}
    {/* <Die numSides = {20}/>
    <Die numSides = {6}/>
    <Die numSides = {10}/>  */}

    {/* 배열 */}
    {/* <ListPicker values = {[1,2,3]}/> */}

  </div>
  )

}

export default App
