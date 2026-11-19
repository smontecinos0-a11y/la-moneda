// ============================================================================
//  CONFIGURACIÓN DE LA MONEDA  (este archivo es pequeño y se edita a mano)
// ============================================================================
window.LM_CONFIG = {

  // 1) Dirección de tu servidor de Cloudflare (el "portero"). Sin "/" al final.
  //    (Ya está configurada con tu Worker.)
  apiUrl: 'https://lamoneda-api.smontecinos0.workers.dev',

  // 2) Enlace de pago de Mercado Pago (Link de pago de la empresa).
  checkoutUrl: 'https://mpago.la/1WQSaBw',

  // 3) Textos que ve el cliente
  priceLabel: '$4.990',
  contactEmail: 'smontecinos0@gmail.com'
};
