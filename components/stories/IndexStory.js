import React from 'react';
import { storiesOf } from '@kadira/storybook';

//
import InvoiceManagementPage from '../InvoiceManagementPage';

storiesOf('App Index Page', module)
    .add('Index Page', () => (
        <InvoiceManagementPage/>
    ))
