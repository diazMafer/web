import React from 'react';
import { action } from '@storybook/addon-actions';
import Board from '../components/Board';



export default {
    title: 'Boards Buttons',
  };
  
export const init = () => <Board />
export const test = () => <Board onClick = {action("Hola")}/>
 