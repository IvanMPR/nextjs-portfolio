import Image from "next/image";
import IvanCLP from "@/public/IvanCLP.png";

export default function HeroImage() {
  return <Image src={IvanCLP} alt="Ivan's image" />;
}
