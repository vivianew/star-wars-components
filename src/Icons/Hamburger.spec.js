import { shallow } from 'enzyme';
import Hamburger from './Hamburger';

describe('Hamburger', () => {
  const component = shallow(<Hamburger />);

  it('render correctly', () => {
    expect(component.find('svg')).not.toBe(0);
  });
})
