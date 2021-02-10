import { shallow } from 'enzyme';
import Page from './Page';
import { testData } from '../List/List.spec';

describe('Page', () => {
  const component = shallow(<Page
    title="Students at Hogwarts"
    data={testData}
    titleKey="student"
  />);

  it('should render correctly', () => {
    expect(component.find('.page__container')).not.toBe(0);
  });
})
