import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { BsMailbox } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
const ContactDetails = () => {
  return (
    <div className='contactBox'>
      <div>
        <h3>Contact</h3>
      </div>
      <div className='AccordionBody'>
        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <h6>For Email Related Queries</h6>
            </Accordion.Header>

            <Accordion.Body>
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:it.support@jaipur.manipal.edu'>
                  it.support@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <h6>For Library Dues: Mr. Om Prakash Verma (9828543435)</h6>
            </Accordion.Header>
            <Accordion.Body>
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:omprakash.verma@jaipur.manipal.edu'>
                  omprakash.verma@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <h6>For Finance Dues: Ms Deepthi Rajeev</h6>
            </Accordion.Header>
            <Accordion.Body>
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:deepthi.rajeev@jaipur.manipal.edu'>
                  deepthi.rajeev@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <h6>For Mess Dues:</h6>
            </Accordion.Header>
            <Accordion.Body>
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='' style={{ color: "red" }}>
                  To be Updated Soon
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <h6>
                For Hostel Dues: Mr. Ashish Dosaya (9413749923 / 8976751015)
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:ashish.dosaya@goodhostspaces.com'>
                  ashish.dosaya@goodhostspaces.com
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <h6>For AMS/Academics Dues: Dr. Kusum Lata Jain (9828133885)</h6>
            </Accordion.Header>
            <Accordion.Body>
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:kusumlata.jain@jaipur.manipal.edu'>
                  kusumlata.jain@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <h6>For Sports Dues: Mr. Sanjeev Sharma (9993308598)</h6>
            </Accordion.Header>
            <Accordion.Body>
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:sanjeev.sharma@jaipur.manipal.edu'>
                  sanjeev.sharma@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <h6>For Exam cell related queries: Mr. Bijendra Singhs</h6>
            </Accordion.Header>
            <Accordion.Body>
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:it.support@jaipur.manipal.edu'>
                  it.support@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default ContactDetails;
