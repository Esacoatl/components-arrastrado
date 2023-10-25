import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonSB } from './Button';

export default {
	title: 'Example/ButtonSB',
	component: ButtonSB,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ButtonSB>;

const Template: ComponentStory<typeof ButtonSB> = (args) => <ButtonSB {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: 'ButtonSB',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'ButtonSB',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'ButtonSB',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'ButtonSB',
};
