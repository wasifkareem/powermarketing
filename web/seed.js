import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'yl1pn884',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-01',
  token: process.env.SANITY_API_TOKEN
})

async function seed() {
  const doc = {
    _id: 'homePage',
    _type: 'homePage',
    title: 'Power Marketing International — Boost Your Revenue with Expert Online Marketing',
    hero: {
      heading: 'Harness the power of online marketing to boost your revenue & ROI',
      subheading: 'We design beautiful websites and execute data-driven marketing strategies that turn clicks into customers and visitors into revenue.',
      ctaText: 'Get Your Free Website Checkup'
    },
    about: {
      heading: 'Is your website working as hard as you are?',
      text: "Your website is often the first impression customers have of your business. At Power Marketing International, we ensure it's not just a digital brochure — it's your most powerful sales tool. We combine custom web design with proven SEO and targeted marketing to help businesses like yours grow online, attract more customers, and increase revenue."
    },
    services: [
      {
        _key: 'web-design',
        title: 'Custom Web Design',
        description: 'We build stunning, mobile-responsive websites tailored to your brand that look professional and are designed to convert visitors into paying customers.',
        icon: 'layout'
      },
      {
        _key: 'seo',
        title: 'SEO Optimization',
        description: 'Improve your search engine rankings and get found by the customers who are actively looking for your products and services online.',
        icon: 'search'
      },
      {
        _key: 'social-media',
        title: 'Social Media Marketing',
        description: 'Build brand awareness, engage your audience, and drive traffic to your website across the social platforms that matter most to your business.',
        icon: 'share'
      },
      {
        _key: 'email',
        title: 'Email Marketing',
        description: 'Nurture your leads and drive repeat business with targeted, automated email campaigns that keep your brand top of mind.',
        icon: 'mail'
      }
    ],
    process: [
      {
        _key: 'step1',
        stepName: 'Free Website Checkup',
        description: 'We start with a comprehensive audit of your current website and online presence to identify exactly where the growth opportunities are.'
      },
      {
        _key: 'step2',
        stepName: 'Custom Strategy',
        description: 'Our team develops a tailored marketing plan aligned with your business goals, budget, and timeline — no cookie-cutter solutions.'
      },
      {
        _key: 'step3',
        stepName: 'Execution & Growth',
        description: 'We implement the strategy, continuously monitor performance, and optimize for maximum results so your business keeps growing.'
      }
    ],
    testimonials: [
      {
        _key: 't1',
        author: 'Sarah Jenkins',
        quote: 'Power Marketing International completely revamped our web presence. Our organic traffic has doubled in just 6 months and we\'re getting real leads every week.',
        rating: 5
      },
      {
        _key: 't2',
        author: 'Michael Chang',
        quote: 'Their attention to detail and data-driven approach to SEO makes them an invaluable partner. They treat our business like it\'s their own.',
        rating: 5
      },
      {
        _key: 't3',
        author: 'Elena Rodriguez',
        quote: 'The new website they built for us pays for itself every single month. Professional, responsive, and they actually deliver on their promises.',
        rating: 5
      }
    ],
    ctaSection: {
      heading: 'Ready to grow your business online?',
      subheading: 'Get a free, no-obligation website checkup and discover how we can help you attract more customers and increase your revenue.',
      buttonText: 'Get Your Free Checkup'
    }
  }

  try {
    await client.createOrReplace(doc)
    console.log('Homepage document updated successfully.')
  } catch (err) {
    console.error('Failed to seed:', err)
  }
}

seed()
