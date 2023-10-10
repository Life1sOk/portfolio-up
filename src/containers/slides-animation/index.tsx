import BusinessSlide from "./ui/business";
import ECommerce from "./ui/e-commerce";
import BlogSlide from "./ui/blogs";
import PersonalSlide from "./ui/personal";

import { SlidesContainer, SlidesWrapper, BackCheck } from "./index.style";

const Slides = () => {
  return (
    <SlidesContainer>
      <BackCheck />
      <SlidesWrapper>
        <BusinessSlide />
        <ECommerce />
      </SlidesWrapper>
      <SlidesWrapper>
        <BlogSlide />
        <PersonalSlide />
      </SlidesWrapper>
    </SlidesContainer>
  );
};

export default Slides;
