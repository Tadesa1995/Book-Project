import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
 const BookList=({ addToReadingList })=> {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => {
        console.log(res);
        setBooks(res.data);
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  const allBooks = books.map((book) => {
    const { name, image, author, descriptions, id } = book;
    return (
      <div key={id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image}/>
          <br></br>
          <Card.Body>
            <Card.Title>name:{name}</Card.Title>
            <Card.Title>author:{author}</Card.Title>
            <Card.Title>descriptions:</Card.Title>
            <Card.Text>{descriptions}</Card.Text>
            <Button variant="primary"onClick={()=>{addToReadingList(book)}}>ADD TO READING LIST</Button>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return allBooks
}
export default BookList
