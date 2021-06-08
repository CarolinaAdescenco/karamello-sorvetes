import React from 'react';
import { Line, LoadContent } from './styles';

const LoadSnake = ({ color }) => (
  <LoadContent>
    <Line color={color} />
    <Line color={color} />
    <Line color={color} />
  </LoadContent>
);

export default LoadSnake;
