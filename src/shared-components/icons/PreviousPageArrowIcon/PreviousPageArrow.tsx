/** using same css for previous page arrow */
import '../NextpageArrowIcon/NextPageArrow';

interface PrevPageProps {
  color?: string;
}

function PreviousPageArrow(props: PrevPageProps) {
  const {color} = props;
  return (
    <svg
      width='20'
      height='14'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.7694 15.2303C11.7694 15.0971 11.8221 14.9693 11.9156 14.8751L17.3789 9.3777C17.5739 9.18139 17.89 9.18139 18.0847 9.3777C18.2797 9.574 18.2797 9.89187 18.0847 10.088L12.9742 15.2303L18.0843 20.373C18.2793 20.5693 18.2793 20.8872 18.0843 21.0833C17.8892 21.2794 17.5733 21.2796 17.3785 21.0833L11.9158 15.5855C11.8221 15.4913 11.7694 15.3635 11.7694 15.2303Z'
        className={`icon-${color}`}
      />
    </svg>
  );
}

PreviousPageArrow.defaultProps = {
  color: 'primary',
};

export default PreviousPageArrow;
