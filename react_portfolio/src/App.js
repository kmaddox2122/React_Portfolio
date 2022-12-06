import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Header from './components/Header';
import PageContent from './components/PageContent';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [pages] = useState( [
  {name: "about me"},
  {name: "portfolio"},
  {name: "contact"},
  {name: "resume"}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  
  return (
    <div>
      <Header>
        <Nav
          pages= {pages}
          setCurrentPage= {setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <PageContent currentPage={currentPage}></PageContent> 
      </main>
      <Footer />
    </div>
  );
}

export default App;





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
