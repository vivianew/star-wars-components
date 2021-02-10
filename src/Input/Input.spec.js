import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  const component = shallow(<Input label="email" type="text" value="email" />);

  it('should render correctly', () => {
    expect(component.find('.input__container')).not.toBe(0);
  });
})
