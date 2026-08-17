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
    { name: 'Hero' },
    { name: 'VideoSection' },
    { name: 'InlineFormBlock', props: { id: 'cta-1' } },
    { name: 'ProblemSolution' },
    { name: 'HorizontalVideoSection' },
    { name: 'InlineFormBlock', props: { id: 'cta-2' } },
    { name: 'BeforeAfter' },
    { name: 'UsageGallery' },
    { name: 'InlineFormBlock', props: { id: 'cta-3' } },
    { name: 'DeepDive' },
    { name: 'Benefits' },
    { name: 'InlineFormBlock', props: { id: 'cta-4' } },
    { name: 'Equipment' },
    { name: 'SocialProof' },
    { name: 'FinalCTA' }
  ]
};
