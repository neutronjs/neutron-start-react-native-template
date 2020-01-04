import React from 'react';

import Hello from '@/components/Hello';
import Notification from '@/utils/notification';

import { StyledContainer } from './styles';

const Main = () => {
  Notification('Hello, dev! How are you?');
  return (
    <StyledContainer>
      <Hello title="Neutron JS" message="React Native Template!" />
    </StyledContainer>
  );
};

export default Main;
