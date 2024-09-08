import { FaLinkedin, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Container from "../utils/Container";

export default function Footer() {
  return (
    <Container>
      <footer className=' flex justify-end py-5'>
        <div className=' mr-5'>
          <FaGithub
            size={30}
            className=' hover:cursor-pointer hover:text-primaryColor transition-all'
          />
        </div>
        <div>
          <FaLinkedin
            size={30}
            className=' hover:cursor-pointer hover:text-primaryColor transition-all'
          />
        </div>
      </footer>
    </Container>
  );
}
