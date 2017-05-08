import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Row, Column, Page } from 'hedron';
import { config } from 'config';
import _ from 'lodash';
import {
  Message,
  StyledLink,
  Text
} from '../components/styled/';

export default class About extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.file;

    return (
      <Page>
        <Helmet title={`${config.siteTitle} - ${_.capitalize(post.name)}`} />
        <Row divisions={1}>
          <Column sm={1}>
            <StyledLink to={prefixLink('/')}>back home</StyledLink>
          </Column>
          <Column sm={1}>
            <Message>About Me</Message>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text fontSize="18px">
              I spend a lot of time in front of a computer screen. I work at PwC. I don't do too much open source but I blog a bit.
            </Text>
          </Column>
        </Row>
      </Page>
    );
  }
}
