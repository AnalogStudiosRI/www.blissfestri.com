import '../../styles/theme.css';
import './faq-card.js';

export default {
  title: 'Components/FAQ Card'
};

const Template = () => `
  <bf-faq-card
    label="target"
    heading="Some Heading"
    content="Lorum Ipsum"
  >
  </bf-faq-card>
`;

export const Primary = Template.bind({});
