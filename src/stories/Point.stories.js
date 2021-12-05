import Point from '../components/Point.vue';

export default {
  title: 'Point',
  component: Point,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['pink', 'orange', 'red', 'green', 'purple', 'yellow'],
    },
  },
};

const Template = (args) => ({
  components: { Point },
  setup() {
    return { args };
  },
  template: '<Point v-bind="args" />',
});

export const Pink = Template.bind({});
Pink.args = {
  color: 'pink',
  title: 'Ramen',
};

export const Orange = Template.bind({});
Orange.args = {
  color: 'orange',
  title: 'Ramen',
};

export const Red = Template.bind({});
Red.args = {
  color: 'red',
  title: 'Ramen',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  title: 'Ramen',
};

export const Purple = Template.bind({});
Purple.args = {
  color: 'purple',
  title: 'Ramen',
};

export const Yellow = Template.bind({});
Yellow.args = {
  color: 'yellow',
  title: 'Ramen',
};
