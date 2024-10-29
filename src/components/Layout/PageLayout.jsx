import BulletHeader from "../../components/Elements/BulletHeader";
import SlidingParagraph from "../../components/Elements/SlidingParagraph";
import CenterPageContent from "../../components/Layout/CenterPageContent";
import PageBanner from "../../components/Special/PageBanner";

const PageLayout = ({ children, heading, lowImg, highImg, navigation }) => {
  return (
    <div>
      <PageBanner
        heading={heading}
        highImg={highImg}
        lowImg={lowImg}
        navigation={navigation}
      />
      <CenterPageContent>
        <SlidingParagraph>
          <BulletHeader id={""}>{heading}</BulletHeader>
          {children}
        </SlidingParagraph>
      </CenterPageContent>
    </div>
  );
};
export default PageLayout;
