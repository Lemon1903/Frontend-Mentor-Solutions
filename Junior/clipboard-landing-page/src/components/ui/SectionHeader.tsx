import { ReactNode } from "react";

export interface IHeader {
  heading: string;
  text: string;
}

type ThemeKey = "large" | "small" | "xsmall";

interface ISectionHeaderProps extends IHeader {
  theme: ThemeKey;
  children?: ReactNode;
}

interface ITheme {
  [key: string]: string;
  h1: string;
  p: string;
}

export default function SectionHeader(props: ISectionHeaderProps) {
  const { heading, text, theme, children } = props;
  const themes: { [key: string]: ITheme } = {
    large: {
      h1: "text-3xl sm:text-4xl",
      p: "sm:text-xl",
    },
    small: {
      h1: "text-2xl sm:text-3xl",
      p: "sm:text-lg",
    },
    xsmall: {
      h1: "text-xl",
      p: "sm:leading-relaxed",
    },
  };

  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <div className="space-y-4 px-1">
        <h1 className={`${themes[theme].h1} font-semibold text-neutral-dark`}>
          {heading}
        </h1>
        <p className={`${themes[theme].p} text-neutral`}>{text}</p>
      </div>
      {children}
    </div>
  );
}
