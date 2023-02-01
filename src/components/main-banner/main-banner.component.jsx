import { useState } from 'react';
import RewardLoyaltyBannerImg from '../../assets/reward-loyalty.png';
import { ReactComponent as YoutubeIco } from '../../assets/ico-youtube.svg';

const MainBanner = () => {
	const [showModal, setShowModal] = useState(false);

	const watchVideoHandler = (e) => {
		setShowModal(true);
	};
	return (
		<section className='bg-black lg:bg-transparent lg:bg-[url("../assets/banner-bg.jpg")] py-8 xl:pt-16'>
			<div className='container flex flex-col lg:flex-row lg:justify-between gap-y-12'>
				<div className='space-y-8'>
					<h3 className='text-white text-32-36-c lg:text-xl xl:text-38-50-c'>
						No Stock Risk{' '}
						<span className='lg:block'>Endless Designs & Personalisation</span>{' '}
						Flexible & Fully Customisable
					</h3>
					<p className='text-white text-16-28-c'>
						Explore the rewards & loyalty platform behind some of Australia’s
						leading brands.
					</p>
					<button
						className='flex items-center space-x-2 px-6 py-2 group [transform:translateZ(0)] rounded-md bg-primary overflow-hidden relative before:absolute before:bg-primary-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-500'
						onClick={watchVideoHandler}
					>
						<YoutubeIco className='z-0' />
						<span className='relative z-0 font-bold text-black uppercase Gotham-Medium text-16-28-c group-hover:text-black transition ease-in-out duration-500'>
							Watch The Video
						</span>
					</button>
				</div>
				<div className='-mx-10 xl:-mx-0 xl:-mr-14 shrink-0'>
					<img
						className='lg:h-96'
						src={RewardLoyaltyBannerImg}
						alt='Reward Loyalty'
					/>
				</div>
			</div>

			{showModal ? (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								{/*header*/}
								<div className='z-10 absolute top-2 right-2'>
									<button
										className='p-1 bg-transparent border-0 text-black float-right text-5xl leading-6 font-semibold outline-none focus:outline-none '
										onClick={() => setShowModal(false)}
									>
										<span>×</span>
									</button>
								</div>
								{/*body*/}
								<div className='relative p-6 flex-auto'>
									<p className='my-4 text-slate-500 text-lg leading-relaxed'>
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video Youtube Video Youtube Video
										Youtube Video Youtube Video
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-75 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</section>
	);
};

export default MainBanner;
