import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'intro', title: 'Intro Section' },
    { name: 'strategy', title: 'Strategy Section' },
    { name: 'workflow', title: 'Workflow Section' },
    { name: 'contact', title: 'Contact Section' },
  ],
  fields: [
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
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
        defineField({ name: 'authorName', title: 'Author Name', type: 'string' }),
        defineField({ name: 'authorRole', title: 'Author Role', type: 'string' }),
        defineField({ name: 'authorLocation', title: 'Author Location/Company', type: 'string' }),
        defineField({ name: 'authorImage', title: 'Author Image', type: 'image', options: { hotspot: true } }),
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
                defineField({ name: 'description', title: 'Step Description', type: 'text', rows: 3 }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'number'
                }
              }
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
    prepare() {
      return { title: 'Home Page Content' }
    }
  }
})
