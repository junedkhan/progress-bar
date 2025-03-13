import React from "react";
import "./styles.css";

type TProgressBarProps = {
  value: number;
};

const ProgressBar: React.FC<TProgressBarProps> = ({ value }) => {
  const [percentage, setPercentage] = React.useState<number>(0);

  React.useEffect(() => {
    setTimeout(() => {
      setPercentage(value);
    }, 300);
  }, [value]);

  return (
    <div className="progree-bar-parent">
      <div
        className="progree-bar-child"
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="progress-bar-text">{`${percentage}%`}</div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <ProgressBar value={30} />
      <ProgressBar value={50} />
      <ProgressBar value={100} />
    </div>
  );
}
