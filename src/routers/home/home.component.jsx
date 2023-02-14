import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RewardLoyaltyBgImg from '../../assets/reward-loyalty-bg.jpg';
import RewardLoyaltyLightImg from '../../assets/reward-loyalty-light.png';
import RewardLoyaltyMultiplicationImg from '../../assets/reward-loyalty-multiplication.png';
import RewardLoyaltyMultiplicationWhiteImg from '../../assets/reward-loyalty-multiplication-white.png';
import RewardLoyaltyPlusImg from '../../assets/reward-loyalty-plus.png';
import { ReactComponent as TwitterIco } from '../../assets/ico-twitter.svg';
import PowerWhatIsImg from '../../assets/power-what-is.png';
import PowerOfferImg from '../../assets/power-offer.png';
import PowerDeliveryImg from '../../assets/power-delivery.png';
import SupplyProductBgImg from '../../assets/supply-product-bg.png';
import SupplyProductSpinImg from '../../assets/supply-product-spin.png';
import IntuitiveDataImg from '../../assets/intuitive-data.png';
import ClientActBrumbiesImg from '../../assets/client-act-brumbies.jpg';
import ClientJasonImg from '../../assets/client-jason.jpg';
import ClientMelissaImg from '../../assets/client-melissa.jpg';
import ClientTexiSmithImg from '../../assets/client-texi-smith.jpg';
import ClientWpRaskellImg from '../../assets/client-wp-raskell.jpg';
import CarouselBanner from '../../components/carousel/carousel';
import MainBanner from '../../components/main-banner/main-banner.component';
import { useParallax } from 'react-scroll-parallax';

