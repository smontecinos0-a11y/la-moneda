// ============================================================================
//  CONFIGURACIÓN DE LA MONEDA  (este archivo es pequeño y se edita a mano)
// ============================================================================
window.LM_CONFIG = {

  // 1) Dirección de tu servidor de Cloudflare (el "portero"). Sin "/" al final.
  //    (Ya está configurada con tu Worker.)
  apiUrl: 'https://lamoneda-api.smontecinos0.workers.dev',

  // 2) Enlace de compra de Lemon Squeezy (Compartir → Checkout Link).
  checkoutUrl: 'https://historiasqueeligen.lemonsqueezy.com/checkout/buy/cf664e33-828f-4b7e-9477-6334e133f881',

  // 3) MODO PRUEBA (como está ahora).
  //    AL EMPEZAR A VENDER DE VERDAD, cambiar estas dos líneas:
  //      - productIds: poner el id del producto REAL (el de modo en vivo)
  //      - allowTestKeys: poner false
  productIds: [1493227],
  allowTestKeys: true,

  // 4) Textos que ve el cliente
  priceLabel: '$4.990',
  contactEmail: 'smontecinos0@gmail.com'
};
