interface CloseIconProps {
  fill?: string;
  width?: string;
  height?: string;
}

function CloseIcon({fill, width, height}: CloseIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.41531 7.9999L15.707 1.70838C16.0977 1.31772 16.0977 0.683978 15.707 0.293312C15.3159 -0.0977707 14.6842 -0.0977707 14.2931 0.293312L8.00021 6.58483L1.70853 0.293312C1.31744 -0.0977707 0.6841 -0.0977707 0.293007 0.293312C-0.097669 0.683978 -0.097669 1.31772 0.293007 1.70838L6.58635 7.9999L0.293007 14.2914C-0.097669 14.6825 -0.097669 15.3158 0.293007 15.7069C0.488554 15.902 0.74414 16 0.999726 16C1.25573 16 1.51298 15.902 1.70853 15.7069L8.00021 9.41538L14.2931 15.7069C14.4887 15.902 14.7443 16 15.0003 16C15.2559 16 15.5114 15.902 15.707 15.7069C16.0977 15.3158 16.0977 14.6825 15.707 14.2914L9.41531 7.9999Z'
        fill={fill}
      />
    </svg>
  );
}

export default CloseIcon;

CloseIcon.defaultProps = {
  fill: '#000000',
  width: '12',
  height: '12',
};
