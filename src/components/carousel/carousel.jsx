import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SponsorCricketImg from '../../assets/sponsor-cricket.png';
import SponsorALFImg from '../../assets/sponsor-afl.png';
import SponsorTigerImg from '../../assets/sponsor-tiger.png';
import SponsorSuperCheapImg from '../../assets/sponsor-super-cheap.png';
import SponsorPAImg from '../../assets/sponsor-pa.png';
import SponsorRabbitImg from '../../assets/sponsor-rabbit.png';
import SponsorSydneyImg from '../../assets/sponsor-sydney.png';

const CarouselBanner = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 7,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 7,
		},
		tablet: {
			breakpoint: { max: 1024, min: 768 },
			items: 4,
		},
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: 3,
		},
	};

	return (
		<Carousel
			containerClass='carousel-container'
			responsive={responsive}
			arrows={false}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={3000}
		>
			<div className='h-40 flex items-center justify-center'>
				<img className='' src={SponsorCricketImg} alt='Cricket Australia' />
			</div>
			<div className='h-40 flex items-center justify-center'>
				<img className='' src={SponsorALFImg} alt='AFL' />
			</div>
			<div className='h-40 flex items-center justify-center'>
				<img className='' src={SponsorTigerImg} alt='Tiger' />
			</div>
			<div className='h-40 flex items-center justify-center'>
				<img className='' src={SponsorSuperCheapImg} alt='Super Cheap Auto' />
			</div>
			<div className='h-40 flex items-center justify-center'>
				<img className='' src={SponsorPAImg} alt='PA' />
			</div>
			<div className='h-40 flex items-center justify-center'>
				<img className='' src={SponsorRabbitImg} alt='Rabbit' />
			</div>
			<div className='h-40 flex items-center justify-center'>
				<img className='' src={SponsorSydneyImg} alt='Sydney' />
			</div>
		</Carousel>
	);
};

export default CarouselBanner;
