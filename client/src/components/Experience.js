import React from 'react';
import { Card, Flag, Grid, Icon, Image } from 'semantic-ui-react';

import './Style/Experience.css';

const Experience = () => (
  <div className="Experience">
    <Card fluid className="ui card Experience-mega-card">
      <Card.Content>
        <Card.Header className="Experience-mega-card-header" as='h2'>Roles</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Meta as="h2" className="Experience-subheader">
          Full-Stack Internal Tools Developer
        </Card.Meta>
      </Card.Content>
      <Card.Content className="Experience-role">
        <Card centered color='olive' className="Experience-child-card Experience-child-card-horizontal">
          <Card.Content className="Experience-child-card-headers">
            <Card.Header as="h1">Bluprint</Card.Header>
          </Card.Content>
          <Card.Content>
            I collaborate with coworkers in different areas of the business to learn about pain-points in their processes.
            From these pain-points, I defined features to make their processes more efficient. I implement them on our administrative website by building out backend Java REST apis and a front-end React web interface.
            I also integrated a new DAM (digital asset management) system with our microservices and internal tooling using AWS Python lambdas, AWS SQS and AWS SNS Topics. </Card.Content>
          <Card.Content extra>
            <Icon name='calendar outline' />
            Jul 2019 - Present
          </Card.Content>
        </Card>
      </Card.Content>
      <Card.Content className="Experience-subheader-wrapper">
        <Card.Meta as="h2" className="Experience-subheader">
          CORE Technology Associate
        </Card.Meta>
        <Card.Description className="Experience-subheader-desc">A two year rotational program comprised of three rotations across Comcast NBCUniversal</Card.Description>
      </Card.Content>
      <Card.Content className="Experience-rotations">
        <Card centered color='olive' className="Experience-child-card Experience-child-card-horizontal">
          <Card.Content className="Experience-child-card-headers">
            <Card.Header as="h1">Comcast VIPER</Card.Header>
          </Card.Content>
          <Card.Content>
            I contribute to a microservice that packages VOD content using GoLang, Kubernetes and Docker.
            I initiated cross-team colloboration to implement 4k linear end-to-end.
            I participated in Labweek to create an asset management library,
            with a React front-end and GoLang backend.
          </Card.Content>
          <Card.Content extra>
            <Icon name='calendar outline' />
            Jan 2019 - Jul 2019
          </Card.Content>
        </Card>
        <Card centered color='olive' className="Experience-child-card Experience-child-card-horizontal">
          <Card.Content className="Experience-child-card-headers">
            <Card.Header as="h1">NBC Digital</Card.Header>
          </Card.Content>
          <Card.Content>
            I integrated GraphQL backend with the front-end web client to improve load times by 30%.
            I added new data structures and implemented business logic on the backend in GraphQL
            and Algolia. I also implemented features and fixed bugs on React front-end site.
          </Card.Content>
          <Card.Content extra>
            <Icon name='calendar outline' />
            July 2018 - Jan 2019
          </Card.Content>
        </Card>
        <Card centered color='olive' className="Experience-child-card Experience-child-card-horizontal">
          <Card.Content className="Experience-child-card-headers">
            <Card.Header as="h1">Xfinity Stream Web</Card.Header>
          </Card.Content>
          <Card.Content>
            I collaborated closely with UX, QA and other developers on the team to implement new features,
            for Comcast Xfinity stream web app using Polymer framework. I unified error logging across the app
            to standardize error codes across apps in order to identify and escalate issues effectively.
          </Card.Content>
          <Card.Content extra>
            <Icon name='calendar outline' />
            July 2017 - July 2018
          </Card.Content>
        </Card>
      </Card.Content>
    </Card>
    <div className="Experience-group">
      <Card fluid className="Experience-leadership ui card Experience-mega-card">
        <Card.Content>
          <Card.Header className="Experience-mega-card-header" as='h2'>Leadership Roles</Card.Header>
        </Card.Content>
        <Card.Content className="Experience-child-card-container-cols">
          <Card className="Experience-child-card Experience-child-card-vertical" centered color='olive'>
            <Card.Content className="Experience-child-card-headers">
              <Card.Header as="h1">CORE Tech CommSquad</Card.Header>
              <Card.Meta>Co-Lead</Card.Meta>
            </Card.Content>
            <Card.Content>I planned and delegate tasks in order to
              write and edit articles, and publish a quarterly CORE Tech newsletter, <i>The CATALYST</i>.
              I created and maintained a website to publish <i>The CATALYST</i>.
              I also facilitated our collaboration with CORE Finance to publish monthly editions of PPN Pulse.
              </Card.Content>
            <Card.Content extra>
              <Icon name='calendar outline' />
              Aug 2018 - Present
            </Card.Content>
          </Card>
          <Card className="Experience-child-card Experience-child-card-vertical" centered color='olive'>
            <Card.Content className="Experience-child-card-headers">
              <Card.Header as="h1">CORE Tech Alumni Committee</Card.Header>
            </Card.Content>
            <Card.Content>I co-lead the alumni committee's buddy program, where we matched
              current associates with incomming associates to provide them an informal mentorship.
              I organized local meetups with CORE Tech associates to foster a sense of community.
              I identified an opportunity for collaboration across all committess to create a unified CORE Tech website.</Card.Content>
            <Card.Content extra>
              <Icon name='calendar outline' />
              March 2018 - Present
            </Card.Content>
          </Card>
          <Card className="Experience-child-card Experience-child-card-vertical" centered color='olive'>
            <Card.Content className="Experience-child-card-headers">
              <Card.Header as="h1">Teaching Assistant</Card.Header>
            </Card.Content>
            <Card.Content>I helped students learn the fundamentals of computer science during weekly recitations and office hours.
              I graded weekly assignments, wrote exam problems, and graded and proctored exams.</Card.Content>
            <Card.Content extra>
              <Icon name='calendar outline' />
              Aug 2015 - Jun 2017
            </Card.Content>
          </Card>
        </Card.Content>
      </Card>
      <div className="Experience-skills-edu">
        <Card color='olive'>
          <Card.Content className="Experience-skills-edu-header">
            <Card.Header>Skills</Card.Header>
          </Card.Content>
          <Card.Content>
            <Grid columns={3} divided>
              <Grid.Column>
                <Grid.Row className="Experience-column-title">Proficient</Grid.Row>
                <Grid.Row>
                  Polymer, React, Java, Javascript, CSS, HTML, Jira, Linux, Git/Github
                </Grid.Row>
              </Grid.Column>
              <Grid.Column>
                <Grid.Row className="Experience-column-title">Intermediate</Grid.Row>
                <Grid.Row>
                  Python, PostgreSQL, AWS (SQS, SNS, Lambda, EC2), Ocaml, Telemetry, Splunk, AngularJS
                </Grid.Row>
              </Grid.Column>
              <Grid.Column>
                <Grid.Row className="Experience-column-title">Learning</Grid.Row>
                <Grid.Row>
                  GoLang, Docker, Kubernetes, Concourse, Vue.js, Algolia, GraphQL, Terraform
                </Grid.Row>
              </Grid.Column>
            </Grid>
            <br />
            Languages:&nbsp;&nbsp;&nbsp;
            <Flag name='france' />
            <Flag name='es' />
          </Card.Content>
        </Card>
        <Card color='olive'>
          <Card.Content className="Experience-skills-edu-header">
            <Card.Header>Education</Card.Header>
            <Card.Meta>B.A. Computer Science &amp; Cognitive Science</Card.Meta>
          </Card.Content>
          <Image src="https://static1.squarespace.com/static/54ab7929e4b0170492f02976/t/54c2e1ece4b0badc93a25eb1/1422057965033/Fisher+2.jpg?format=2500w" />
          <Card.Content>
            University of Pennsylvania
          </Card.Content>
          <Card.Content extra>
            <Icon name='calendar outline' />
            2013-2017
          </Card.Content>
        </Card>
      </div>
    </div>
  </div>
);

export default Experience;