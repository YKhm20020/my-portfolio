import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/app/Layout';
import { WorkCard } from '@/app/components/molecules/card/WorkCard';
import { MediaObject } from '@/app/components/organisms/MediaObject';
import { Modal } from '@/app/components/organisms/Modal';
import { XTwitterIcon } from '@/app/components/atoms/icons/XTwitterIcon';

const About: React.FC = () => {
	return (
		<div className='bg-white'>
			<Layout>
				<MediaObject
					src='/images/robot_and_hogeta.jpeg'
					alt='走行体とホゲータ'
					heading='About Me'
					text='宮崎大学の大学院に在籍している木村優哉です！
                    プログラミングを専攻する学科に所属しており、研究やETロボコン、Webアプリケーション開発のアルバイトなどを行っております！'
				/>
				<WorkCard
					src='/images/robot_and_hogeta.jpeg'
					workTitle='Worktitle'
					techs={['technology1', 'technology2', 'technology3']}
					modalText='ワークカード確認'
				/>
				<p>作成中</p>
				<Link href='/'>Go back to Home</Link>
			</Layout>
		</div>
	);
};

export default About;