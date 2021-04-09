import React from 'react';

import Post from './Post';

export default {
  title: 'Example/Post',
  component: Post,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Post {...args} />;

export const Default = Template.bind({});
