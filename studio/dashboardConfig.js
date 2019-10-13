export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da37b87d597272393658743',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-567g437h',
                  apiId: 'de6a49ab-2c84-4885-a0b8-3227f31ee0ff'
                },
                {
                  buildHookId: '5da37b879b12140a680deb67',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ejv4zv7f',
                  apiId: '6e5785cf-3fdb-4f93-8123-060e1b722bc6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/asasmith/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ejv4zv7f.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
