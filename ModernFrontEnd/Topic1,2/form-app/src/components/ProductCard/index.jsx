import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ title, desc, photo, btnTitle }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="outline-danger" size="lg">
          {btnTitle}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
