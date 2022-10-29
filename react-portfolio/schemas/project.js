export default {
  name: 'project',
  type: 'document',
	title: 'Projects',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'description2',
      type: 'string',
      title: 'Second Description'
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link'
    },
    {
      name: 'linkName',
      type: 'string',
      title: 'Link Name'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Main Image'
    },
    {
      name: 'secondaryImage',
      type: 'image',
      title: 'Secondary Image'
    },
    {
      name: 'tertiaryImage',
      type: 'image',
      title: 'Tertiary Image'
    },
    {
      name: 'type',
      type: 'string',
      title: 'Project Type'
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date'
    },
    {
      name: 'textDate',
      type: 'string',
      title: 'Month/Year Date'
    },
    {
      name: 'medium',
      type: 'string',
      title: 'Medium'
    },
    {
      name: 'gridSize',
      type: 'boolean',
      title: 'Is Big',
      initialValue: 'false'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug'
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order'
    },
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution'
    }
  ],
  orderings: [
    {
      title: 'Date',
      name: 'dateCreated',
      by: [
        {field: 'Date', direction: 'desc'}
      ]
    },
  ]
}