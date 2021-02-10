import { shallow } from 'enzyme';
import List from './List';

export const testData = [
  {
    student: 'Malfoy',
    house: 'Slytherin',
    created: '111',
  },
  {
    student: 'Hermione',
    house: 'Gryffindor',
    created: '222',
  },
]

describe('List', () => {
  const component = shallow(<List
    data={testData}
    titleKey="greetings"
  />);

  it('should render correctly', () => {
    expect(component.find('.list__container')).not.toBe(0);
  });
})
