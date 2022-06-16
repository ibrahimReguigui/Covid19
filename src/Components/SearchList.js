import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function SearchList({ match, data }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {console.log("match", match.params.nameSearch)}
      {console.log("data ", data)}

      {data.map((el) =>
        el.country
          .toLowerCase()
          .includes(match.params.nameSearch.toLowerCase().trim()) ? (
          <div>
            <Card
              style={{
                textAlign: "center",
                margin: "50px 50px",
                borderRadius: "10px",
              }}
            >
              <Card.Img
                style={{
                  width: "200px",
                  marginLeft: "5px",
                  marginRight: "5px",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
                variant="top"
                src={`${el.countryInfo.flag}`}
              />
              <Card.Body>
                <Card.Title>{el.country}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Card.Body>
                  <Card.Link>
                    <button>
                      <Link to={`/${el.country}`}>Check</Link>
                    </button>
                  </Card.Link>
                </Card.Body>
              </ListGroup>
            </Card>
          </div>
        ) : null
      )}
    </div>
  );
}

export default SearchList;
