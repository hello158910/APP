import React from 'react';
import { ThemeTabRouter } from '../Router';

// Make a component
const Theme = (props) => {
  const { title, 
  } = props.navigation.state.params;

  return (
    <ThemeTabRouter />
  );
};


export default Theme;
