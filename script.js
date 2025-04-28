// generate a random 16-byte hex TX ID
function randomTxId() {
  let s = '';
  for (let i = 0; i < 16; i++) {
    s += Math.floor(Math.random() * 16).toString(16);
  }
  return '0x' + s;
}

function generateReceipt() {
  const coin    = document.getElementById('coin').value;
  const address = document.getElementById('address').value.trim() || '—';
  const amount  = document.getElementById('amount').value.trim() || '—';
  const memo    = document.getElementById('memo').value.trim() || '—';
  const status  = document.getElementById('status').value;

  // Font Awesome icons for statuses
  const logos = {
    sent:    '<i class="fa-solid fa-circle-check fa-3x"></i>',
    pending: '<i class="fa-solid fa-hourglass-half fa-3x"></i>',
    failed:  '<i class="fa-solid fa-circle-xmark fa-3x"></i>'
  };
  const texts  = {
    sent:    'Payment Sent',
    pending: 'Payment Pending',
    failed:  'Payment Failed'
  };
  const colors = {
    sent:    '#4CAF50',
    pending: '#FFA500',
    failed:  '#FF0000'
  };

  // swap pages
  document.getElementById('form-page').style.display    = 'none';
  const receiptEl = document.getElementById('receipt-page');
  receiptEl.style.display = 'block';

  // inject receipt HTML
  receiptEl.innerHTML = `
    <div class="header">Crypto Wallet Receipt</div>
    <div class="status">
      ${logos[status]}
      <h3 style="color: ${colors[status]}; margin-top: 10px;">
        ${texts[status]}
      </h3>
    </div>
    <div class="receipt-info">
      <div class="info-item"><strong>Transaction ID:</strong> ${randomTxId()}</div>
      <div class="info-item"><strong>Date:</strong> ${new Date().toLocaleString()}</div>
      <div class="info-item"><strong>Amount:</strong> ${amount} ${coin}</div>
      <div class="info-item"><strong>Currency:</strong> ${coin}</div>
      <div class="info-item"><strong>Wallet Address:</strong> ${address}</div>
      <div class="info-item"><strong>Payment Note:</strong> ${memo}</div>
    </div>
    <div class="receipt-footer">
      <button onclick="goBack()">Generate Another</button>
    </div>
  `;
}

function goBack() {
  document.getElementById('receipt-page').style.display = 'none';
  document.getElementById('form-page').style.display    = 'block';
}
