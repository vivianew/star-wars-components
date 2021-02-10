import { shallow } from 'enzyme';
import Arrow from './Arrow';

describe('Arrow', () => {
  const component = shallow(<Arrow />);

  it('render correctly', () => {
    expect(component.find('svg')).not.toBe(0);
  });

  it('render correctly with animation', () => {
    component.setProps({ animation: '90' });

    expect(component.find('svg')).not.toBe(0);
  });
})
