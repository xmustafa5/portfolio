import { Sections } from "@/enums/global";
import TitleSection from "../ui/TitleSection";
import { linkedIn ,instagram ,email } from "@/assets/svg/socialMedia";

const Contact = ({ contactSectionRef }: any) => {
  return (
    <div
      className="contact"
      id={Sections.CONTACT_SECTION}
      ref={contactSectionRef}
    > 
      <div className="titlesContact">
        <TitleSection subTitle='Get in touch' title="contact me" />
      </div>
      <div className='iconsSocialMedia'>
        {linkedIn} {instagram} {email}
      </div>
    </div>
  );
};

export default Contact;
