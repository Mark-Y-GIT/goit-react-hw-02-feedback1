import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      key={option}
      name={option}
      type="button"
      className={s.btn}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
}
