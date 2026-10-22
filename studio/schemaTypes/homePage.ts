import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'hero', title: 'Hero Section' },
    { name: 'intro', title: 'Intro Section' },
    { name: 'strategy', title: 'Strategy Section' },
    { name: 'workflow', title: 'Workflow Section' },
    { name: 'contact', title: 'Contact Section' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title / Site Title',
      type: 'string',
      group: 'general',
      initialValue: 'Power Marketing International',
    }),

    // --- HERO SECTION ---
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'pillText', title: 'Pill Label (e.g. Experts in...)', type: 'string' }),
        defineField({ name: 'heading', title: 'Main Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Subheading / Description', type: 'text', rows: 3 }),
        defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
        defineField({ name: 'ctaLink', title: 'CTA Button Link', type: 'string', initialValue: '#consultation' }),
        defineField({ 
          name: 'backgroundVideo', 
          title: 'Background Video', 
          type: 'file', 
          options: { accept: 'video/*' },
          description: 'Upload your background video directly here (MP4 recommended). Keep the file size under 10MB for fast loading.' 
        }),
      ],
    }),

    // --- INTRO SECTION ---
    defineField({
      name: 'intro',
      title: 'Intro Section',
      type: 'object',
      group: 'intro',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subheading', title: 'Subheading / Founder Intro', type: 'string' }),
        defineField({ name: 'description', title: 'Description Paragraph', type: 'text', rows: 4 }),
        defineField({ name: 'servicesButtonText', title: 'Services Button Text', type: 'string', initialValue: 'See featured services' }),
        defineField({ name: 'aboutButtonText', title: 'About Button Text', type: 'string', initialValue: 'Learn more about us' }),
        defineField({ name: 'authorName', title: 'Author / Founder Name', type: 'string' }),
        defineField({ name: 'authorRole', title: 'Author Role', type: 'string' }),
        defineField({ name: 'authorLocation', title: 'Author Location/Company', type: 'string' }),
        defineField({ name: 'authorImage', title: 'Author Image', type: 'image', options: { hotspot: true } }),
        defineField({
          name: 'facts',
          title: 'Key Highlights / Badges',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'highlight', title: 'Bold Highlight Text (e.g. 15 years serving)', type: 'string' }),
                defineField({ name: 'text', title: 'Remaining Text (e.g. Berks County businesses)', type: 'string' }),
              ],
              preview: {
                select: {
                  title: 'highlight',
                  subtitle: 'text',
                },
              },
            },
          ],
        }),
      ],
    }),

    // --- STRATEGY SECTION ---
    defineField({
      name: 'strategy',
      title: 'Strategy Section',
      type: 'object',
      group: 'strategy',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'tag', title: 'Small Tagline', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description1', title: 'First Paragraph', type: 'text', rows: 3 }),
        defineField({ name: 'description2', title: 'Second Paragraph', type: 'text', rows: 3 }),
        defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
      ],
    }),

    // --- WORKFLOW SECTION ---
    defineField({
      name: 'workflow',
      title: 'Workflow Section',
      type: 'object',
      group: 'workflow',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'tag', title: 'Small Tagline', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        defineField({
          name: 'steps',
          title: 'Workflow Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'number', title: 'Step Number (e.g. 01)', type: 'string' }),
                defineField({ name: 'title', title: 'Step Title', type: 'string' }),
                defineField({ name: 'description', title: 'Step Description', type: 'text', rows: 4 }),
                defineField({ name: 'imageSrc', title: 'Custom SVG/Image Path (e.g. /images/card1-competitive-analysis.svg)', type: 'string' }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'number',
                },
              },
            },
          ],
        }),
      ],
    }),

    // --- CONTACT SECTION ---
    defineField({
      name: 'contact',
      title: 'Contact Section',
      type: 'object',
      group: 'contact',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'highlight', title: 'Highlighted Word (e.g. Consultation)', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
        defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return { title: title || 'Home Page Content' }
    },
  },
})
