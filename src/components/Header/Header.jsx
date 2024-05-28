import "./Header.css";


function Header(props) {

    console.log(props.data.title);

  return (
    
        <h1>{props.data.title}</h1>
    
  );
}

export default Header;