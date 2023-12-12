import React from 'react';

import { Col, descriptors, Heading, Text } from '../customizables';
import type { PropsOfComponent } from '../styledSystem';
import { BackLink as BackLinkEl } from './BackLink';

const Root = React.memo((props: PropsOfComponent<typeof Col>): JSX.Element => {
  const { sx, ...rest } = props;
  return (
    <Col
      elementDescriptor={descriptors.header}
      gap={1}
      sx={sx}
      {...rest}
    />
  );
});

const Title = React.memo((props: PropsOfComponent<typeof Heading>): JSX.Element => {
  const { sx, ...rest } = props;
  return (
    <Heading
      elementDescriptor={descriptors.headerTitle}
      textVariant='h2'
      sx={sx}
      {...rest}
    />
  );
});

const Subtitle = React.memo((props: PropsOfComponent<typeof Text>): JSX.Element => {
  const { sx, ...rest } = props;
  return (
    <Text
      elementDescriptor={descriptors.headerSubtitle}
      variant='body'
      colorScheme='neutral'
      sx={sx}
      {...rest}
    />
  );
});

const BackLink = (props: PropsOfComponent<typeof BackLinkEl>) => {
  const { sx, ...rest } = props;
  return (
    <BackLinkEl
      boxElementDescriptor={descriptors.headerBackRow}
      linkElementDescriptor={descriptors.headerBackLink}
      iconElementDescriptor={descriptors.headerBackIcon}
      sx={sx}
      {...rest}
    />
  );
};

export const Header = {
  Root,
  Title,
  Subtitle,
  BackLink,
};