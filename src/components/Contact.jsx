import { useRef, useState } from "react";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";

const WHATSAPP_NUMBER = "1234567890"; // Replace with your WhatsApp number (international format, no +)

const GOOGLE_FORM_URL = "https://forms.gle/1uQ6vK8Q9w6z8QnA7"; // Sample Google Form URL

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10 flex-col gap-7">
              <div className="w-full mb-6">
                <p className="text-sm text-gray-400 mb-2">
                  Want to book a session? Fill out our quick form!
                </p>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button group w-full mb-4 flex items-center justify-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="bg-circle" />
                  <p className="text">Book a Session</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </a>
              </div>
              <div className="w-full">
                <p className="text-sm text-gray-400 mb-2">
                  Or prefer chatting instantly? Reach us on WhatsApp!
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button group w-full flex items-center justify-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="bg-circle" />
                  <p className="text">Let's Chat in WhatsApp</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
