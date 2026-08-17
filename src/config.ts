export const siteConfig = {
  global: {
    priceCurrent: '1 695',
    priceOld: '2 450',
    currency: 'грн',
    telegram: {
      botToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '',
      chatIds: (import.meta.env.VITE_TELEGRAM_CHAT_IDS || '').split(','),
    }
  },
  layout: [
    { name: 'Calculator' },
    { name: 'Footer' }
  ]
};
