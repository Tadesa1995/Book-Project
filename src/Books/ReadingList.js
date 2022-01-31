import React from 'react';
import { Button, Card } from "react-bootstrap";
const ReadingList=({readingList,addToCompletedList})=> {
  const allBooks = readingList.map((book) => {
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
            <Button variant="primary"onClick={() =>{addToCompletedList(book)}}>Add To Completed List</Button>

          </Card.Body>
        </Card>
      </div>
    );
  });
  return (allBooks)
  
  }
  export default ReadingList
 