import { ReactComponent as Close } from "../../assets/icon-close.svg";
import {
  useToggleDispatch,
  useToggleStates,
} from "../../contexts/ToggleContext";
import ProductImage from "./ProductImage";

export default function ProductLightbox() {
  const toggleStates = useToggleStates();
  const toggleDispatch = useToggleDispatch();

  if (!toggleStates.isLightboxOpen) return null;

  return (
    <div className="z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <ProductImage>
        <Close
          className="fill-white duration-200 hover:fill-primary-dark cursor-pointer"
          onClick={() => toggleDispatch({ type: "toggleLightbox" })}
        />
      </ProductImage>
    </div>
  );
}
