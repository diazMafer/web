import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Display from '../components/Display';
import '../css/calc.css'

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);



stories.add('as dynamic variables', () => {

  return (<Display result = {text('Label', 'Hello Storybook')}/>);
});
 