// Update the live clock
function updateLiveEpoch() {
  const now = Math.floor(Date.now() / 1000);
  document.getElementById('currentEpoch').innerText = now;
}

setInterval(updateLiveEpoch, 1000);
updateLiveEpoch();

// Handle the conversion logic
document.getElementById('epochInput').addEventListener('input', (e) => {
  const val = parseInt(e.target.value);
  const resultDiv = document.getElementById('result');

  if (!val) {
    resultDiv.innerText = "---";
    resultDiv.classList.remove('active');
    return;
  }

  // Threshold logic for seconds vs milliseconds
  const date = val > 30000000000 ? new Date(val) : new Date(val * 1000);

  if (isNaN(date.getTime())) {
    resultDiv.innerText = "Invalid Epoch";
    resultDiv.style.color = "#e74c3c";
  } else {
    resultDiv.innerText = date.toLocaleString();
    resultDiv.style.color = "#2c3e50";
    resultDiv.classList.add('active');
  }
});

// Optional: Click the live epoch to copy it
document.getElementById('currentEpoch').addEventListener('click', () => {
  const text = document.getElementById('currentEpoch').innerText;
  navigator.clipboard.writeText(text);
});