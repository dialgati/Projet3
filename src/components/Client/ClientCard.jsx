// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import React from "react";
// import img1 from "./images/img1.jpg";

// function ClientCard() {
//   return (
//     <Row xs={1} md={4} className="g-4 mt-3  ">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col key={idx}>
//           <Card>
//             <Card.Img variant="top" src={img1} />
//             <Card.Body>
//               <Card.Title>Card title</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//               <div className="text-start">
//                 <button type="button" className="btn btn-primary">
//                   Read More
//                 </button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default ClientCard;


import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

function ClientCard() {
  // Définition des données à l'intérieur du composant
  const data = [
    {
      image: img1,
      title: "This is simple blog",
      like: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    {
      image: img2,
      title: "Lets be simple blog",
      like: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    {
      image: img3,
      title: "Don't Lamp blog",
      like: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    {
      image: img4,
      title: "Simple is beautiful",
      like: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    // Ajoutez autant d'objets de données que nécessaire
  ];

  return (
    <Row xs={1} md={4} className="g-4 my-3">
      {data.map((item, idx) => (
        <Col key={idx}>
          <Card className="border-0 fs-5 shadow-md">
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.like}</Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <div className="text-start">
                <button type="button" className="btn btn-primary px-2 ">
                  Read More
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ClientCard;
