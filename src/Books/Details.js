import React from 'react';
import { Card } from "react-bootstrap";
const details=({details})=> {
  const bookDetails=details.map((book=>{
    const{name,id,author,descriptions,image}=book;
    return(
      <div key={id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image}/>
        <br></br>
        <Card.Body>
          <Card.Title>name:{name}</Card.Title>
          <Card.Title>author:{author}</Card.Title>
          <Card.Title>descriptions:</Card.Title>
          <Card.Text>{descriptions}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )

  }))
  return bookDetails
}

export default details;

