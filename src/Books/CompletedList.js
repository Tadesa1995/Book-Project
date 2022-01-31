import React from 'react';
import { Button, Card } from "react-bootstrap";
const CompletedList=({completedList,booksData})=> {
  const allCompletedList=completedList.map((book=>{
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
          <Button variant="primary" onClick={()=>{booksData(book)}}>details</Button>
        </Card.Body>
      </Card>
    </div>
  )

  }))
  return allCompletedList
}

export default CompletedList;
