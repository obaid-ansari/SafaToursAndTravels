import ContactForm from "../components/Forms/ContactForm";

const ContactModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="contact-overlay p-2" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="position-absolute btn-close top-0 end-0 fs-4 p-3"
          style={{ zIndex: "100000" }}
          onClick={onClose}
        />

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactModal;
