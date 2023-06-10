import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <svg
        className="text-orange-500 stroke-current mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="2" y="8" width="9" height="4" rx="2" fill="black" />
        <rect x="8" y="8" width="9" height="4" rx="2" fill="orange" />

        <rect x="6" y="15" width="13" height="4" rx="2" fill="black" />
        <rect x="12" y="15" width="10" height="4" rx="2" fill="orange" />
      </svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
