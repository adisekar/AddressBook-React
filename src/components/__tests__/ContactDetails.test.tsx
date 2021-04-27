import React from 'react';
import { mount } from 'enzyme';
import ContactDetails from 'components/ContactDetails';
import Root from 'Root';
import data from 'mock/data';
import { BrowserRouter } from 'react-router-dom';

let wrapped: any;
beforeEach(() => {
    const initialState = {
        selectedContact: data.results[0]
    };
    wrapped = mount(
        <Root initialState={initialState} >
            <BrowserRouter>
                <ContactDetails history={null} />
            </BrowserRouter>
        </Root>);
});

afterEach(() => {
    wrapped && wrapped.unmount()
});

it('check if contact detail exists and has a card', () => {
    expect(wrapped.find(".content").length).toEqual(1);
});

it('contact has the name which matches mock data', () => {
    expect(wrapped.text()).toContain('Louane');
});