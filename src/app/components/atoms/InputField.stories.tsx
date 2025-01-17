import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
	title: 'components/atoms/InputField',
	component: InputField,
	decorators: [withActions],
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
	args: {
		label: 'label',
		initialValue: '',
		hint: '',
	},
};

export const InputText: Story = {
	args: {
		label: 'sample label',
		initialValue: 'sample initial input',
		hint: 'sample hint',
	},
};

export const Required: Story = {
	args: {
		label: 'input required label',
		initialValue: '',
		hint: 'required',
		required: true,
	},
};
