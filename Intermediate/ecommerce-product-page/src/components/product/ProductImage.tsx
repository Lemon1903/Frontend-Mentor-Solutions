import { useState } from "react";
import { ProductImages } from "../../assets";
import { useToggleDispatch } from "../../contexts/ToggleContext";
import DirectionButton from "../buttons/DirectionButton";

export default function ProductImage({ children }: any) {
  const [imageIndex, setImageIndex] = useState(0);
  const toggleDispatch = useToggleDispatch();
  const imgWidth = children ? "w-[28rem]" : "";
  const shouldShow = children ? "" : "lg:hidden";

  function handleIndex(value: number) {
    const newIndex = imageIndex + value;
    if (newIndex < 0) {
      setImageIndex(ProductImages.previews.length - 1);
    } else if (newIndex === ProductImages.previews.length) {
      setImageIndex(0);
    } else {
      setImageIndex(newIndex);
    }
  }

  function handleImageClick() {
    if (innerWidth >= 1024) toggleDispatch({ type: "toggleLightbox" });
  }

  return (
    <div className="flex lg:flex-col items-center justify-center lg:gap-8 mobile:overflow-hidden mobile:h-[18.75rem] lg:w-96">
      <div className={`${imgWidth} relative grid place-items-center`}>
        <div className="justify-self-end mb-4">{children}</div>
        <div className="lg:rounded-lg overflow-hidden cursor-pointer">
          <img
            className="duration-200 hover:scale-125"
            src={ProductImages.previews[imageIndex]}
            alt="product image"
            onClick={handleImageClick}
          />
        </div>
        <div
          className={`${shouldShow} absolute flex justify-between mobile:p-4 w-full lg:w-[calc(100%+2.5rem)]`}
        >
          <DirectionButton direction="previous" onClick={handleIndex} />
          <DirectionButton direction="next" onClick={handleIndex} />
        </div>
      </div>
      <div className="mobile:hidden flex gap-8">
        {ProductImages.thumbnails.map((thumbnail, index) => (
          <div
            className="group relative rounded-lg overflow-hidden border-2 border-transparent data-[has-border=true]:border-primary-dark"
            key={index}
            onClick={() => setImageIndex(index)}
            data-has-border={imageIndex === index}
          >
            <div className="absolute left-0 top-0 bg-white w-full h-full opacity-0 group-data-[has-border=true]:opacity-50 group-hover:opacity-50 cursor-pointer" />
            <img src={thumbnail} alt={`thumbnail ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
