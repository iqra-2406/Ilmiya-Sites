import React from 'react';
import { Accordion } from "react-bootstrap";
const Accordians = () => {
  return (
    <div>

<section className="questions">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>Frequently asked questions</h2>
            <p>
              Some questions about Ilmiya are asked frequently. We've answered
              the most <br /> frequent of those frequent questions below.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="accordians">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="question">
                        <strong>What is a design Ilmiya?</strong>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      A Learning Management System (LMS) is a software platform
                      designed to deliver, manage, and track educational content
                      and training programs. It serves as a centralized hub for
                      organizing learning materials, administering courses, and
                      assessing learners' progress.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="question">
                        <strong>How does an Ilmiya work?</strong>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      A Learning Management System (LMS) is a software platform
                      designed to deliver, manage, and track educational content
                      and training programs. It serves as a centralized hub for
                      organizing learning materials, administering courses, and
                      assessing learners' progress.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="question">
                        <strong>
                          What are the benefits of using an this platform?
                        </strong>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      A Learning Management System (LMS) is a software platform
                      designed to deliver, manage, and track educational content
                      and training programs. It serves as a centralized hub for
                      organizing learning materials, administering courses, and
                      assessing learners' progress.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="accordians">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="question">
                      <strong>What are the benefits of using an Ilmiya?</strong>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    A Learning Management System (LMS) is a software platform
                    designed to deliver, manage, and track educational content
                    and training programs. It serves as a centralized hub for
                    organizing learning materials, administering courses, and
                    assessing learners' progress.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="question">
                      <strong>How secure is my data on your server?</strong>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    A Learning Management System (LMS) is a software platform
                    designed to deliver, manage, and track educational content
                    and training programs. It serves as a centralized hub for
                    organizing learning materials, administering courses, and
                    assessing learners' progress.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Accordians;