import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container mt-5 blog-details">
      <h2 className="fw-bold text-center my-5">Questions Answer</h2>
      <div className="rounded-4">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Difference between javascript and nodejs
            </Accordion.Header>
            <Accordion.Body>
              JavaScript is a programming language which runs in any browser
              through JavaScript engine. On the Other hand Node Js is an
              interpreter or environment for javaScript Programming
              language.JavaScript is normally used for any client-side activity
              for one web application and Whereas Node JS mainly used for
              accessing or running any operating system for non-blocking
              operation. JavaScript runs in angine like Spider monkey ,
              Javascript Core, V8 etc where node js only Support V8 Engine.
              JavaSceipt is basically used on the client-side. Where Node Js is
              mostly used on the server-side. JavaScript is used for frontend
              development where Node Js is used for server side Development.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              When should you use nodejs and when should you use mongodb
            </Accordion.Header>
            <Accordion.Body>
              MongoDB and NodeJS are two different technologies. MonogDB is a
              database system which gives us a chance to store documents in a
              database and to perform operations like data updates, or to search
              documents by some criterias. NodeJS's responsibilty is especially
              to execute the application.NodeJS is a JavaScript runtime
              environment. It's actually helps JavaScript to run outside of
              server. It's used in server side development.MongoDB is NoSQL
              database which is document oriented. It represents data as of JSON
              documents. It's used for store data.The summary is MongoDB is a
              database where we can store data and NodeJS helps us to to connect
              our client site to database by it's server site.When we are
              building a application we need to store data in that case we use
              database like Mongodb and to connect with Mongodb we need a
              connector which is Node js . It connects client side with the
              Database
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Differences between sql and nosql databases.
            </Accordion.Header>
            <Accordion.Body>
              Sql database are callled Relational Database where NoSql database
              is called Non-relational database.Sql database is use structured
              query language and have a predefined schema where noSql have
              dynamic schema and unstructured data.Sql database are scalable and
              table based On the other hand Nosql are horizontaly scalable ,
              document type and key value pair structured. Sql are better for
              multi row transactions and No Sql is better for unstructured data
              like JSON.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;
