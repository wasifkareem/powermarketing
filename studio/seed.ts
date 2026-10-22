import { createClient } from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'

const client = createClient({
  projectId: 'yl1pn884',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-01',
  token: 'skWssYvinqxOs6VnzDpFkcVlEGB6gf0GXgDsW2FXkXBYoyV4kXl6cwbMIYwGywEGXRy2NnzhhwXjKB7gAEGasicSBR2MLocFHitwrrlCPOj2mqT5gAp6dLOcFTWHzz1Fi4p0VfrywlinVCptPvvBxyQ8AgiGZ2CKe58SM9w8ERRWZMS34XGu',
})

async function seed() {
  console.log('--- Starting Sanity Seed & Cleanup ---')

  // 1. Upload Alan Robezzoli's image if available
  let authorImageAssetRef = null
  const alanImagePath = path.resolve('/Users/was_if__/powermarketinginternational/web/public/images/alam.webp')
  if (fs.existsSync(alanImagePath)) {
    try {
      console.log('Uploading author image:', alanImagePath)
      const imageAsset = await client.assets.upload('image', fs.createReadStream(alanImagePath), {
        filename: 'alam.webp',
      })
      authorImageAssetRef = imageAsset._id
      console.log('Uploaded image asset ID:', authorImageAssetRef)
    } catch (err) {
      console.warn('Could not upload image asset:', err.message)
    }
  }

  // Preserve existing background video asset reference
  const existingVideoRef = 'file-776a238a69ca3acf71e8261f7fc968fb7f9e9862-mp4'

  const doc = {
    _id: 'homePage',
    _type: 'homePage',
    title: 'Power Marketing International',
    hero: {
      pillText: 'Experts in Berks County and the Lehigh Valley',
      heading: 'Websites, Ads and SEO that bring real leads.',
      description: 'Stop guessing what works. We build a single, data-driven growth engine designed specifically for businesses across Berks County and the Lehigh Valley.',
      ctaText: 'Get a free Consultation',
      ctaLink: '#consultation',
      backgroundVideo: {
        _type: 'file',
        asset: {
          _ref: existingVideoRef,
          _type: 'reference',
        },
      },
    },
    intro: {
      heading: 'A small agency for big problems',
      subheading: 'Founded in 2011 by Alan Robezzoli — a 30-year integrated-marketing practitioner.',
      description: 'We bring big-agency expertise to local businesses, helping you untangle complex marketing problems and drive real, measurable revenue.',
      servicesButtonText: 'See featured services',
      aboutButtonText: 'Learn more about us',
      authorName: 'Alan Robezzoli',
      authorRole: 'Founder',
      authorLocation: 'Power Marketing International',
      ...(authorImageAssetRef
        ? {
            authorImage: {
              _type: 'image',
              asset: {
                _ref: authorImageAssetRef,
                _type: 'reference',
              },
            },
          }
        : {}),
      facts: [
        {
          _key: 'fact1',
          highlight: '15 years serving',
          text: 'Berks County and Lehigh Valley businesses',
        },
        {
          _key: 'fact2',
          highlight: 'Offices in Reading and Allentown, PA,',
          text: 'providing local, hands-on support',
        },
        {
          _key: 'fact3',
          highlight: 'Rated among the best',
          text: 'digital marketing agencies in Allentown (Expertise.com)',
        },
        {
          _key: 'fact4',
          highlight: 'Top 5% in web design',
          text: 'according to DesignRush',
        },
      ],
    },
    strategy: {
      tag: 'Our Methodology',
      heading: 'We Rely on Analytics for Results.',
      description1: "Data drives every PMI engagement. We don't guess — we uncover insights through deep competitor research, market intelligence, and conversion analysis.",
      description2: "Analytics isn't just another service we offer alongside the rest. It's the foundational engine that shapes our strategy and fuels our Web Design, SEO, and Google Ads to produce real, measurable growth.",
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
          description: "We analyze the websites, keywords, ad strategies, and content moats of your top competitors. What are they doing well? Where are the gaps? Where has the market left opportunities uncontested? This work is the foundation of PMI's standalone Analytics service — see the analytics page for the full methodology and sample deliverables.",
          imageSrc: '/images/card1-competitive-analysis.svg',
        },
        {
          _key: 'step2',
          number: '02',
          title: 'Keyword Research',
          description: 'We identify the specific search phrases your ideal customers are typing — not just the obvious ones, but the long-tail, high-intent phrases that convert. These become the backbone of your website and SEO strategy.',
          imageSrc: '/images/card2-keyword-research.svg',
        },
        {
          _key: 'step3',
          number: '03',
          title: 'Messaging & Branding',
          description: 'We develop your core value proposition and the messaging hierarchy that runs through every page of your site. What makes you different? Why should a prospect in Wyomissing or Bethlehem choose you over the competition? We answer those questions before anything is designed.',
          imageSrc: '/images/card3-messaging-branding.svg',
        },
        {
          _key: 'step4',
          number: '04',
          title: 'Strategy & Build',
          description: 'Only after the first three steps are complete do we build your website, launch your campaigns, or begin your SEO work. This is why our clients see results — and why the results last.',
          imageSrc: '/images/card4-strategy-build.svg',
        },
      ],
    },
    contact: {
      heading: 'Request your free',
      highlight: 'Consultation',
      description: 'At our agency, we are passionate about delivering outstanding results and promoting substantial growth for our clients in Berks County and the Lehigh Valley. Leveraging our unique combination of creativity, strategic insight, and expertise, we go the extra mile to exceed expectations and achieve measurable success.',
    },
  }

  try {
    // 2. Publish the cleaned and populated homePage document
    console.log('Writing published document homePage...')
    const publishedRes = await client.createOrReplace(doc)
    console.log('Published document updated:', publishedRes._id)

    // 3. Clean up the draft document:
    // If a draft exists, update it to also match the new structure and unset unknown fields like 'services'
    // Or delete the draft so that the studio immediately displays the clean published document!
    try {
      console.log('Deleting stale drafts.homePage so Studio displays the published document cleanly...')
      await client.delete('drafts.homePage')
      console.log('Successfully deleted stale draft drafts.homePage')
    } catch (draftErr) {
      console.log('No draft found to delete or delete failed:', draftErr.message)
    }

    // 4. Ensure 'services' is unset from published document as well
    await client.patch('homePage').unset(['services']).commit()
    console.log("Unset 'services' from homePage document")

    console.log('--- Seed and Cleanup Complete! ---')
  } catch (err) {
    console.error('Error during seeding:', err)
  }
}

seed()
