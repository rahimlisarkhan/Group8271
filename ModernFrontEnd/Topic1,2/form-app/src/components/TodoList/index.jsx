import React from "react";
import { ListGroup } from "react-bootstrap";

function TodoList({ list, onRemove }) {
  return (
    <ListGroup className="w-50 mx-auto">
      {list?.map((item, index) => (
        <ListGroup.Item
          role="button"
          key={item.id}
          onClick={() => onRemove(item.id)}
        >
          {index + 1}. {item.title} | {item.desc}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
