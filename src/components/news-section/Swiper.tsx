import type { FunctionComponent as FC } from "react";
import type { CardType } from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import { Card } from "./Card";

type Props = {
	cards: CardType[];
};

export const ReactSwiper: FC<Props> = ({ cards }) => {
	return (
		<>
			<Swiper
				scrollbar={{
					hide: true,
				}}
				breakpoints={{
					768: {
						slidesPerView: 2.15,
					},
				}}
				modules={[Scrollbar]}
				slidesPerView={1.25}
				spaceBetween={16}>
				{cards.map((card, idx) => (
					<SwiperSlide key={idx}>
						<Card {...card} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
