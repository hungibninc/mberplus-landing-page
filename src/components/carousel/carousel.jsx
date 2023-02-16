import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SponsorCricketImg from '../../assets/sponsor-cricket.png';
import SponsorALFImg from '../../assets/sponsor-afl.png';
import SponsorTigerImg from '../../assets/sponsor-tiger.png';
import SponsorSuperCheapImg from '../../assets/sponsor-super-cheap.png';
import SponsorPAImg from '../../assets/sponsor-pa.png';
import SponsorRabbitImg from '../../assets/sponsor-rabbit.png';
import SponsorSydneyImg from '../../assets/sponsor-sydney.png';
import SponsorNetballImg from '../../assets/sponsor-netball.png';
import SponsorAuskickImg from '../../assets/sponsor-auskick.png';
import SponsorTigersImg from '../../assets/sponsor-tigers.png';
import SponsorWaratahsImg from '../../assets/sponsor-waratahs.png';
import SponsorBulldogsImg from '../../assets/sponsor-bulldogs.png';
import SponsorRedsImg from '../../assets/sponsor-reds.png';
import SponsorRebelsImg from '../../assets/sponsor-rebels.png';
import SponsorMarinersImg from '../../assets/sponsor-mariners.png';
import SponsorSharksImg from '../../assets/sponsor-sharks.png';
import SponsorCricketBlastImg from '../../assets/sponsor-cricket-blast.png';
import SponsorNrlImg from '../../assets/sponsor-nrl.png';
import SponsorRugbyauImg from '../../assets/sponsor-rugbyau.png';

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
			autoPlaySpeed={1000}
		>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorCricketImg} alt='Cricket Australia' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorALFImg} alt='AFL' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorTigerImg} alt='Tiger' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorSuperCheapImg} alt='Super Cheap Auto' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorPAImg} alt='PA' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorRabbitImg} alt='Rabbit' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorSydneyImg} alt='Sydney' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorNetballImg} alt='Netball' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorAuskickImg} alt='Auskick' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorTigersImg} alt='Tigers' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorWaratahsImg} alt='Waratahs' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorBulldogsImg} alt='Bulldogs' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorRedsImg} alt='Reds' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorRebelsImg} alt='Rebels' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorMarinersImg} alt='Mariners' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorSharksImg} alt='Sharks' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorCricketBlastImg} alt='Cricket Blast' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorNrlImg} alt='NRL' />
			</div>
			<div className='flex h-40 items-center justify-center'>
				<img className='' src={SponsorRugbyauImg} alt='Rugby AU' />
			</div>
		</Carousel>
	);
};

export default CarouselBanner;
