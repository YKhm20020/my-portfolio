import Link from 'next/link';
import type React from 'react';

type NavTextProps = {
	href: string;
	text: string;
};

export const NavText: React.FC<NavTextProps> = ({ href, text }) => {
	return (
		<div className='text-m m-4 text-stone-300 hover:text-white'>
			<Link href={href}>{text}</Link>
		</div>
	);
};
