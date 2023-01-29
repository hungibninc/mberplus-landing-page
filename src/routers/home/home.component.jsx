import { Fragment } from 'react';
import RewardLoyaltyImg from '../../assets/reward-loyalty.png';
import { ReactComponent as YoutubeIco } from '../../assets/ico-youtube.svg';
import PowerWhatIsImg from '../../assets/power-what-is.png';
import PowerOfferImg from '../../assets/power-offer.png';
import PowerDeliveryImg from '../../assets/power-delivery.png';

const Home = () => {
  return (
    <Fragment>
      <section className='bg-black lg:bg-transparent lg:bg-[url("../assets/banner-bg.jpg")] py-8 xl:pt-16'>
        <div className='container flex flex-col lg:flex-row lg:justify-between gap-y-12'>
          <div className='space-y-8'>
            <h3 className='text-white text-32-36-c lg:text-xl xl:text-38-50-c'>
              No Stock Risk{' '}
              <span className='lg:block'>
                Endless Designs & Personalisation
              </span>{' '}
              Flexible & Fully Customisable
            </h3>
            <p className='text-white text-16-28-c'>
              Explore the rewards & loyalty platform behind some of Australia’s
              leading brands.
            </p>
            <button className='flex items-center px-6 py-2 space-x-2 transition duration-150 ease-in-out rounded rounded-md shadow-md bg-primary hover:bg-primary-600 drop-shadow-md aaa hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg'>
              <YoutubeIco />
              <span className='font-bold text-black uppercase Gotham-Medium text-16-28-c'>
                Watch The Video
              </span>
            </button>
          </div>
          <div className='-mx-10 xl:-mx-0 xl:-mr-14 shrink-0'>
            <img
              className='lg:h-96'
              src={RewardLoyaltyImg}
              alt='Reward Loyalty'
            />
          </div>
        </div>
      </section>
      <section className='py-14'>
        <div className='container'>
          <div className='text-center gap-y-2'>
            <div className='text-xl md:text-24-26-c Gotham-Medium text-slate-900'>
              Experience the
            </div>
            <h3 className='pt-2 font-bold text-32-36-c md:text-36-40-c Gotham-Black text-primary-light'>
              Power of Rewards
            </h3>
          </div>
          <div class='pt-12 grid md:grid-cols-3 gap-x-6'>
            <div class='mb-5 lg:mb-0 border-solid border border-slate-200 rounded-lg p-30px-c gap-y-8'>
              <img
                className='mx-auto'
                src={PowerWhatIsImg}
                alt='Power What Is'
              />
              <h5 className='mt-8 font-black text-24-32-c Gotham-Black text-primary-light'>
                What can it offer
              </h5>
              <p class='text-lg mt-8'>
                A platform that manages the calculation, assignment and
                redemption of prescribed customer rewards.{' '}
                <strong>PRODUCT</strong> choice, <strong>DESIGN</strong> choice
                & <strong>PERSONALISATION</strong> choice.
              </p>
            </div>
            <div class='mb-5 lg:mb-0 border-solid border border-slate-200 rounded-lg p-30px-c gap-y-8'>
              <img className='mx-auto' src={PowerOfferImg} alt='Power Offer' />
              <h5 className='mt-8 font-black text-24-32-c Gotham-Black text-primary-light'>
                What is Mber+™
              </h5>
              <p class='text-lg mt-8'>
                A revolutionary all in one loyalty and rewards ecosystem.
                Transforming the assignment of member rewards. Providing choice
                like never before!
              </p>
            </div>
            <div class='mb-5 lg:mb-0 border-solid border border-slate-200 rounded-lg p-30px-c gap-y-8'>
              <img
                className='mx-auto'
                src={PowerDeliveryImg}
                alt='Power Delivery'
              />
              <h5 className='mt-8 font-black text-24-32-c Gotham-Black text-primary-light'>
                How is it delivered
              </h5>
              <p class='text-lg mt-8'>
                Offered via multiple license types and API / data integrations.
                Complimented by an innovative no risk merchandise solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
