import './ProgressBar.scss';
import { memo, useCallback, useMemo } from 'react';

export interface ProgressBarProps {
  bgColor: 'primary' | 'secondary' | 'warning' | 'danger' | 'info' | 'success';
  progress: number;
  showProgressPercentage?: boolean;
  total?: number;
}

function ProgressBar(props: ProgressBarProps) {
  const { bgColor, progress, showProgressPercentage, total } = props;

  const totalValue = useMemo(() => total as number, [total]);

  const validProgress = useCallback(
    (progressValue: number) => {
      let progressNumber;
      if (progressValue <= totalValue && progressValue >= 0) {
        progressNumber = progressValue;
      } else if (progressValue < 0) {
        progressNumber = 0;
      } else {
        progressNumber = totalValue;
      }
      return progressNumber;
    },
    [totalValue]
  );

  const percentageValue = useMemo(
    () => Math.floor((validProgress(progress) / totalValue) * 100),
    [totalValue, validProgress, progress]
  );

  return (
    <div>
      <div data-testid="progress-bar" className="progress-container">
        <div data-testid="pro-bg" className={`w-${percentageValue} bg-${bgColor} br-inherit`}>
          <span data-testid="prog-percent" className="fw-7 text-light p-1">
            {showProgressPercentage && `${percentageValue}%`}
          </span>
        </div>
      </div>
    </div>
  );
}

ProgressBar.defaultProps = {
  showProgressPercentage: false,
  total: 100,
};
export default memo(ProgressBar);
