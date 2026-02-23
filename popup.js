// 1. Live Epoch Counter
function updateLiveEpoch() {
  const now = Math.floor(Date.now() / 1000);
  document.getElementById('currentEpoch').innerText = now;
}
setInterval(updateLiveEpoch, 1000);
updateLiveEpoch();

// 2. Tab Switching Logic
document.querySelectorAll('.tab-link').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-link, .tab-content').forEach(el => el.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

// 3. Conversion: Epoch -> Date
document.getElementById('epochInput').addEventListener('input', (e) => {
  const val = parseInt(e.target.value);
  const resultDiv = document.getElementById('resultDate');
  if (!val) { resultDiv.innerText = "---"; return; }

  const date = val > 30000000000 ? new Date(val) : new Date(val * 1000);
  resultDiv.innerText = isNaN(date.getTime()) ? "Invalid Epoch" : date.toLocaleString();
});

// 4. Conversion: Date -> Epoch (Date Picker)
document.getElementById('datePicker').addEventListener('input', (e) => {
  const dateVal = e.target.value;
  const resultDiv = document.getElementById('resultEpoch');
  if (!dateVal) { resultDiv.innerText = "---"; return; }

  const epoch = Math.floor(new Date(dateVal).getTime() / 1000);
  resultDiv.innerHTML = `Seconds: <strong>${epoch}</strong>`;
});

// Click to copy live epoch
document.getElementById('currentEpoch').addEventListener('click', () => {
  navigator.clipboard.writeText(document.getElementById('currentEpoch').innerText);
  alert('Epoch copied!');
});