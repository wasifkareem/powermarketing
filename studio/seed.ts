import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function seed() {
  console.log('Seeding data...')
  
  const doc = {
    _id: 'homePage',
    _type: 'homePage',
    hero: {
      pillText: 'Experts in Berks County and the Lehigh Valley',
      heading: 'Marketing that actually produces growth.',
      videoUrl: '/videos/Video%20Project%2021%20(2).mp4',
    },
    intro: {
      heading: 'A small Agency, for big problems',
      description: "When the marketing puzzle isn't fitting together, you don't need a massive agency with endless layers of account managers. You need senior talent digging directly into your analytics, finding the actual friction points, and fixing them. We are a tight-knit team of specialists who care more about moving the needle than maintaining retainers.",
      authorName: 'Alam',
      authorRole: 'Founder',
      authorLocation: 'Power Marketing International',
    },
    strategy: {
      tag: 'Our Methodology',
      heading: 'We believe in analysis for the result.',
      description1: "Data drives every PMI engagement. We don't guess — we uncover insights through deep competitor research, market intelligence, and conversion analysis.",
      description2: "Analytics isn't just another service we offer alongside the rest. It's the foundational engine that shapes our strategy and fuels our Web Design, SEO, and Google Ads to produce real, measurable growth."
    },
    workflow: {
      tag: 'How PMI Works',
      heading: 'The Four Steps That Make the Difference',
      description: 'Any agency can build you a website. What separates PMI is what happens before the design starts.',
      steps: [
        {
          _key: 'step1',
          number: '01',
          title: 'Competitive & Market Analysis',
          description: "We analyze the websites, keywords, ad strategies, and content moats of your top competitors. What are they doing well? Where are the gaps? Where has the market left opportunities uncontested? This work is the foundation of PMI's standalone Analytics service — see the analytics page for the full methodology and sample deliverables."
        },
        {
          _key: 'step2',
          number: '02',
          title: 'Keyword Research',
          description: 'We identify the specific search phrases your ideal customers are typing — not just the obvious ones, but the long-tail, high-intent phrases that convert. These become the backbone of your website and SEO strategy.'
        },
        {
          _key: 'step3',
          number: '03',
          title: 'Messaging & Branding',
          description: 'We develop your core value proposition and the messaging hierarchy that runs through every page of your site. What makes you different? Why should a prospect in Wyomissing or Bethlehem choose you over the competition? We answer those questions before anything is designed.'
        },
        {
          _key: 'step4',
          number: '04',
          title: 'Strategy & Build',
          description: 'Only after the first three steps are complete do we build your website, launch your campaigns, or begin your SEO work. This is why our clients see results — and why the results last.'
        }
      ]
    },
    contact: {
      heading: 'Request your free',
      highlight: 'Consultation',
      description: 'At our agency, we are passionate about delivering outstanding results and promoting substantial growth for our clients in Berks County and the Lehigh Valley. Leveraging our unique combination of creativity, strategic insight, and expertise, we go the extra mile to exceed expectations and achieve measurable success.'
    }
  }

  try {
    const res = await client.createOrReplace(doc)
    console.log('Successfully created/updated document:', res._id)
  } catch (err) {
    console.error('Error seeding data:', err)
  }
}

seed()
