import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faJs,
  faAngular,
  faAws
} from "@fortawesome/free-brands-svg-icons";
const lambda = require("../images/logos/aws-lambda.svg");
const dynamoDB = require("../images/logos/aws-dynamodb.svg");
const rds = require("../images/logos/aws-rds.svg");
const sns = require("../images/logos/aws-sns.svg");
const sqs = require("../images/logos/aws-sqs.svg");
const gateway = require("../images/logos/aws-api-gateway.svg");
const graphQL = require("../images/logos/graphql.svg");
const docker = require("../images/logos/docker.svg");

function About() {
  return (
    <div id="aboutMe" className="about ">
      <h1>About Me</h1>
      <p>
        Motivated senior software developer, with a passion for teamwork to
        contribute to the success of IT projects. Strong focus on backend
        software development with exposure to frontend development.
        <br />
        Having vast knowledge in software development and agile methodology has
        enabled me to lead high performance teams in the past.
        <br />
        Proven track record of efficient and effective team member management,
        with a strong knowledge in NodeJS, C#, AWS, and DevOps.
      </p>
      <div className="tech">
        <FontAwesomeIcon icon={faNode} color="#7FBD2F" />
        <FontAwesomeIcon icon={faAws} color="#FD8606" />
        <img src={gateway} alt="AWS API Gateway" />
        <img src={graphQL} alt="GraphQL" />
        <img src={lambda} alt="AWS Lambda" />
        <img src={dynamoDB} alt="AWS DynamoDB" />
        <img src={rds} alt="AWS RDS" />
        <img src={sns} alt="AWS SNS" />
        <img src={sqs} alt="AWS SQS" />
        <FontAwesomeIcon icon={faJs} color="#ffd43b" />
        <FontAwesomeIcon icon={faAngular} color="#D30025" />
        <FontAwesomeIcon icon={faReact} color="#61dbfb" />
        <img src={docker} alt="docker" />
      </div>
    </div>
  );
}

export default About;