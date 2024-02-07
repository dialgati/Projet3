import React from "react"
import { Row, Col, Card, CardText, CardTitle } from "react-bootstrap";
import { HiCurrencyDollar } from "react-icons/hi";
import { BsFillBasket3Fill, BsWindow } from "react-icons/bs";
import { SlBag } from "react-icons/sl";

function Dashboard() {
    const data = [
      {
        id: 1,
        icon: <BsWindow className="fs-2" />,
        title: "Yearly Earning",
        text: "$21K",
      },
      {
        id: 2,
        title: "Refund Given",
        text: "$1K",
        icon: <HiCurrencyDollar className="fs-2" />,
      },
      {
        id: 3,
        icon: <BsFillBasket3Fill className="fs-2"/>,
        title: "Yearly Project",
        text: "456",
      },
      {
        id: 4,
        icon: <SlBag className="fs-2"/>,
        title: "Weekly Sales",
        text: "210",
      },
    ];
  return (
    <div className="justify-content-center mt-5">
      <Row xs={0} md={4} className="g-4 ">
        {data.map((item) => (
          <Col key={item.id}>
            <Card className=" shadow-sm border-0">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    {item.icon && (
                      <p className="text-light text-center p-3 rounded-5 fs-5 bg-primary">
                        {item.icon}
                      </p>
                    )}
                    <div className="ms-3">
                      <CardText className=" fw-bold fs-4 text-black ">
                        {item.text}
                      </CardText>
                      <CardTitle className="text-secondary fw-lighter fs-5">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Dashboard