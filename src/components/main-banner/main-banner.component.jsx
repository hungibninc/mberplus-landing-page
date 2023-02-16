import { useState } from 'react';
import RewardLoyaltyBannerImg from '../../assets/reward-loyalty-banner.png';
import RewardLoyaltyBannerBgImg from '../../assets/reward-loyalty-banner-bg.png';
import { ReactComponent as YoutubeIco } from '../../assets/ico-youtube.svg';
import IntroVideo from '../../assets/intro.mp4';
import IntroImg from '../../assets/intro.jpg';

const MainBanner = () => {
	const [showModal, setShowModal] = useState(false);

	const watchVideoHandler = (e) => {
		setShowModal(true);
	};
	return (
		<section className='bg-black py-8 lg:bg-transparent lg:bg-[url("../../assets/banner-bg.jpg")] xl:pt-16'>
			<div className='container flex flex-col gap-y-12 lg:flex-row lg:justify-between'>
				<div className='space-y-8 lg:animate-banner-desc'>
					<h3 className='text-32-36-c text-white lg:text-xl xl:text-38-50-c'>
						No Stock Risk{' '}
						<span className='lg:block'>Endless Designs & Personalisation</span>{' '}
						Flexible & Fully Customisable
					</h3>
					<p className='text-16-28-c text-white'>
						Explore the rewards & loyalty platform behind some of the biggest
						brands.
					</p>
					<button
						className='group relative flex items-center space-x-2 overflow-hidden rounded-md bg-primary px-6 py-2 [transform:translateZ(0)] before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 before:bg-primary-600 before:transition before:duration-500 before:ease-in-out hover:before:origin-[0_0] hover:before:scale-x-100'
						onClick={watchVideoHandler}
					>
						<YoutubeIco className='z-0' />
						<span className='Gotham-Medium relative z-0 text-16-28-c font-bold uppercase text-black transition duration-500 ease-in-out group-hover:text-black'>
							Watch The Video
						</span>
					</button>
				</div>
				<div className='relative -mx-10 shrink-0 xl:-mx-0 xl:-mr-14'>
					<img
						className='hidden h-auto max-w-full lg:block lg:h-96 lg:animate-banner-bg-image'
						src={RewardLoyaltyBannerBgImg}
						alt='Reward Loyalty'
					/>
					<img
						className='h-auto max-w-full lg:absolute lg:top-0 lg:left-0 lg:h-96 lg:animate-banner-image'
						src={RewardLoyaltyBannerImg}
						alt='Reward Loyalty'
					/>
				</div>
			</div>

			{showModal ? (
				<>
					<div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
						<div className='container relative my-6 mx-auto w-4/5 max-w-3xl'>
							<div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
								<div className='bg-black text-right'>
									<button
										className='border-0 bg-transparent p-1 text-5xl font-semibold leading-6 text-white outline-none focus:outline-none '
										onClick={() => setShowModal(false)}
									>
										<span>×</span>
									</button>
								</div>
								<div className='flex items-center justify-center'>
									<video controls autoPlay width='100%' poster={IntroImg}>
										<source src={IntroVideo} type='video/mp4' />
										Sorry, your browser doesn't support embedded videos.
									</video>
								</div>
							</div>
						</div>
					</div>
					<div className='fixed inset-0 z-40 bg-black opacity-75'></div>
				</>
			) : null}
		</section>
	);
};

export default MainBanner;
