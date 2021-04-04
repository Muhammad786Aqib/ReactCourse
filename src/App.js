import {Navbar, NavbarBrand  } from "reactstrap";
import  Menu from "./components/MenuComponent";


function App() {
  return (
    <div>
      <Navbar dark color='primary navbar-expand-sm'>
        <div className='container'>
          <NavbarBrand href='/'> Aqib is here </NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
