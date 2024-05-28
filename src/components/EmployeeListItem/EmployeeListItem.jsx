import "./EmployeeListItem.css";


function EmployeeListItem(props) {


  return (
    <div className="employeeItem">
        <h3>{props.obj.name}</h3>
        <h5>{props.obj.title}</h5>

    </div>
    
     
    
  );
}

export default EmployeeListItem;