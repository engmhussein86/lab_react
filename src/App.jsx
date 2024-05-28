import './App.css'
import Header from './components/Header/Header.jsx'
import Search from './components/Search/Search.jsx'
import EmployeeList from './components/EmployeeList/EmployeeList.jsx'

function App() {

  const data = {
    title: 'Employee Directory'
  }
  
  return (
    <>
    <Header data={data}/>
    <Search/>
    <EmployeeList/>
  
    </>
  )
}

export default App
