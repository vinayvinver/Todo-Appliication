import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todos = ({ todoss, markComplete }) => {
  return (
    <ListGroup className="mt-5 items">
      {todoss.map(todo => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span className="float-right" onClick={() => markComplete(todo.id)}>
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
