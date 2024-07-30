
document.getElementById('downloadLink').addEventListener('click', function(event) {
  event.preventDefault();

  const pdfUrl = '/Portfolio-Website-Template-main/pdf/Portfolio.pdf';
  const pdfName = 'Portfolio.pdf';

  fetch(pdfUrl)
    .then(response => response.blob())
    .then(blob => {
      saveAs(blob, pdfName);
    })
    .catch(error => {
      console.error('Error downloading the PDF', error);
    });
});
