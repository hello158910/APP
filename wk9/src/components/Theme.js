import React from 'react';
import { ScrollView, Linking } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';

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
