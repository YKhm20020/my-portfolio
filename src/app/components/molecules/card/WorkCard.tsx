'use client';

import { Modal } from '@/app/components/organisms/Modal';
import Image from 'next/image';
import type React from 'react';
import { useState } from 'react';

type WorkCardProps = {
	src: string; // カードとモーダルに表示する画像パス
	alt?: string; // 画像が表示されないときに代わりに表示する文字
	workTitle: string; // 成果物のタイトル
	techs: string[]; // カードホバー時に浮かび上がる技術スタック、3つまで表示
	modalTexts: string[]; // モーダル画面の説明文。改行ごとに要素を分割する
	githubUrl?: string; // 成果物のGithubリンク
};

export const WorkCard: React.FC<WorkCardProps> = ({
	src,
	alt,
	workTitle,
	techs,
	modalTexts,
	githubUrl,
}: WorkCardProps) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const onOpenModal = (): void => {
		setIsModalOpen(true);
	};

	const onCloseModal = (): void => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div
				className='relative group flex flex-col shadow-2xl rounded-xl overflow-hidden w-72 sm:w-60 cursor-pointer transition-all duration-300 ease-in-out
                hover:scale-105'
				onClick={onOpenModal}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						onOpenModal();
					}
				}}
			>
				<Image
					className='object-cover object-center w-72 sm:w-60 h-60'
					src={src}
					alt={alt ?? workTitle}
					width={300}
					height={300}
				/>
				<div className='inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
				<div className='absolute bg-white h-full inset-x-0 bottom-1 p-4 transform translate-y-44 group-hover:translate-y-24 transition-transform duration-500 ease-in-out'>
					<h1 className='text-2xl font-semibold text-neutral-800 mb-3 truncate py-1'>
						{workTitle}
					</h1>
					<div className='overflow-hidden text-base group-hover:text-gray-600 text-transparent truncate transition-colors duration-500 delay-200 ease-in-out'>
						{techs && techs.length > 0 ? (
							techs.map((item) => <p key={item}>{item}</p>)
						) : (
							<p>No technologies</p>
						)}
					</div>
				</div>
			</div>
			<Modal
				isOpen={isModalOpen}
				src={src}
				alt={alt ?? workTitle}
				modalTitle={workTitle}
				modalTexts={modalTexts}
				githubUrl={githubUrl}
				onClose={onCloseModal}
			/>
		</>
	);
};
