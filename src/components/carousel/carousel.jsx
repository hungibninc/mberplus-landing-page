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
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<Carousel
			responsive={responsive}
			infinite={true}
			containerClass='carousel-container'
		>
			<div className=''>
				<img
					className='mx-auto'
					src={SponsorCricketImg}
					alt='Cricket Australia'
				/>
			</div>
			<div className=''>
				<img className='mx-auto' src={SponsorALFImg} alt='AFL' />
			</div>
			<div className=''>
				<img className='mx-auto' src={SponsorTigerImg} alt='Tiger' />
			</div>
			<div className=''>
				<img
					className='mx-auto'
					src={SponsorSuperCheapImg}
					alt='Super Cheap Auto'
				/>
			</div>
			<div className=''>
				<img className='mx-auto' src={SponsorPAImg} alt='PA' />
			</div>
			<div className=''>
				<img className='mx-auto' src={SponsorRabbitImg} alt='Rabbit' />
			</div>
			<div className=''>
				<img className='mx-auto' src={SponsorSydneyImg} alt='Sydney' />
			</div>
		</Carousel>
	);
};

export default CarouselBanner;
