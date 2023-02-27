import '../../styles/theme.css';
import './header.js';

export default {
  title: 'Components/Header'
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = () => '<bf-header></bf-header>';

export const Primary = Template.bind({});
