import { Link } from "react-router-dom";
import styles from "../../scss/components/UI/NotFoundSection.module.sass";

interface NotFoundSectionProps {
  message1: string;
  message2: string;
  face: JSX.Element;
}

const NotFoundSection = ({
  message1,
  message2,
  face,
}: NotFoundSectionProps) => {
  return (
    <div className={styles.section}>
      {face}
      <b>{message1}</b>
      <span>{message2}</span>
      <Link to={"/"} className={styles.section__button}>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_607_199)">
            <path
              d="M14.7143 7H1"
              stroke="#EEF2F9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 13L1 7L7 1"
              stroke="#EEF2F9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_607_199">
              <rect width="16" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>Вернуться</p>
      </Link>
    </div>
  );
};

export default NotFoundSection;
