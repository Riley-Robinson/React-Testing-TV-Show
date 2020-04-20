import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';

describe ('App', () => {
    let wrapper;

    afterEach(rtl.cleanup);
    beforeEach(() => {
        wrapper = rtl.render(<App />);
    });



    it ('Displays correct name starting with api data', async () => {
        const text = await wrapper.findByText('Select Season');
        expect(text).toBeInTheDocument();
        expect(text).toBeVisible();
    });
});