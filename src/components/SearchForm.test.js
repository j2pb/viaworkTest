import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

const search_form = shallow(<SearchForm />);
test('Autocomplete initial state is correct', () => {

  expect(
    search_form.state('autocomplete')
  ).toEqual([]);

});
test('Searchbox input default value is correct', () => {

  expect(
    search_form.find('input.searchbox').text()
  ).toEqual('');

});
test('onFocus is correct', () => {

  search_form.find('input').simulate('focus', {
    target: { value: 'viawork' }
  })
  expect(
    search_form.state('autocomplete')
  ).toEqual([]);
});
