import React from 'react';
import { Header, Title, Avatar, Grid, MediaQuery } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const LOGO_ADDRESS = 'https://utopiamusic.com/logo.png';
const AppHeader = () => {
  const matches = useMediaQuery('(min-width: 900px)');
  return (
    <Header height={120} padding="xs" style={{ backgroundColor: 'black' }}>
      <Grid align={'center'} justify={'center'} style={{ height: '100%' }}>
        <Title style={{ color: 'white' }} order={matches ? 1 : 3}>
          {'Utopia Country Highlighter'}
        </Title>
        <Avatar
          src={LOGO_ADDRESS}
          alt="utopia-logo"
          radius="xl"
          size={matches ? 'lg' : 'md'}
          style={{ position: 'absolute', right: 20 }}
        />
      </Grid>
    </Header>
  );
};

export default AppHeader;
