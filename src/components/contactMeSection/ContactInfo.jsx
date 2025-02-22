import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="abhishek.shram1998r@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7906399358" Image={FiPhone} />
      <SingleInfo text="Uttrakhand" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
