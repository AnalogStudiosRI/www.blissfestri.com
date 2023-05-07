import '../../styles/theme.css';
import './navigation.js';

export default {
  title: 'Components/Navigation'
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = () => '<bf-navigation></bf-navigation>';

export const Primary = Template.bind({});