const Home = () => {
	/* const effETest = useParallax({
		scale: [1, 1, 'easeOutExpo'],
		translateY: ['300px', '0px'],
		// rotate: [-180, 0],
		easing: 'easeOutExpo',
		startScroll: 400,
		shouldAlwaysCompleteAnimation: true,
	}); */
	const effMoveFromLeft = useParallax({
		translateX: ['-800px', '0px'],
		easing: 'easeOutExpo',
	});
	const effMoveFromRight = useParallax({
		translateX: ['500px', '0px'],
		easing: 'easeOutExpo',
	});
	// const effMoveFromTop = useParallax({
	// 	translateY: ['200px', '0px'],
	// 	easing: 'easeOutQuint',
	// });
	const effMoveFromBottom = useParallax({
		translateY: ['800px', '-50px'],
		easing: 'easeOutQuart',
	});
	const effHereWhatTitle = useParallax({
		scale: [0.3, 1, 'easeOutExpo'],
	});

	const readMoreHandler = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		<Fragment>
			<MainBanner />

			<div className='py-14'>
				<div className='container'>
					<div className='gap-y-2 text-center'>
						<div
							className='Gotham-Medium text-xl text-slate-900 md:text-24-26-c'
							ref={effMoveFromLeft.ref}
						>
							Experience the
						</div>
						<h3
							className='Gotham-Black pt-2 text-32-36-c font-bold text-primary-semibold md:text-36-40-c'
							ref={effMoveFromRight.ref}
						>
							Power of Rewards
						</h3>
					</div>
					<div className='grid gap-x-6 pt-12 md:grid-cols-3'>
						<div className='box-bg-1 group relative mb-5 gap-y-8 overflow-hidden p-30px-c lg:mb-0'>
							<img
								className='mx-auto'
								src={PowerWhatIsImg}
								alt='Power What Is'
							/>
							<h5 className='Gotham-Black mt-8 text-24-32-c font-black text-primary-semibold'>
								What can it offer
							</h5>
							<p className='mt-8 text-lg'>
								A platform that manages the calculation, assignment and
								redemption of prescribed customer rewards.{' '}
								<strong>PRODUCT</strong> choice, <strong>DESIGN</strong> choice
								& <strong>PERSONALISATION</strong> choice.
							</p>
							{/* shine box */}
							<div className='shine-box-1' />
						</div>
						<div className='box-bg-1 group relative mb-5 gap-y-8 overflow-hidden p-30px-c lg:mb-0'>
							<img className='mx-auto' src={PowerOfferImg} alt='Power Offer' />
							<h5 className='Gotham-Black mt-8 text-24-32-c font-black text-primary-semibold'>
								What is Mber+™
							</h5>
							<p className='mt-8 text-lg'>
								A revolutionary all in one loyalty and rewards ecosystem.
								Transforming the assignment of member rewards. Providing choice
								like never before!
							</p>
							{/* shine box */}
							<div className='shine-box-1' />
						</div>
						<div className='box-bg-1 group relative mb-5 gap-y-8 overflow-hidden p-30px-c lg:mb-0'>
							<img
								className='mx-auto'
								src={PowerDeliveryImg}
								alt='Power Delivery'
							/>
							<h5 className='Gotham-Black mt-8 text-24-32-c font-black text-primary-semibold'>
								How is it delivered
							</h5>
							<p className='mt-8 text-lg'>
								Offered via multiple license types and API / data integrations.
								Complimented by an innovative no risk merchandise solution.
							</p>
							{/* shine box */}
							<div className='shine-box-1' />
						</div>
					</div>
				</div>
			</div>

			<section className='bg-slate-900 py-14'>
				<div className='container'>
					<div className='grid md:grid-cols-2'>
						<div className='relative'>
							<img
								className='h-auto max-w-full'
								src={SupplyProductBgImg}
								alt='Supply Product'
							/>
							<img
								className='absolute top-0 left-0 h-auto max-w-full animate-spin-slow'
								src={SupplyProductSpinImg}
								alt='Supply Product'
							/>
						</div>
						<div
							className='Gotham-Black order-first flex flex-col justify-center pb-10 pl-0 text-center text-24-26-c font-medium uppercase text-white md:order-none md:pb-0 md:pl-16 md:text-left xl:text-48-52-c'
							ref={effMoveFromBottom.ref}
						>
							<p className='text-primary'>
								We Supply
								<br />
								The Product
							</p>
							NO STOCK RISK
						</div>
					</div>
				</div>
			</section>

			<section className='py-14'>
				<div className='container'>
					<div className='grid gap-x-74c gap-y-12 md:grid-cols-2'>
						<div className='gap-y-11'>
							<div className=''>
								<p className='Gotham-Black text-24-26-c text-primary-semibold md:text-32-36-c 2xl:text-42-46-c'>
									Reward Loyalty with Loyalty.
								</p>
								<p className='mt-2 font-bold leading-6 tracking-tight text-gray-bold'>
									Customer experience is essential in driving customer loyalty &
									retention
								</p>
							</div>
							<div className='flex flex-col flex-nowrap gap-25c pt-11 xl:flex-row'>
								<div className='box-bg-1 w-full justify-items-center p-4 text-22-30-c text-slate-700 xl:w-1/2'>
									Loyal customers spend 
									<span className='Gotham-Black text-primary-semibold'>
										67%
									</span>
									 more than new ones
								</div>
								<div className='box-bg-1 w-full p-4 text-22-30-c text-slate-700 xl:w-1/2'>
									On average{' '}
									<span className='Gotham-Black text-primary-semibold'>
										65%
									</span>
									 of a company’s business comes from existing customers
								</div>
							</div>
							<div className='flex flex-col flex-nowrap gap-25c pt-25c xl:flex-row'>
								<div className='box-bg-1 w-full p-4 text-22-30-c text-slate-700 xl:w-55%c'>
									Increasing customer retention by{' '}
									<span className='Gotham-Black text-primary-semibold'>5%</span>{' '}
									increases profits by{' '}
									<span className='Gotham-Black text-primary-semibold'>
										an average of up to 60%
									</span>
								</div>
								<div className='box-bg-1 w-full p-4 text-22-30-c text-slate-700 xl:w-45%c'>
									It costs up to{' '}
									<span className='Gotham-Black text-primary-semibold'>7x</span>{' '}
									more to acquire a new customer than to retain an old one.
								</div>
							</div>
						</div>
						<div>
							<div className='relative'>
								<img
									className='h-auto max-w-full animate-pulse-light'
									src={RewardLoyaltyLightImg}
									alt='Reward Loyalty'
								/>
								<img
									className='absolute top-0 left-0 h-auto max-w-full animate-multiplication'
									src={RewardLoyaltyMultiplicationImg}
									alt='Reward Loyalty'
								/>
								<img
									className='absolute top-0 left-0 h-auto max-w-full animate-multiplication-white'
									src={RewardLoyaltyMultiplicationWhiteImg}
									alt='Reward Loyalty'
								/>
								<img
									className='absolute bottom-0 left-0 h-auto max-w-full animate-multiplication-plus'
									src={RewardLoyaltyPlusImg}
									alt='Reward Loyalty'
								/>
								<img
									className='absolute top-0 left-0 h-auto max-w-full'
									src={RewardLoyaltyBgImg}
									alt='Reward Loyalty'
								/>
							</div>
						</div>
						<p className='text-sm text-slate-600'>Source: www.markinblog.com</p>
					</div>
				</div>
			</section>

			<section className='bg-slate-900 py-14'>
				<div className='container'>
					<div className='grid md:grid-cols-2'>
						<img
							className='mx-auto h-auto max-w-full'
							src={IntuitiveDataImg}
							alt='Intuitive Data'
						/>
						<div className='order-first flex flex-col justify-center pb-10 pl-0 text-center md:order-none md:pb-0 md:pl-16 md:text-left'>
							<p className='Gotham-Black text-24-26-c font-medium text-primary xl:text-36-40-c'>
								Intuitive Data Driven Analysis
							</p>
							<p className='pt-2 leading-6 text-white text-slate-300'>
								Powerful data driven analytics to help you scale operations,
								delivering the rewards your customers want.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='py-14'>
				<div className='container'>
					<div className='gap-y-2 text-center' ref={effHereWhatTitle.ref}>
						<div className='Gotham-Medium text-xl text-slate-900 md:text-24-26-c'>
							Here’s What
						</div>
						<h3 className='Gotham-Black pt-2 text-32-36-c font-bold text-primary-semibold md:text-36-40-c'>
							Platform Users Have To Say
						</h3>
					</div>

					<div className='grid gap-8 pt-16 md:grid-cols-2'>
						<div className='flex flex-col gap-8'>
							<div className='box-bg-2 space-y-8 p-30px-c'>
								<figcaption className='relative flex items-center space-x-3'>
									<Link
										className='absolute top-0 right-0'
										to='https://twitter.com/SmithTexi'
										target='_blank'
									>
										<TwitterIco />
									</Link>
									<img
										className='h-14 w-14 rounded-full'
										src={ClientTexiSmithImg}
										alt='Texi Smith'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>Texi Smith</div>
										<Link
											className='text-slate-500'
											to='https://twitter.com/SmithTexi'
											target='_blank'
										>
											@SmithTexi
										</Link>
									</div>
								</figcaption>
								<p className='mt-8'>
									Ready for the new season. Thanks{' '}
									<Link
										to='https://twitter.com/SydneyFC'
										target='_blank'
										className='underline'
									>
										@SydneyFC
									</Link>{' '}
									for the membership pack full of goodies. Good idea to give you
									a choice.
								</p>
								<button
									type='button'
									className='readmore mt-8'
									onClick={() =>
										readMoreHandler('https://twitter.com/SmithTexi')
									}
								>
									Read More
								</button>
							</div>

							<div className='box-bg-2 space-y-8 p-30px-c'>
								<figcaption className='relative flex items-center space-x-3'>
									<Link
										className='absolute top-0 right-0'
										to='https://twitter.com/WPRaskell'
										target='_blank'
									>
										<TwitterIco />
									</Link>
									<img
										className='h-14 w-14 rounded-full'
										src={ClientWpRaskellImg}
										alt='Wp Raskell'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>Dean Bourne</div>
										<Link
											className='text-slate-500'
											to='https://twitter.com/WPRaskell'
											target='_blank'
										>
											@BourneDean
										</Link>
									</div>
								</figcaption>
								<p className='mt-8'>
									Nice! My 2023 bespoke Membership pack arrived. Really happy.
									Good One{' '}
									<Link
										to='https://twitter.com/Richmond_FC'
										target='_blank'
										className='underline'
									>
										@Richmond_FC
									</Link>
								</p>
								<button
									type='button'
									className='readmore mt-8'
									onClick={() =>
										readMoreHandler('https://twitter.com/WPRaskell')
									}
								>
									Read More
								</button>
							</div>

							<div className='box-bg-2 space-y-8 p-30px-c'>
								<figcaption className='relative flex items-center space-x-3'>
									<Link
										className='absolute top-0 right-0'
										to='https://twitter.com/melsportslover'
										target='_blank'
									>
										<TwitterIco />
									</Link>
									<img
										className='h-14 w-14 rounded-full'
										src={ClientMelissaImg}
										alt='Melissa'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>Melissa</div>
										<Link
											className='text-slate-500'
											to='https://twitter.com/melsportslover'
											target='_blank'
										>
											@Melsportslover
										</Link>
									</div>
								</figcaption>
								<p className='mt-8'>
									This was delivered a couple of weeks ago but have literally
									just had a chance to open it.
									<br />
									<Link
										to='https://twitter.com/SydneyFC'
										target='_blank'
										className='underline'
									>
										@SydneyFC
									</Link>{' '}
									membership pack. Love the choice of items & customization.
									None of my students should be able to take my stuff with my
									name splashed all over them
								</p>
								<button
									type='button'
									className='readmore mt-8'
									onClick={() =>
										readMoreHandler('https://twitter.com/melsportslover')
									}
								>
									Read More
								</button>
							</div>
						</div>
						<div className='flex flex-col gap-8'>
							<div className='box-bg-2 space-y-8 p-30px-c'>
								<figcaption className='relative flex items-center space-x-3'>
									<Link
										className='absolute top-0 right-0'
										to='https://twitter.com/WPRaskell'
										target='_blank'
									>
										<TwitterIco />
									</Link>
									<img
										className='h-14 w-14 rounded-full'
										src={ClientWpRaskellImg}
										alt='Wp Raskell'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>WP Raskell</div>
										<Link
											className='text-slate-500'
											to='https://twitter.com/WPRaskell'
											target='_blank'
										>
											@WPRaskell
										</Link>
									</div>
								</figcaption>

								<p className='mt-8'>
									Just a shout out to{' '}
									<Link
										className='text-slate-500'
										to='https://twitter.com/Richmond_FC'
										target='_blank'
									>
										@Richmond_FC
									</Link>{' '}
									re its new Member's Reward Portal which is a new addition to
									our 2023 membership. There is indeed something for everyone.
									I've loved being able to design my membership pack with so
									many great items. It's a winner! Thank you!
								</p>
								<button
									type='button'
									className='readmore mt-8'
									onClick={() =>
										readMoreHandler('https://twitter.com/WPRaskell')
									}
								>
									Read More
								</button>
							</div>
							<div className='box-bg-2 space-y-8 p-30px-c'>
								<figcaption className='relative flex items-center space-x-3'>
									<Link
										className='absolute top-0 right-0'
										to='https://twitter.com/BrumbiesRugby'
										target='_blank'
									>
										<TwitterIco />
									</Link>
									<img
										className='h-14 w-14 rounded-full'
										src={ClientActBrumbiesImg}
										alt='Act Brumbies'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>ACT Brumbies</div>
										<Link
											className='text-slate-500'
											to='https://twitter.com/BrumbiesRugby'
											target='_blank'
										>
											@BrumbiesRugby
										</Link>
									</div>
								</figcaption>

								<p className='mt-8'>
									A new, revolutionary membership platform! Welcome to eMber+,
									giving our{' '}
									<Link
										className='text-slate-500'
										to='https://twitter.com/hashtag/BrumbiesFamily?src=hashtag_click'
										target='_blank'
									>
										#BrumbiesFamily
									</Link>{' '}
									more choice than ever before!
								</p>
								<button
									type='button'
									className='readmore mt-8'
									onClick={() =>
										readMoreHandler('https://twitter.com/BrumbiesRugby')
									}
								>
									Read More
								</button>
							</div>
							<div className='box-bg-2 space-y-8 p-30px-c'>
								<figcaption className='relative flex items-center space-x-3'>
									<Link
										className='absolute top-0 right-0'
										to='https://twitter.com/SoggFM'
										target='_blank'
									>
										<TwitterIco />
									</Link>
									<img
										className='h-14 w-14 rounded-full'
										src={ClientJasonImg}
										alt='Emma Volkers'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>SOGG</div>
										<Link
											className='text-slate-500'
											to='https://twitter.com/SoggFM'
											target='_blank'
										>
											@SoggFM
										</Link>
									</div>
								</figcaption>
								<p className='mt-8'>
									My membership items from{' '}
									<Link to='https://twitter.com/SydneyFC' target='_blank'>
										@SydneyFC
									</Link>{' '}
									turned up today! Thomas can't wait to go to his first game
									either. What a great idea to choose your own items. Can't wait
									for the season
								</p>
								<button
									type='button'
									className='readmore mt-8'
									onClick={() => readMoreHandler('https://twitter.com/SoggFM')}
								>
									Read More
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className='container'>
					<CarouselBanner />
				</div>
			</section>
		</Fragment>
	);
};

export default Home;
