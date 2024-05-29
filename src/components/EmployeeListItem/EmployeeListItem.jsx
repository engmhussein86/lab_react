import "./EmployeeListItem.css";


function EmployeeListItem(props) {


  return (
    <div className="employeeItem">

        <img src={props.obj.img}/>

        <div>
        <h3>{props.obj.name}</h3>
        <h5>{props.obj.title}</h5>
        </div>

    </div>
    
     
    
  );
}

export default EmployeeListItem;