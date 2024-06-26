// App.tsx
import React from 'react';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import Routes from './src/Routes';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
