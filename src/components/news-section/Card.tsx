import type { FunctionComponent as FC } from "react";

export type CardType = {
	title: string;
	image: {
		src: string;
		alt: string;
	};
	url: string;
};
export const Card: FC<CardType> = ({ title, image, url }) => {
	return (
		<div className='grid grid-cols-3 border border-blue-700 rounded bg-white shadow-md pr-2'>
			<img
				{...image}
				width={400}
				height={400}
				className='h-full aspect-square object-cover row-span-2'
			/>
			<h3 className='col-span-2 mt-2 lg:mt-4 lg:mr-2 ml-4 mb-auto line-clamp-2 font-semibold break-words md:text-lg lg:text-xl'>
				{title}
			</h3>
			<a
				href={url}
				className='flex items-center gap-1 col-span-2 col-start-2 mb-2 ml-4 text-blue-700 text-sm md:text-base'>
				Leggi
				<svg
					className='fill-current w-3 h-3'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'>
					<path
						className='fill-current'
						d='M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z'></path>
				</svg>
			</a>
		</div>
	);
};
