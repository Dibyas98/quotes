import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';

import Footer from './components/footer/Footer';
import { useState } from 'react';
import Home from './components/Home/Home';
import Quote from './components/Quote/Quote';

function App() {
  const [mode, setMode] = useState('dark');
  const [present, setPresent] = useState('Home');

  const toggle = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  const MenuSelected = (event) => {
    event.preventDefault();
    console.log(event.target.innerText);
    setPresent(event.target.innerText); // Convert to lowercase for consistency

    // Optionally, you can handle additional logic based on the selected menu item
    // For example, if you want to fetch data related to the selected menu item
    // fetchData(event.target.innerText.toLowerCase());
  };

  // Conditionally render the component based on the value of the `present` state
  const renderComponent = () => {
    switch (present) {
      case 'Home':
        return <Home mode={mode} />;
      case 'Quotas':
        return <Quote mode={mode} />;
      // case 'Restaurant':
      //   return <Restaurant mode={mode} />;
      // case 'Food':
      //   return <Food mode={mode} />;
      // case 'Contact':
      //   return <Contact mode={mode} />;
      default:
        return null; // Render nothing if present doesn't match any case
    }
  };

  return (
    <>
      <Nav mode={mode} toggle={toggle} menu={MenuSelected}></Nav>
      {/* {renderComponent()} */}
      <Quote mode = {mode}></Quote>
      <Footer mode={mode}></Footer>
    </>
  );
}

export default App;