import { FaLinkedin, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Container from "../utils/Container";

export default function Footer() {
  return (
    <Container>
      <footer className=' flex justify-end py-5'>
        <div className=' mr-5'>
          <span title='Link to my portfolio page'>
            <FaGithub
              size={30}
              className=' hover:cursor-pointer hover:text-primaryColor transition-all'
            />
          </span>
        </div>
        <div>
          <span title='Link to my Linkedin profile'>
            <FaLinkedin
              size={30}
              className=' hover:cursor-pointer hover:text-primaryColor transition-all'
            />
          </span>
        </div>
      </footer>
    </Container>
  );
}
