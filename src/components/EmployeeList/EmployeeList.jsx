import "./EmployeeList.css";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";

const employees=[
    {name:'employee 1', title: 'title1'},
    {name:'employee 2', title: 'title2'},
    {name:'employee 3', title: 'title3'},
    {name:'employee 4', title: 'title4'},
    {name:'employee 5', title: 'title5'}
]
;


function EmployeeList() {


  return (
    <div className="container">
    
      <div className="EmployeeList">
        {employees.map((employee,index)=>(<EmployeeListItem key={index} obj={employee}/>))}
        
      </div>
      </div>
    
  );
}

export default EmployeeList;