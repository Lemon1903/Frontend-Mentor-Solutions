import google from "../assets/images/logo-google.png";
import hp from "../assets/images/logo-hp.png";
import ibm from "../assets/images/logo-ibm.png";
import microsoft from "../assets/images/logo-microsoft.png";
import vectorGraphics from "../assets/images/logo-vector-graphics.png";

const images = [google, ibm, microsoft, hp, vectorGraphics];

export default function Brands() {
  return (
    <section className="container flex flex-wrap justify-around py-10 max-lg:gap-16">
      {images.map((image, idx) => (
        <div className="flex items-center justify-center" key={idx}>
          <img src={image} alt="logo" />
        </div>
      ))}
    </section>
  );
}
