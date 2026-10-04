import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'yl1pn884',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-01',
  token: process.env.SANITY_API_TOKEN
})

async function main() {
  const doc = {
    _id: 'drafts.homePage',
    _type: 'homePage',
    title: 'Power Marketing International',
    hero: {
      heading: 'Welcome to Power Marketing International',
      subheading: 'We help you grow your business through digital marketing.',
      ctaText: 'Get Started'
    },
    services: [
      {
        _key: 'seo',
        title: 'SEO Optimization',
        description: 'Improve your search engine rankings and get more traffic.'
      },
      {
        _key: 'ppc',
        title: 'PPC Management',
        description: 'Maximize your ROI with targeted ad campaigns.'
      }
    ]
  }

  try {
    const res = await client.createOrReplace(doc)
    console.log('Document created:', res._id)
    
    // Publish the document
    await client.patch('drafts.homePage').unset(['_id']).commit()
    const published = { ...doc, _id: 'homePage' }
    await client.createOrReplace(published)
    console.log('Document published')
    
  } catch (err) {
    console.error('Error creating document:', err)
  }
}

main()
