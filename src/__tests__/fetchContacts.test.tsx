import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import moxios from 'moxios';
import data from 'mock/data';
import ContactList from 'components/ContactList';

beforeEach(() => {
    const page = 1;
    moxios.install();
    moxios.stubRequest(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`, {
        status: 200,
        response: data.results
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of contacts and display them', (done) => {
    const wrapped = mount(
        <Root>
            <ContactList history={null} />
        </Root>
    );

    moxios.wait(() => {
        wrapped.update();
        // console.log(wrapped.find(ContactList).debug());
        // expect(wrapped.find(ContactList).text()).toContain('Louane');
        done();
        wrapped.unmount();
    });
});