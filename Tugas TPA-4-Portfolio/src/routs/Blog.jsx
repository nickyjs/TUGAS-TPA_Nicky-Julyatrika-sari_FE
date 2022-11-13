import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


function Blog() {
  return (
    <section>
      <div>
        <h2>Blog & Article</h2>
      </div>

      <div>
        <Row>
          <Col>
            <Card Card-blog>
              <Card.Body className="card-body-porto">
                <Card.Title>React JS</Card.Title>
                <Card.Text className="card-porto">
                  <p>React JS adalah library JavaScript yang digunakan untuk membangun UI website / aplikasi web. 
                    Ada banyak platform lain yang bisa melakukan fungsi ini, namun ReactJS cukup unggul dibanding yang lainnya, 
                    terbukti dari sebagian besar developer yang memilih menggunakan React JS.</p>
                  <a href="https://reactjs.org/docs/getting-started.html">Lihat disini</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card Card-blog>
              <Card.Body className="card-body-porto">
                <Card.Title>React Bootstrap</Card.Title>
                <Card.Text className="card-porto">
                  <p>React Bootstrap adalah framework CSS Bootstrap yang dibagun ulang setiap componentnya dari awal, 
                    sehingga tidak memerlukan lagi jQuery di dalamnya. 
                    Dan mampu digunakan untuk membangun sebuah user interface dengan ekosistem yang besar.</p>
                  <a href="https://react-bootstrap.github.io/getting-started/introduction">Lihat disini</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card Card-blog>
            <Card.Body className="card-body-porto">
              <Card.Title>Node.js</Card.Title>
              <Card.Text className="card-porto">
                <p>Node.js adalah platform perangkat lunak yang dirancang oleh Ryan Dahl. 
                  Node.js adalah runtime untuk lingkungan JavaScript di luar peramban web yang dibangun di atas mesin JavaScript V8. 
                  Node.js dapat dijalankan pada Windows, Mac OS X, dan Linux.</p>
                <a href="https://nodejs.org/en/docs/">Lihat disini</a>
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card Card-blog>
              <Card.Body className="card-body-porto">
                <Card.Title>Visual Studio Code</Card.Title>
                <Card.Text className="card-porto">
                  <p>Visual Studio Code adalah perangkat lunak penyunting kode-sumber buatan Microsoft untuk Linux, macOS, dan Windows. 
                    Visual Studio Code menyediakan fitur seperti penyorotan sintaksis, penyelesaian kode, kutipan kode, merefaktor kode, 
                    pengawakutuan, dan Git.</p>
                  <a href="https://code.visualstudio.com/docs">Lihat disini</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </div>
    </section>
  );
}

export default Blog