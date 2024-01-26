import { Sections } from "@/enums/global";
import TitleSection from "../ui/TitleSection";
import { linkedIn, instagram, email as emailIcons } from "@/assets/svg/socialMedia";
const Contact = ({ contactSectionRef }: any) => {
  const email = "musmoh73@gmail.com";
  const subject = "Hello";
  const body = "I'm interested in your services. Please contact me.";

  return (
    <div
      className="contact"
      id={Sections.CONTACT_SECTION}
      ref={contactSectionRef}
    >
      <div className="titlesContact">
        <TitleSection subTitle="Get in touch" title="contact me" />
      </div>
      <div className="iconsSocialMedia">
        <a
          href="https://www.linkedin.com/in/mustafa-mohammed1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkedIn}
        </a>
        <a
          href="https://www.instagram.com/000.4o/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {instagram}
        </a>
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>
          {emailIcons}
        </a>
      </div>
    </div>
  );
};

export default Contact;
