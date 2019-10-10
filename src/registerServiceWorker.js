if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(swReg => {
      console.log('[SW] registration successfully', swReg.scope);
    })
    .catch(error => {
      console.error('[SW] registration failed', error);
    });
} else {
  console.log('[SW] is not supported in your browser!');
}
