import ProfilePicture from "../../components/ProfilePicture";
import SubTitle from "../../components/SubTitle";
import AboutMe from "../../components/AboutMe";

const AboutMePage = () => {
  return (
    <div>
      <div className="main-content">
        <ProfilePicture />
        <div>
          <SubTitle />
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
