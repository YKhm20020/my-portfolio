import type React from 'react';
import { WorkCard } from '../components/molecules/card/WorkCard';
import { MediaObject } from '../components/organisms/MediaObject';

const Products: React.FC = () => {
	return (
		<div className='bg-white flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			<MediaObject
				src='/images/robot_and_hogeta.jpeg'
				alt='走行体とホゲータ'
				heading='Products'
				text='成果物について紹介するページです。Webアプリケーション開発のアルバイトや、産学連携の研究など、
                一部詳細を非公開としているものもあります。組み込み開発からサーバー構築やAWS, Google Cloud など、色々やってます。'
			/>
			<div>
				<WorkCard
					src='/images/robocon.png'
					alt='走行帯が走っている写真とモデルの画像'
					workTitle='ETロボコン'
					techs={['C++', 'Python']}
					modalText='学生時代に最も力を入れて活動していた、ETロボコンです。
                    リアルコース上を機械に走らせて点数を競う走行部門と、
                    設計書の出来を評価するモデル部門があります。
                    2023年は九州地区大会で総合優勝、全国大会で総合6位の成績を収めました。
                    2024年はチームリーダーを務め、九州地区大会で総合準優勝、モデル優勝の成績を収めました'
				/>
			</div>
		</div>
	);
};

export default Products;