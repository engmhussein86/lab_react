import "./EmployeeList.css";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import reactImg from '../../assets/react.svg';

const employees=[
    {name:'employee 1', title: 'title1', img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Personal_photo.png'},
    {name:'employee 2', title: 'title2', img: 'https://sb.kaleidousercontent.com/67418/1920x1282/9d56e09251/christina-wocintechchat-com-50tkcap8m3a-unsplash.jpg'},
    {name:'employee 3', title: 'title3', img: 'https://sb.kaleidousercontent.com/67418/1920x1282/9d56e09251/christina-wocintechchat-com-50tkcap8m3a-unsplash.jpg'},
    {name:'employee 4', title: 'title4', img: 'https://www.befunky.com/images/wp/wp-2021-01-Blog-Post-Header-1.jpg?auto=avif,webp&format=jpg&width=1150&crop=16:9'},
    {name:'employee 5', title: 'title5', img: 'https://www.befunky.com/images/wp/wp-2021-01-Blog-Post-Header-1.jpg?auto=avif,webp&format=jpg&width=1150&crop=16:9'}
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