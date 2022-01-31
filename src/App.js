import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import BooksList from "./Books/BooksList";
import CompletedList from "./Books/CompletedList";
import ReadingList from "./Books/ReadingList";
import Details from "./Books/Details";
function App() {
  const [readingList, setReadingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [booksDetails, setBooksDetails] = useState([]);
  const addToReadingList = (book) => {
    const reading = [...readingList];
    reading.push(book);
    setReadingList(reading);
  };
  
  const addToCompletedList = (book) => {
    const completed = [...completedList];
    completed.push(book);
    setCompletedList(completed);
  };

  const booksData = (book) => {
    const data = [...booksDetails];
    data.push(book);
    setBooksDetails(data);
  };

  return (
    <div style={{ margin: "10px" }}>
      <>
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">RONI BOOKS</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/ReadingList">
                  Reading List
                </Nav.Link>
                <Nav.Link as={Link} to="/CompletedList">
                  Completed List
                </Nav.Link>
    <Nav.Link as={Link} to="/Details"> 
             Details    
          </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
       
          <Switch>
            <Route exact path="/">
              <BooksList addToReadingList={addToReadingList} />
            </Route>
            <Route path="/ReadingList">
              <ReadingList
                readingList={readingList}
                addToCompletedList={addToCompletedList}
              />
            </Route>
            <Route path="/CompletedList">
              <CompletedList completedList={completedList} booksData={booksData} />
            </Route>
            <Route path="/Details">
              <Details details={booksDetails} />
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}
export default App;
