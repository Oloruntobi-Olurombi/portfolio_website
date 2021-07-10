import React from 'react';
import { DiFirebase, DiReact, DiZend, DiLinux } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development and DevOps world.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
              <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                  Experience with <br />
                  React.js
              </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
              <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                  Experience with <br />
                  Node.js and Databases
              </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiLinux size="3rem"/>
          <ListContainer>
              <ListTitle>DevOps</ListTitle>
              <ListParagraph>
                  Experience with <br />
                  Linux, Azure, AWS, Docker, Kubernates and Ansible
              </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
