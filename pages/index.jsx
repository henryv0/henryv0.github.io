import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import {
  Wrapper,
  Title,
  Subtitle,
  StyledLink,
  StyledAnchor,
  From
} from '../components/styled/';

export default class Index extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': 'sample' }]} />
        <Title>Another website</Title>
        <Subtitle>Documenting my struggle to understand things</Subtitle>
        <StyledLink to={prefixLink('/blog/')} underline>Blog</StyledLink>
        <StyledLink to={prefixLink('/about/')} underline>About</StyledLink>
        <StyledAnchor href="https://github.com/henryv0">Github</StyledAnchor>
      </Wrapper>
    )
  }
}
