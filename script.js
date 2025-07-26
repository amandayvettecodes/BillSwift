document.getElementById('downloadBtn').addEventListener('click', async function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const businessName = document.getElementById('businessName').value;
  const clientName = document.getElementById('clientName').value;
  const invoiceNumber = document.getElementById('invoiceNumber').value;
  const description = document.getElementById('description').value;
  const quantity = parseFloat(document.getElementById('quantity').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const tax = parseFloat(document.getElementById('tax').value);

  const subtotal = quantity * rate;
  const taxAmount = subtotal * (tax / 100);
  const total = subtotal + taxAmount;

  document.getElementById('total').value = total.toFixed(2);

  doc.setFontSize(18);
  doc.text('Invoice', 90, 20);
  doc.setFontSize(12);
  doc.text(`Business: ${businessName}`, 20, 40);
  doc.text(`Client: ${clientName}`, 20, 50);
  doc.text(`Invoice #: ${invoiceNumber}`, 20, 60);
  doc.text(`Description: ${description}`, 20, 70);
  doc.text(`Quantity: ${quantity}`, 20, 80);
  doc.text(`Rate: $${rate.toFixed(2)}`, 20, 90);
  doc.text(`Tax: ${tax.toFixed(2)}%`, 20, 100);
  doc.text(`Total: $${total.toFixed(2)}`, 20, 110);

  doc.save(`invoice_${invoiceNumber}.pdf`);
});
