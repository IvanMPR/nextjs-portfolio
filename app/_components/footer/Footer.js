import { FaLinkedin, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Container from "../utils/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <Container>
      <footer className=' flex justify-end py-5'>
        <div className=' mr-5'>
          <span title='Link to my portfolio page' className='shadow-custom'>
            <Link href='https://github.com/IvanMPR'>
              <FaGithub
                size={30}
                className=' hover:cursor-pointer hover:text-primaryColor transition-all'
              />
            </Link>
          </span>
        </div>
        <div>
          <span title='Link to my Linkedin profile'>
            <Link href='https://www.linkedin.com/in/ivanmiceta'>
              <FaLinkedin
                size={30}
                className=' hover:cursor-pointer hover:text-primaryColor transition-all'
              />
            </Link>
          </span>
        </div>
      </footer>
    </Container>
  );
}
