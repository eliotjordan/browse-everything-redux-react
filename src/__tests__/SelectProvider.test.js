import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
import SelectProvider from '../containers/SelectProvider';

it('renders the component on the DOM', () => {
  const container = shallow(<SelectProvider />);
  expect(container).toBeTruthy;
});
