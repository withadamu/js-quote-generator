let quotes = [
  "Quality is not an act, it is a habit.",
  "Well done is better than well said.",
  "With the new day comes new strength and new thoughts.",
  "Knowing is not enough; we must apply. Willing is not enough; we must do.",
  "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
  "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
  "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
  "The secret of getting ahead is getting started.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Believe you can and you're halfway there.",
  "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
  "The measure of who we are is what we do with what we have."
];

const generateQuote = () => {
  let quoteIndex = Math.floor(Math.random() * (quotes.length));
  document.querySelector(".quote-box").innerText = quotes[quoteIndex];
};