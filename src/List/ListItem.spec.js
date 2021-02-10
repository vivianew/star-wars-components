import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('ListItem', () => {
  const component = shallow(
    <ListItem
      itemInfo={{ students: ['Harry', 'Ron'] }}
      itemTitle="people"
    />);

  it('should render correctly', () => {
    expect(component.find('.list-item__container')).not.toBe(0);
  });

  it('should collapse', () => {
    component.find('.list-item__container').simulate('click');

    expect(component.find('Arrow').prop('rotation')).toBe(90);
  })
})
