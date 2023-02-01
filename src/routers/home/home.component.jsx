import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RewardLoyaltyImg from '../../assets/reward-loyalty-1.jpg';
import { ReactComponent as TwitterIco } from '../../assets/ico-twitter.svg';
import PowerWhatIsImg from '../../assets/power-what-is.png';
import PowerOfferImg from '../../assets/power-offer.png';
import PowerDeliveryImg from '../../assets/power-delivery.png';
import SupplyProductImg from '../../assets/supply-product.png';
import IntuitiveDataImg from '../../assets/intuitive-data.png';
import ClientActBrumbiesImg from '../../assets/client-act-brumbies.jpg';
import ClientJasonImg from '../../assets/client-jason.jpg';
import ClientMelissaImg from '../../assets/client-melissa.jpg';
import ClientTexiSmithImg from '../../assets/client-texi-smith.jpg';
import ClientWpRaskellImg from '../../assets/client-wp-raskell.jpg';
import CarouselBanner from '../../components/carousel/carousel';
import MainBanner from '../../components/main-banner/main-banner.component';

const Home = () => {
	return (
		<Fragment>
			<MainBanner />
			<section className='py-14'>
				<div className='container'>
					<div className='text-center gap-y-2'>
						<div className='text-xl md:text-24-26-c Gotham-Medium text-slate-900'>
							Experience the
						</div>
						<h3 className='pt-2 font-bold text-32-36-c md:text-36-40-c Gotham-Black text-primary-semibold'>
							Power of Rewards
						</h3>
					</div>
					<div className='pt-12 grid md:grid-cols-3 gap-x-6'>
						<div className='mb-5 lg:mb-0 box-bg-1 p-30px-c gap-y-8'>
							<img
								className='mx-auto'
								src={PowerWhatIsImg}
								alt='Power What Is'
							/>
							<h5 className='mt-8 font-black text-24-32-c Gotham-Black text-primary-semibold'>
								What can it offer
							</h5>
							<p className='text-lg mt-8'>
								A platform that manages the calculation, assignment and
								redemption of prescribed customer rewards.{' '}
								<strong>PRODUCT</strong> choice, <strong>DESIGN</strong> choice
								& <strong>PERSONALISATION</strong> choice.
							</p>
						</div>
						<div className='mb-5 lg:mb-0 box-bg-1 p-30px-c gap-y-8'>
							<img className='mx-auto' src={PowerOfferImg} alt='Power Offer' />
							<h5 className='mt-8 font-black text-24-32-c Gotham-Black text-primary-semibold'>
								What is Mber+™
							</h5>
							<p className='text-lg mt-8'>
								A revolutionary all in one loyalty and rewards ecosystem.
								Transforming the assignment of member rewards. Providing choice
								like never before!
							</p>
						</div>
						<div className='mb-5 lg:mb-0 box-bg-1 p-30px-c gap-y-8'>
							<img
								className='mx-auto'
								src={PowerDeliveryImg}
								alt='Power Delivery'
							/>
							<h5 className='mt-8 font-black text-24-32-c Gotham-Black text-primary-semibold'>
								How is it delivered
							</h5>
							<p className='text-lg mt-8'>
								Offered via multiple license types and API / data integrations.
								Complimented by an innovative no risk merchandise solution.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='py-14 bg-slate-900'>
				<div className='container'>
					<div className='grid md:grid-cols-2'>
						<img
							className='max-w-full h-auto'
							src={SupplyProductImg}
							alt='Supply Product'
						/>
						<div className='text-white Gotham-Black text-24-26-c xl:text-48-52-c font-medium uppercase justify-center order-first md:order-none text-center md:text-left pb-10 md:pb-0 flex flex-col pl-0 md:pl-16'>
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
					<div className='grid md:grid-cols-2 gap-x-74c gap-y-12'>
						<div className='gap-y-11'>
							<div className=''>
								<p className='text-primary-semibold Gotham-Black text-24-26-c md:text-32-36-c 2xl:text-42-46-c'>
									Reward Loyalty with Loyalty.
								</p>
								<p className='mt-2 font-bold tracking-tight leading-6 text-gray-bold'>
									Customer experience is essential in driving customer loyalty &
									retention
								</p>
							</div>
							<div className='flex flex-col xl:flex-row flex-nowrap gap-25c pt-11'>
								<div className='w-full xl:w-1/2 p-4 box-bg-1 text-22-30-c text-slate-700 justify-items-center'>
									Loyal customers spend 
									<span className='text-primary-semibold Gotham-Black'>
										67%
									</span>
									 more than new ones
								</div>
								<div className='w-full xl:w-1/2 p-4 box-bg-1 text-22-30-c text-slate-700'>
									On average{' '}
									<span className='text-primary-semibold Gotham-Black'>
										65%
									</span>
									 of a company’s business comes from existing customers
								</div>
							</div>
							<div className='flex flex-col xl:flex-row flex-nowrap gap-25c pt-25c'>
								<div className='w-full xl:w-55%c p-4 box-bg-1 text-22-30-c text-slate-700'>
									Increasing customer retention by{' '}
									<span className='text-primary-semibold Gotham-Black'>5%</span>{' '}
									increases profits by{' '}
									<span className='text-primary-semibold Gotham-Black'>
										an average of up to 60%
									</span>
								</div>
								<div className='w-full xl:w-45%c p-4 box-bg-1 text-22-30-c text-slate-700'>
									It costs up to{' '}
									<span className='text-primary-semibold Gotham-Black'>7x</span>{' '}
									more to acquire a new customer than to retain an old one.
								</div>
							</div>
						</div>
						<img
							className='max-w-full h-auto'
							src={RewardLoyaltyImg}
							alt='Reward Loyalty'
						/>
						<p className='text-sm text-slate-600'>Source: www.markinblog.com</p>
					</div>
				</div>
			</section>

			<section className='py-14 bg-slate-900'>
				<div className='container'>
					<div className='grid md:grid-cols-2'>
						<img
							className='max-w-full h-auto mx-auto'
							src={IntuitiveDataImg}
							alt='Intuitive Data'
						/>
						<div className='justify-center order-first md:order-none text-center md:text-left pb-10 md:pb-0 flex flex-col pl-0 md:pl-16'>
							<p className='Gotham-Black text-primary text-24-26-c xl:text-36-40-c font-medium'>
								Intuitive Data Driven Analysis
							</p>
							<p className='text-white text-slate-300 leading-6 pt-2'>
								Powerful data driven analytics to help you scale operations,
								delivering the rewards your customers want.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='py-14'>
				<div className='container'>
					<div className='text-center gap-y-2'>
						<div className='text-xl md:text-24-26-c Gotham-Medium text-slate-900'>
							Here’s What
						</div>
						<h3 className='pt-2 font-bold text-32-36-c md:text-36-40-c Gotham-Black text-primary-semibold'>
							Platform Users Have To Say
						</h3>
					</div>

					<div className='grid md:grid-cols-2 pt-16 gap-8'>
						<div className='flex flex-col gap-8'>
							<div className='box-bg-2 p-30px-c space-y-8'>
								<figcaption className='flex items-center space-x-3 relative'>
									<Link className='absolute top-0 right-0' to='/'>
										<TwitterIco />
									</Link>
									<img
										className='rounded-full w-14 h-14'
										src={ClientTexiSmithImg}
										alt='Texi Smith'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>Texi Smith</div>
										<Link className='text-slate-500' to='/'>
											@SmithTexi
										</Link>
									</div>
								</figcaption>
								<p className='mt-8'>
									Ready for the new season. Thanks{' '}
									<Link to='/' className='underline'>
										@SydneyFC
									</Link>{' '}
									for the membership pack full of goodies. Good idea to give you
									a choice.
								</p>
								<button type='button' className='mt-8 readmore'>
									Read More
								</button>
							</div>

							<div className='box-bg-2 p-30px-c space-y-8'>
								<figcaption className='flex items-center space-x-3 relative'>
									<Link className='absolute top-0 right-0' to='/'>
										<TwitterIco />
									</Link>
									<img
										className='rounded-full w-14 h-14'
										src={ClientWpRaskellImg}
										alt='Wp Raskell'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>Dean Bourne</div>
										<Link className='text-slate-500' to='/'>
											@BourneDean
										</Link>
									</div>
								</figcaption>
								<p className='mt-8'>
									Nice! My 2023 bespoke Membership pack arrived. Really happy.
									Good One{' '}
									<Link to='/' className='underline'>
										@Richmond_FC
									</Link>
								</p>
								<button type='button' className='mt-8 readmore'>
									Read More
								</button>
							</div>

							<div className='box-bg-2 p-30px-c space-y-8'>
								<figcaption className='flex items-center space-x-3 relative'>
									<Link className='absolute top-0 right-0' to='/'>
										<TwitterIco />
									</Link>
									<img
										className='rounded-full w-14 h-14'
										src={ClientMelissaImg}
										alt='Melissa'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>Melissa</div>
										<Link className='text-slate-500' to='/'>
											@Melsportslover
										</Link>
									</div>
								</figcaption>
								<p className='mt-8'>
									Nice! My 2023 bespoke Membership pack arrived. Really happy.
									Good One{' '}
									<Link to='/' className='underline'>
										@Richmond_FC
									</Link>
								</p>
								<button type='button' className='mt-8 readmore'>
									Read More
								</button>
							</div>
						</div>
						<div className='flex flex-col gap-8'>
							<div className='box-bg-2 p-30px-c space-y-8'>
								<figcaption className='flex items-center space-x-3'>
									<img
										className='rounded-full w-14 h-14'
										src={ClientWpRaskellImg}
										alt='Wp Raskell'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>WP Raskell</div>
										<Link className='text-slate-500' to='/'>
											@WPRaskell
										</Link>
									</div>
								</figcaption>

								<p className='mt-8'>
									Just a shout out to @Richmond_FC re its new Member's Reward
									Portal which is a new addition to our 2023 membership. There
									is indeed something for everyone. I've loved being able to
									design my membership pack with so many great items. It's a
									winner! Thank you!
								</p>
								<button type='button' className='mt-8 readmore'>
									Read More
								</button>
							</div>
							<div className='box-bg-2 p-30px-c space-y-8'>
								<figcaption className='flex items-center space-x-3'>
									<img
										className='rounded-full w-14 h-14'
										src={ClientActBrumbiesImg}
										alt='Act Brumbies'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>ACT Brumbies</div>
										<Link className='text-slate-500' to='/'>
											@BrumbiesRugby
										</Link>
									</div>
								</figcaption>

								<p className='mt-8'>
									A new, revolutionary membership platform! Welcome to eMber+,
									giving our #BrumbiesFamily more choice than ever before!
								</p>
								<button type='button' className='mt-8 readmore'>
									Read More
								</button>
							</div>
							<div className='box-bg-2 p-30px-c space-y-8'>
								<figcaption className='flex items-center space-x-3'>
									<img
										className='rounded-full w-14 h-14'
										src={ClientJasonImg}
										alt='Emma Volkers'
									/>
									<div className='text-slate-800'>
										<div className='Gotham-Black'>Emma Volkers</div>
										<Link className='text-slate-500' to='/'>
											@Volkers
										</Link>
									</div>
								</figcaption>
								<p className='mt-8'>
									My membership items from <Link to='/'>@SydneyFC</Link> turned
									up today! Thomas can't wait to go to his first game either.
									What a great idea to choose your own items. Can't wait for the
									season
								</p>
								<button type='button' className='mt-8 readmore'>
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
