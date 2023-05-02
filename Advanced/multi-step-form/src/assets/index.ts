import Advanced from "./images/icon-advanced.svg";
import Arcade from "./images/icon-arcade.svg";
import Checkmark from "./images/icon-checkmark.svg";
import Pro from "./images/icon-pro.svg";
import Thankyou from "./images/icon-thank-you.svg";

interface IIcon {
  [key: string]: string;
  Advanced: string;
  Arcade: string;
  Pro: string;
  Checkmark: string;
  Thankyou: string;
}

const Icons: IIcon = {
  Advanced,
  Arcade,
  Pro,
  Checkmark,
  Thankyou,
};

export default Icons;
