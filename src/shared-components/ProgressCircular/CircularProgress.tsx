import '../../utils/main.scss';
import './CircularProgress.scss';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';

export interface CircularProgressProps {
  /** the full width and height of the SVG */
  size?: number;
  /** show progress or not */
  showProgressPercent?: boolean;
  /** the circular progress value */
  progress: number;
  /** the width (thickness) of the circles */
  strokeWidth?: number;
  /** the stroke color of the second circle */
  progressColor?: string;
  /** total value  */
  total?: number;
}

function CircularProgress(props: CircularProgressProps) {
  const [offset, setOffset] = useState(0);

  const {
    size = 200,
    progress,
    strokeWidth = 10,
    progressColor = '#0d6efd',
    total = 100,
    showProgressPercent = true,
  } = props;

  const totalValue = useMemo(() => total, [total]);

  const center = useMemo(() => size / 2, [size]);

  const radius = useMemo(() => size / 2 - strokeWidth / 2, [size, strokeWidth]);
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  const validProgress = useCallback(
    (progressValue: number) => {
      let ProgressNumber;
      if (progressValue <= totalValue && progressValue >= 0) {
        ProgressNumber = progressValue;
      } else if (progressValue < 0) {
        ProgressNumber = 0;
      } else {
        ProgressNumber = totalValue;
      }
      return ProgressNumber;
    },
    [totalValue]
  );

  const percentageValue = useMemo(
    () => Math.floor((validProgress(progress) / totalValue) * 100),
    [validProgress, progress, totalValue]
  );

  useEffect(() => {
    const progressOffset = ((totalValue - validProgress(progress)) / totalValue) * circumference;
    setOffset(progressOffset);
  }, [circumference, progress, validProgress, totalValue]);

  return (
    <div className="pro-cir" data-testid="pro-cir-warper">
      <svg className="pro-cir-svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          style={{ stroke: `${progressColor}` }}
          className="svg-circle"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          data-content={percentageValue}
        />
      </svg>
      {showProgressPercent && (
        <p className="progress-text" data-testid="progress-percent">
          {percentageValue}%
        </p>
      )}
    </div>
  );
}

export default memo(CircularProgress);
