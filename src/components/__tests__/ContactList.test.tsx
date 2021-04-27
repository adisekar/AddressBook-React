import React from 'react';
import { mount } from 'enzyme';
import ContactList from 'components/ContactList';
import Root from 'Root';
import data from 'mock/data';

let wrapped: any;
beforeEach(() => {
    const initialState = {
        contacts: data.results
    };
    wrapped = mount(
        <Root initialState={initialState}>
            <ContactList history={null} />
        </Root>);
});

afterEach(() => {
    wrapped.unmount()
});

it('creates one Item avatar per contact', () => {
    expect(wrapped.find(".avatar").length).toEqual(1);
});

it('contact has the name which matches mock data', () => {
    expect(wrapped.text()).toContain('Louane');
});