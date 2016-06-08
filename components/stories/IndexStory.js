import React from 'react';
import { storiesOf } from '@kadira/storybook';

//
import HelloWorldComponent from '../HelloWorldComponent';

storiesOf('App Index Page', module)
    .add('Index Page', () => (
        <HelloWorldComponent message={"Friend"} />
    ))
