import './NextpageArrow.scss';

interface NextPageProps {
  color?: string;
}
function NextPageArrow(props: NextPageProps) {
  const {color} = props;
  return (
    <svg
      width='20'
      height='14'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18.2306 15.2306C18.2306 15.3638 18.1779 15.4916 18.0844 15.5859L12.6211 21.0832C12.4261 21.2795 12.11 21.2795 11.9153 21.0832C11.7203 20.8869 11.7203 20.5691 11.9153 20.373L17.0258 15.2306L11.9157 10.0879C11.7207 9.89159 11.7207 9.57373 11.9157 9.37762C12.1108 9.18152 12.4267 9.18132 12.6215 9.37762L18.0842 14.8754C18.1779 14.9696 18.2306 15.0974 18.2306 15.2306Z'
        className={`icon-${color}`}
      />
    </svg>
  );
}

NextPageArrow.defaultProps = {
  color: 'primary',
};

export default NextPageArrow;
