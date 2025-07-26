import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import WhatsAppButtonGreenLarge from "../assets/ChatOnWhatsAppButton/WhatsAppButtonGreenLarge.svg";

const Contact = () => {
  return (
    <div className="border-b border- border-neutral-900 pb-20 flex flex-col items-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="https://mail.google.com/mail/u/0/?fs=1&to=therohit15official@gmail.com&su=SUBJECT&body=Hello+Rohit&tf=cm"
          className=" my-4 border-b"
        >
          {CONTACT.email}
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="https://wa.me/917550189004"
          aria-label="Chat on WhatsApp"
          className=" my-4 border-b"
        >
          <img
            alt="Chat on WhatsApp"
            src={WhatsAppButtonGreenLarge}
            className="mt-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
