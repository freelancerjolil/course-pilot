import Banner from './Banner';
import CoursePlatform from './CoursePlatform';
import Headline from './Headline';
import PopularInsights from './PopularInsights';
import Review from './Review';
import StudentSuccessStories from './StudentSuccessStories';
import TestimonialSection from './TestimonialSection';

const HomePage = () => {
  return (
    <div>
      <div>
        <Banner />
        <Headline />
        <CoursePlatform></CoursePlatform>
        <Review />
        <PopularInsights></PopularInsights>
        {/* <StatsSection /> */}
        <StudentSuccessStories></StudentSuccessStories>
        <TestimonialSection></TestimonialSection>
      </div>
    </div>
  );
};

export default HomePage;
