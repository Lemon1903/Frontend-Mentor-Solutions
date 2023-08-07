interface IDownloadButtonProps {
  theme: string;
  device: string;
}

export default function DownloadButton(props: IDownloadButtonProps) {
  const { theme, device } = props;
  const colors: { [key: string]: string } = {
    primary: "border-b-primary-dark bg-primary drop-shadow-primary",
    secondary: "border-b-secondary-dark bg-secondary drop-shadow-secondary",
  };

  return (
    <button className={`${colors[theme]} rounded-full border-y-[3px] px-8 py-3 text-lg font-semibold text-white hover:opacity-75 sm:text-xl`}>
      Download for {device}
    </button>
  );
}
