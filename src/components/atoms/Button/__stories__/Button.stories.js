import ButtonComponent from "../ButtonComponent.vue";
export default {
  title: "Компоненты/Базовые/Кнопка",
  component: ButtonComponent,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => ({
  components: { ButtonComponent },
  setup() {
    return { args };
  },
  template: '<button-component v-bind="args" />',
});

export const Small = Template.bind({});
Small.args = {
  text: "привет МИР! (и юбимый васок)",
};
