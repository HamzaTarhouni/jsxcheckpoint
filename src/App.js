import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './logo.svg'
import Product from './Product';
import Description from './Description'
import Price from './Price';
import Name from './Name';
import Image from './Image';

function App() {
  return (
    <>
     <Card style={{ width: '18rem' }}>
     <Image></Image>
      <Card.Body>
        <Card.Title><Name></Name> </Card.Title>
        <Card.Text>
        <Description></Description>
        </Card.Text>
        <Card.Title><Price></Price> </Card.Title>

      </Card.Body>
    </Card>
    <div ><h1 style={{ color: "red", fontSize: 60 }}>Hello Hamza</h1></div>
    </>
  );
}

export default App;
