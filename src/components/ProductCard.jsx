import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, description, image }) => {
  return (
    <Card style={{ width: '18rem' }} key={id}>
    <Card.Img variant="top" src={image} alt={title} style={{ height: '200px', objectFit: 'contain',paddingTop:'5px' }} />
    <Card.Body>
      <Card.Title  style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</Card.Title>
      <Card.Text  style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>
      {description}
      </Card.Text>
      <Link to={`/products/${id}`}>
          <Button variant="primary">Order Now</Button>
        </Link>
    </Card.Body>
  </Card>
  )
}

export default ProductCard