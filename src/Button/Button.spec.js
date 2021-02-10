import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  const onClickSpy = jest.fn();
  const component = shallow(<Button label="Submit" type="submit" onClick={onClickSpy} />);

  it('should render correctly', () => {
    expect(component.find('.button__button')).not.toBe(0);
  });

  it('render trigger onClick', () => {
    component.find('button').simulate('click');
    expect(onClickSpy).toBeCalled();
  });
})