import { shallow } from 'enzyme';
import Table from './Table';

describe('Table', () => {
  const component = shallow(<Table item={{ teacher: 'Severus' }} />);

  it('should render correctly', () => {
    expect(component.find('.table__row')).not.toBe(0);
  });

  it('should render correctly for array values', () => {
    component.setProps({ item: { teachers: ['Minerva', 'Albus' ] } })
    expect(component.find('.table__row')).not.toBe(0);
  });
})