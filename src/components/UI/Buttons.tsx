import styles from "../../scss/components/UI/Buttons.module.sass";

interface ButtonProps {
  onClick: () => void;
  className?: string;
}

const Plus = ({ onClick }: ButtonProps) => {
  return (
    <svg
      onClick={onClick}
      className={styles.button}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#4F0047" />
      <path
        d="M20.9986 14.4645H17.5354V11.0015C17.5354 9.66616 15.4644 9.66616 15.4644 11.0015V14.4645H12.0013C10.6662 14.4645 10.6662 16.5355 12.0013 16.5355H15.4644V19.9985C15.4644 21.3338 17.5354 21.3338 17.5354 19.9985V16.5355H20.9986C22.3338 16.5355 22.3338 14.4645 20.9986 14.4645Z"
        fill="#4F0047"
      />
    </svg>
  );
};

const PlusFilled = ({ onClick }: ButtonProps) => {
  return (
    <svg
      onClick={onClick}
      className={styles.button_filled}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#4F0047" />
      <path
        d="M20.9986 14.4645H17.5354V11.0015C17.5354 9.66616 15.4644 9.66616 15.4644 11.0015V14.4645H12.0013C10.6662 14.4645 10.6662 16.5355 12.0013 16.5355H15.4644V19.9985C15.4644 21.3338 17.5354 21.3338 17.5354 19.9985V16.5355H20.9986C22.3338 16.5355 22.3338 14.4645 20.9986 14.4645Z"
        fill="#EEF2F9"
      />
    </svg>
  );
};

const Minus = ({ onClick }: ButtonProps) => {
  return (
    <svg
      onClick={onClick}
      className={styles.button}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#4F0047" />
      <path
        d="M20.9986 14.0007H17.5354C15.4644 14.0007 17.5 13.9992 15.4644 14.0006L12.0013 14.0007C10.6662 14.0007 10.6662 15.9994 12.0013 15.9994H15.4644C17.5354 15.9993 15.5 16.0008 17.5354 15.9994H20.9986C22.3338 15.9994 22.3338 14.0007 20.9986 14.0007Z"
        fill="#4F0047"
      />
    </svg>
  );
};
const MinusFilled = ({ onClick }: ButtonProps) => {
  return (
    <svg
      onClick={onClick}
      className={styles.button_filled}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#4F0047" />
      <path
        d="M20.9986 14.0007H17.5354C15.4644 14.0007 17.5 13.9992 15.4644 14.0006L12.0013 14.0007C10.6662 14.0007 10.6662 15.9994 12.0013 15.9994H15.4644C17.5354 15.9993 15.5 16.0008 17.5354 15.9994H20.9986C22.3338 15.9994 22.3338 14.0007 20.9986 14.0007Z"
        fill="#EEF2F9"
      />
    </svg>
  );
};

const Like = ({ onClick }: ButtonProps) => {
  return (
    <svg
      onClick={onClick}
      className={styles.like_button}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" stroke="#4F0047" />
      <path
        d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z"
        stroke="#4F0047"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const LikeFilled = ({ onClick }: ButtonProps) => {
  return (
    <svg
      onClick={onClick}
      className={styles.like_button_filled}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="7" fill="#4F0047" />
      <g filter="url(#filter0_d_235_227)">
        <path
          d="M22.5848 12.2231C22.3614 11.7098 22.0392 11.2446 21.6364 10.8536C21.2332 10.4615 20.7579 10.1499 20.2362 9.93573C19.6953 9.71277 19.1151 9.59865 18.5293 9.59999C17.7076 9.59999 16.9058 9.82326 16.2091 10.245C16.0424 10.3459 15.884 10.4567 15.734 10.5774C15.584 10.4567 15.4257 10.3459 15.259 10.245C14.5622 9.82326 13.7605 9.59999 12.9387 9.59999C12.347 9.59999 11.7736 9.71245 11.2318 9.93573C10.7085 10.1507 10.2367 10.46 9.83169 10.8536C9.4283 11.2442 9.10607 11.7094 8.88324 12.2231C8.65155 12.7573 8.5332 13.3246 8.5332 13.9084C8.5332 14.4592 8.64655 15.0331 8.87158 15.6169C9.05993 16.1048 9.32996 16.6109 9.675 17.1219C10.2217 17.9307 10.9735 18.7742 11.9069 19.6293C13.4538 21.0467 14.9856 22.0258 15.0506 22.0655L15.4457 22.3169C15.6207 22.4277 15.8457 22.4277 16.0207 22.3169L16.4158 22.0655C16.4808 22.0241 18.011 21.0467 19.5595 19.6293C20.4929 18.7742 21.2447 17.9307 21.7914 17.1219C22.1364 16.6109 22.4081 16.1048 22.5948 15.6169C22.8198 15.0331 22.9332 14.4592 22.9332 13.9084C22.9349 13.3246 22.8165 12.7573 22.5848 12.2231Z"
          fill="#EEF2F9"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_235_227"
          x="8.5332"
          y="9.59998"
          width="14.4004"
          height="14.8"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_235_227"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_235_227"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const Mark = ({ onClick, className }: ButtonProps) => {
  return (
    <svg
      onClick={onClick}
      className={styles.mark_button + " " + className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#4F0047" />
      <path
        d="M20.0801 18.6155L17.6313 16.1667L20.0801 13.718C21.0243 12.7737 19.5599 11.3093 18.6156 12.2536L16.1669 14.7023L13.7181 12.2535C12.7741 11.3094 11.3097 12.7738 12.2537 13.7178L14.7026 16.1667L12.2538 18.6154C11.3096 19.5596 12.774 21.024 13.7183 20.0798L16.167 17.6311L18.6158 20.0799C19.5599 21.024 21.0243 19.5597 20.0801 18.6155Z"
        fill="#4F0047"
      />
    </svg>
  );
};

export { Like, LikeFilled, Mark, Minus, MinusFilled, Plus, PlusFilled };
