/**
 * Raveneyex's 2020 Front-End Stack
 * Made by @raveneyex
 * 
 * Hail Satan!
 */

import { shallow } from 'enzyme'
import App from '../../../main/components/app/App';

test('it renders', () => {
  const component = shallow(<App message="hello" />);
  const textNode = component.find('.message');
  expect(textNode.text()).toEqual('hello');
});
