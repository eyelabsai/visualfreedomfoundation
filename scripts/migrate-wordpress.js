const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

// Parse WordPress XML export
function parseWordPressExport(xmlFilePath) {
  const xmlData = fs.readFileSync(xmlFilePath, 'utf8');
  
  return new Promise((resolve, reject) => {
    xml2js.parseString(xmlData, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

// Extract content from WordPress data
function extractContent(wordpressData) {
  const content = {
    site: {
      title: wordpressData.rss.channel[0].title[0],
      description: wordpressData.rss.channel[0].description[0],
      link: wordpressData.rss.channel[0].link[0],
    },
    pages: [],
    posts: [],
    media: [],
    categories: [],
    menus: []
  };

  // Extract pages
  if (wordpressData.rss.channel[0].item) {
    wordpressData.rss.channel[0].item.forEach(item => {
      const postType = item['wp:post_type'] ? item['wp:post_type'][0] : '';
      
      if (postType === 'page') {
        content.pages.push({
          title: item.title[0],
          content: item['content:encoded'] ? item['content:encoded'][0] : '',
          slug: item['wp:post_name'] ? item['wp:post_name'][0] : '',
          status: item['wp:status'] ? item['wp:status'][0] : 'draft',
          date: item['wp:post_date'] ? item['wp:post_date'][0] : '',
          modified: item['wp:post_modified'] ? item['wp:post_modified'][0] : ''
        });
      } else if (postType === 'post') {
        content.posts.push({
          title: item.title[0],
          content: item['content:encoded'] ? item['content:encoded'][0] : '',
          excerpt: item['excerpt:encoded'] ? item['excerpt:encoded'][0] : '',
          slug: item['wp:post_name'] ? item['wp:post_name'][0] : '',
          status: item['wp:status'] ? item['wp:status'][0] : 'draft',
          date: item['wp:post_date'] ? item['wp:post_date'][0] : '',
          modified: item['wp:post_modified'] ? item['wp:post_modified'][0] : ''
        });
      } else if (postType === 'attachment') {
        content.media.push({
          title: item.title[0],
          url: item['wp:attachment_url'] ? item['wp:attachment_url'][0] : '',
          guid: item.guid[0],
          date: item['wp:post_date'] ? item['wp:post_date'][0] : ''
        });
      }
    });
  }

  // Extract categories
  if (wordpressData.rss.channel[0]['wp:category']) {
    wordpressData.rss.channel[0]['wp:category'].forEach(cat => {
      content.categories.push({
        name: cat['wp:cat_name'][0],
        slug: cat['wp:category_nicename'][0],
        id: cat['wp:term_id'][0]
      });
    });
  }

  return content;
}

// Generate Next.js content files
function generateContentFiles(content) {
  const contentDir = path.join(process.cwd(), 'content');
  
  // Create content directory if it doesn't exist
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  // Generate pages
  const pagesDir = path.join(contentDir, 'pages');
  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
  }

  content.pages.forEach(page => {
    if (page.status === 'publish') {
      const pageFile = path.join(pagesDir, `${page.slug}.json`);
      fs.writeFileSync(pageFile, JSON.stringify(page, null, 2));
    }
  });

  // Generate posts
  const postsDir = path.join(contentDir, 'posts');
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }

  content.posts.forEach(post => {
    if (post.status === 'publish') {
      const postFile = path.join(postsDir, `${post.slug}.json`);
      fs.writeFileSync(postFile, JSON.stringify(post, null, 2));
    }
  });

  // Generate site config
  const siteConfig = {
    title: content.site.title,
    description: content.site.description,
    url: content.site.link,
    pages: content.pages.filter(p => p.status === 'publish').map(p => ({
      title: p.title,
      slug: p.slug
    })),
    posts: content.posts.filter(p => p.status === 'publish').map(p => ({
      title: p.title,
      slug: p.slug,
      date: p.date
    }))
  };

  fs.writeFileSync(path.join(contentDir, 'site.json'), JSON.stringify(siteConfig, null, 2));

  console.log(`✅ Generated ${content.pages.filter(p => p.status === 'publish').length} pages`);
  console.log(`✅ Generated ${content.posts.filter(p => p.status === 'publish').length} posts`);
  console.log(`✅ Generated site configuration`);
}

// Main migration function
async function migrateWordPress(xmlFilePath) {
  try {
    console.log('🔄 Parsing WordPress export...');
    const wordpressData = await parseWordPressExport(xmlFilePath);
    
    console.log('🔄 Extracting content...');
    const content = extractContent(wordpressData);
    
    console.log('🔄 Generating Next.js content files...');
    generateContentFiles(content);
    
    console.log('✅ WordPress migration completed successfully!');
    console.log(`📁 Content files generated in: ${path.join(process.cwd(), 'content')}`);
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration if called directly
if (require.main === module) {
  const xmlFile = process.argv[2] || 'visualfreedomfoundation.WordPress.2025-07-19.xml';
  migrateWordPress(xmlFile);
}

module.exports = { migrateWordPress, parseWordPressExport, extractContent }; 