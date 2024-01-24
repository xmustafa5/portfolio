import { Sections } from "@/enums/global";
import ProjectContainer from "../ui/projects/projectContainer";

const Contact = ({ contactSectionRef }: any) => {
  return (
    <div
      className="h-screen bg-red-400"
      id={Sections.CONTACT_SECTION}
      ref={contactSectionRef}
    >
    
    </div>
  );
};

export default Contact;
