import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: 'e4f502c6-345a-4238-8f38-a9b0c17d060c',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: 'c9198ea2-200f-462b-9adc-75a466e3cc56',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
