export default function Statistics(data) {
  const { good, neutral, bad, total, positivePercentage } = data;
  return (
    <>
      <p>Statistics</p>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        <li>Total {total()}</li>
        <li>Positive Feedback Percentage {positivePercentage()}%</li>
      </ul>
    </>
  );
}
