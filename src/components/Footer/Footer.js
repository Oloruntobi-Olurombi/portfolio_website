import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:+2348134554734">08134554734</LinkItem>
          </LinkColumn>

          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:oloruntobiolurombi@gmail.com">oloruntobiolurombi@gmail.com</LinkItem>
          </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
          <CompanyContainer>
              <Slogan>Do not despise the days of little beginning</Slogan>
          </CompanyContainer>
          <SocialContainer>
          <SocialIcons href="https://github.com/Oloruntobi-Olurombi?tab=repositories">
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/olurombi-oloruntobi-07122bb4/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.facebook.com/olurombi.oloruntobiadefolami/">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
