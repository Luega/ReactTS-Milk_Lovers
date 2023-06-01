import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Contact = () => {
  return (
    <main>
      <section className="contact pt-10 flex flex-col items-center">
        <h1 className="my__TextColorRegularDark mb-4 text-3xl font-bold">
          Contact:
        </h1>
        <ul className="mb-5 flex justify-center text-3xl">
          <li>
            <a
              className="my__link p-2"
              href="https://github.com/Luega"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="text- inline me-2" />
            </a>
          </li>
          <li>
            <a
              className="my__link p-2"
              href="https://linkedin.com/in/martinelliluca"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin className="inline me-2" />
            </a>
          </li>
          <li>
            <a
              className="my__link p-2"
              href="mailto:lucamartinelli.developer@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="inline me-2" />
            </a>
          </li>
        </ul>
        <img
          className="h-80 my-2 rounded-xl"
          src="https://images.pexels.com/photos/1104756/pexels-photo-1104756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Happy Milk cartoon"
        />
      </section>
    </main>
  );
};

export default Contact;
