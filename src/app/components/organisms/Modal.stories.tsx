import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Modal } from './Modal';

const meta = {
	title: 'components/organisms/Modal',
	component: Modal,
	decorators: [withActions],
	args: {
		onClose: fn(),
	},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	args: {
		isOpen: true,
		src: '/images/robot_and_hogeta.jpeg',
		alt: 'Modal',
		modalTitle: 'Sample Title',
		modalTexts: ['Sample Text', 'Sample 2nd Line Text'],
		onClose: fn(),
	},
};

export const CloseModal: Story = {
	args: {
		isOpen: true,
		src: '/images/robot_and_hogeta.jpeg',
		alt: 'Modal',
		modalTitle: 'Sample Title',
		modalTexts: ['Sample Text', 'Sample 2nd Line Text'],
		onClose: fn(),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const closeButton = canvas.getByRole('button');
		await expect(closeButton).toBeInTheDocument();
		await userEvent.click(closeButton);
		await expect(closeButton).toBeInTheDocument();
	},
};
