import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/stacks/MainStack';

import UserContext from './src/contexts/UserContext';

export default function App() {
  return (
    <UserContext>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContext>
    
  );
}