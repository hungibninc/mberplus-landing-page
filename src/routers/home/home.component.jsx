import { Fragment } from 'react';
import ImgRewardLoyalty from '../../assets/reward-loyalty.png';
import { ReactComponent as IcoYoutube } from '../../assets/ico-youtube.svg';

const Home = () => {
  return (
    <Fragment>
      <section className='bg-black '>
        <div className='container flex flex-col lg:flex-row lg:justify-between gap-y-12'>
          <div className='pt-8 space-y-6'>
            <h3 className='text-white text-32-c lg:text-xl xl:text-38-c'>
              No Stock Risk{' '}
              <span className='lg:block'>
                Endless Designs & Personalisation
              </span>{' '}
              Flexible & Fully Customisable
            </h3>
            <p className='text-white text-16-c'>
              Explore the rewards & loyalty platform behind some of Australia’s
              leading brands.
            </p>
            <button className='flex items-center px-6 py-2 space-x-2 transition duration-150 ease-in-out rounded rounded-md shadow-md bg-primary hover:bg-primary-600 drop-shadow-md aaa hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg'>
              <IcoYoutube />
              <span className='font-bold text-black uppercase Gotham-Medium text-16-c'>
                Watch The Video
              </span>
            </button>
          </div>
          <div className='-mx-10 xl:-mx-0 xl:-mr-14 shrink-0'>
            <img
              className='lg:h-96'
              src={ImgRewardLoyalty}
              alt='Reward Loyalty'
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
