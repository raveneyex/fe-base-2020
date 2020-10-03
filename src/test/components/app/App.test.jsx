import { shallow } from 'enzyme'
import App from '../../../main/components/app/App';

test('it renders', () => {
  const component = shallow(<App message="hello" />);
  const textNode = component.find('.message');
  expect(textNode.text()).toEqual('hello');
});
