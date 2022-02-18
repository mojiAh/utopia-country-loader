import React from 'react';
import { render } from 'react-dom';
import { AppShell } from '@mantine/core';

import Header from './components/Header';
import Body from './components/Body';
import './style.css';

function App() {
  return (
    <div className="App">
      <AppShell
        padding="md"
        header={<Header />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Body />
      </AppShell>
    </div>
  );
}
render(<App />, document.getElementById('root'));
