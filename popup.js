document.getElementById('epochInput').addEventListener('input', (e) => {
  const val = parseInt(e.target.value);
  const resultDiv = document.getElementById('result');

  if (!val) {
    resultDiv.innerText = "---";
    return;
  }

  // Determine if it's seconds or milliseconds
  // Roughly: if it's > 30,000,000,000, it's likely ms.
  const date = val > 30000000000 ? new Date(val) : new Date(val * 1000);

  if (isNaN(date.getTime())) {
    resultDiv.innerText = "Invalid Date";
  } else {
    resultDiv.innerText = date.toLocaleString();
  }
});