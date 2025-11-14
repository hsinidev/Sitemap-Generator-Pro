import React, { useState } from 'react';

export const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="text-gray-300 prose prose-invert prose-sm sm:prose-base max-w-none">
      <h1 className="text-gold">The Ultimate Guide to XML Sitemaps: Mastering SEO Indexing in 2024</h1>
      
      <p className="lead text-lg text-gray-400">
        In the vast, ever-expanding universe of the internet, getting your website noticed by search engines is paramount. While content is king, technical SEO is the intricate machinery that ensures the king's decrees are heard across the realm. At the heart of this machinery lies a deceptively simple yet incredibly powerful file: the XML sitemap.
      </p>

      {!isExpanded && (
         <div className="text-center my-6">
            <button
                onClick={() => setIsExpanded(true)}
                className="bg-gold/20 text-gold border border-gold/50 font-bold py-2 px-6 rounded-full hover:bg-gold/30 transform hover:scale-105 transition-all duration-300"
            >
                Read The Full Guide
            </button>
        </div>
      )}

      {isExpanded && (
        <>
          <p className="text-gray-400">
            This comprehensive guide will illuminate every corner of XML sitemaps, from their fundamental structure to advanced strategies for maximizing your site's crawlability and indexing potential.
          </p>
          <nav className="my-8 p-4 border border-gold/30 rounded-lg bg-gray-800/50">
            <h2 className="text-xl font-bold text-gold mt-0">Table of Contents</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li><a href="#what-is-a-sitemap">What Exactly is an XML Sitemap?</a></li>
              <li><a href="#why-are-sitemaps-critical">Why Are Sitemaps Critical for Modern SEO?</a></li>
              <li><a href="#sitemap-structure">Anatomy of an XML Sitemap: Deconstructing the Tags</a>
                <ul className="list-disc ml-5 space-y-1 mt-2">
                  <li>The Root: &lt;urlset&gt;</li>
                  <li>The Container: &lt;url&gt;</li>
                  <li>The Location: &lt;loc&gt;</li>
                  <li>The Timestamp: &lt;lastmod&gt;</li>
                  <li>The Cadence: &lt;changefreq&gt;</li>
                  <li>The Importance: &lt;priority&gt;</li>
                </ul>
              </li>
              <li><a href="#changefreq-table">Data Table: Recommended &lt;changefreq&gt; Values</a></li>
              <li><a href="#common-mistakes">Common Sitemap Mistakes and How to Avoid Them</a></li>
              <li><a href="#submission-process">The Submission Process: Getting Your Sitemap to Search Engines</a></li>
              <li><a href="#advanced-sitemaps">Beyond the Basics: Advanced Sitemap Strategies</a></li>
              <li><a href="#faq">Frequently Asked Questions (FAQ)</a></li>
            </ul>
          </nav>

          <section id="what-is-a-sitemap">
            <h2 className="text-gold">What Exactly is an XML Sitemap?</h2>
            <p>
              Think of your website as a city and each page as a building. An XML (eXtensible Markup Language) sitemap is the official city map you hand to search engine crawlers (like Googlebot and Bingbot). Instead of having them wander aimlessly through your streets, hoping to find every building, you provide a clear, structured guide that lists every important address.
            </p>
            <p>
              Essentially, a sitemap is a file that lists all the URLs on your website that you want to be publicly available and indexed by search engines. It acts as a roadmap, helping crawlers discover your content more efficiently, especially pages that might be deeply nested or not well-linked internally. While search engines are sophisticated enough to crawl sites without a sitemap, providing one is a best practice that removes ambiguity and accelerates the discovery process. It's you, the site owner, telling search engines, "Here is the content I consider important. Please take a look."
            </p>
          </section>

          <section id="why-are-sitemaps-critical">
            <h2 className="text-gold">Why Are Sitemaps Critical for Modern SEO?</h2>
            <p>
              In the early days of the web, sites were smaller and simpler. Today, websites can be massive, with thousands or even millions of pages, complex JavaScript frameworks, and deep information architectures. This complexity makes a sitemap more crucial than ever for several reasons:
            </p>
            <ul className="list-disc ml-5 space-y-2">
                <li><strong>Improved Crawlability:</strong> For large websites, a sitemap ensures that search engine bots can find all your pages, including new or recently updated content that might not have many internal links yet.</li>
                <li><strong>Discovering "Orphan" Pages:</strong> Some pages might exist on your site but have few or no internal links pointing to them. A sitemap is the only reliable way to ensure these "orphan" pages are discovered.</li>
                <li><strong>Rich Media Content:</strong> You can create separate, specialized sitemaps for content types like images and videos, providing additional metadata that helps them rank in image and video search results.</li>
                <li><strong>Prioritization and Freshness Signals:</strong> By using tags like <code>&lt;priority&gt;</code> and <code>&lt;lastmod&gt;</code>, you can give search engines hints about which pages are most important and how recently they were updated, potentially influencing crawl frequency.</li>
                <li><strong>New Websites:</strong> For a brand-new site with few external backlinks, a sitemap is one of the fastest ways to get your pages discovered and indexed. The crawlers might not find you through other sites, but they will find you through the sitemap you submit.</li>
            </ul>
          </section>

          <section id="sitemap-structure">
            <h2 className="text-gold">Anatomy of an XML Sitemap: Deconstructing the Tags</h2>
            <p>
              A standard XML sitemap has a specific, hierarchical structure. Understanding each component is key to creating a valid and effective file.
            </p>
            <h3 className="text-yellow-400">The Root: &lt;urlset&gt;</h3>
            <p>
              This is the parent tag that encapsulates the entire file. It begins right after the XML declaration and declares the sitemap protocol standard being used.
              <code>&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt; ... &lt;/urlset&gt;</code>
            </p>

            <h3 className="text-yellow-400">The Container: &lt;url&gt;</h3>
            <p>
              For each individual URL you want to include, you'll create a <code>&lt;url&gt;</code> tag. This acts as the parent container for all the information related to that specific page.
            </p>

            <h3 className="text-yellow-400">The Location: &lt;loc&gt;</h3>
            <p>
              This is the only <strong>mandatory</strong> tag within a <code>&lt;url&gt;</code> block. It contains the absolute URL of the page. The URL must be fully qualified, including the protocol (http or https) and a trailing slash if your server requires it. Example: <code>&lt;loc&gt;https://www.yourdomain.com/your-awesome-page/&lt;/loc&gt;</code>.
            </p>

            <h3 className="text-yellow-400">The Timestamp: &lt;lastmod&gt;</h3>
            <p>
              This optional tag indicates the date the file was last modified. It should be in the <a href="https://www.w3.org/TR/NOTE-datetime" target="_blank" rel="noopener noreferrer">W3C Datetime</a> format (YYYY-MM-DD). Providing this information can help search engines identify new or updated content more quickly. Example: <code>&lt;lastmod&gt;2024-01-15&lt;/lastmod&gt;</code>.
            </p>

            <h3 className="text-yellow-400">The Cadence: &lt;changefreq&gt;</h3>
            <p>
              Another optional tag, <code>&lt;changefreq&gt;</code>, gives search engines a hint about how frequently the content on a page is likely to change. The valid values are: <code>always</code>, <code>hourly</code>, <code>daily</code>, <code>weekly</code>, <code>monthly</code>, <code>yearly</code>, and <code>never</code>. While this is just a hint and not a command, providing accurate information can help crawlers schedule their visits more intelligently.
            </p>

            <h3 className="text-yellow-400">The Importance: &lt;priority&gt;</h3>
            <p>
              The optional <code>&lt;priority&gt;</code> tag lets you suggest the importance of a particular URL relative to other URLs on your own site. The value ranges from 0.0 to 1.0. A higher value suggests higher importance. For example, your homepage might have a priority of 1.0, category pages 0.8, and individual articles 0.5. It's crucial to understand that this tag does <strong>not</strong> affect how your pages rank in search results; it only influences the crawl order on your site. Many SEOs now consider this tag to be largely ignored by Google, but it can still be useful for other crawlers or for internal organization.
            </p>
          </section>

          <section id="changefreq-table">
            <h2 className="text-gold">Data Table: Recommended &lt;changefreq&gt; Values</h2>
            <p>Choosing the right <code>changefreq</code> value is about being realistic. Here's a table to guide your decisions:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gold uppercase tracking-wider">Page Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gold uppercase tracking-wider">Recommended `changefreq`</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gold uppercase tracking-wider">Rationale</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900/50 divide-y divide-gray-800">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Homepage</td>
                    <td className="px-6 py-4 whitespace-nowrap"><code>daily</code></td>
                    <td className="px-6 py-4">Often updated with new posts, products, or announcements.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Main Blog/Article Feed</td>
                    <td className="px-6 py-4 whitespace-nowrap"><code>daily</code> / <code>hourly</code></td>
                    <td className="px-6 py-4">For active blogs, this page changes very frequently.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Individual Blog Posts</td>
                    <td className="px-6 py-4 whitespace-nowrap"><code>yearly</code> / <code>never</code></td>
                    <td className="px-6 py-4">Evergreen content is rarely updated after publication. Update `lastmod` if you do edit it.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Product Category Pages</td>
                    <td className="px-6 py-4 whitespace-nowrap"><code>weekly</code></td>
                    <td className="px-6 py-4">Products may be added or removed, or sorting order might change.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Individual Product Pages</td>
                    <td className="px-6 py-4 whitespace-nowrap"><code>monthly</code></td>
                    <td className="px-6 py-4">Price, description, or availability might change periodically.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">About Us / Contact Page</td>
                    <td className="px-6 py-4 whitespace-nowrap"><code>yearly</code></td>
                    <td className="px-6 py-4">These pages are typically static.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Privacy Policy / TOS</td>
                    <td className="px-6 py-4 whitespace-nowrap"><code>yearly</code></td>
                    <td className="px-6 py-4">Updated only when legal requirements change.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="common-mistakes">
            <h2 className="text-gold">Common Sitemap Mistakes and How to Avoid Them</h2>
            <ul className="list-disc ml-5 space-y-3">
              <li><strong>Including Non-Canonical URLs:</strong> Your sitemap should only list the canonical, final version of each URL. Including duplicates, redirects, or pages with parameters can send mixed signals and waste crawl budget.</li>
              <li><strong>Listing "Noindexed" Pages:</strong> If you've told search engines not to index a page (via a meta tag or `robots.txt`), don't include it in your sitemap. This is a contradictory instruction.</li>
              <li><strong>Incorrect URL Formatting:</strong> All URLs must be absolute, not relative. Ensure they are properly encoded and consistent with the live version of your site (e.g., HTTPS vs HTTP, www vs non-www).</li>
              <li><strong>Exceeding Size Limits:</strong> A single sitemap file cannot be larger than 50MB (uncompressed) and cannot contain more than 50,000 URLs. If you exceed these limits, you must create multiple sitemaps and use a sitemap index file to list them.</li>
              <li><strong>"Set It and Forget It" Mentality:</strong> A sitemap is a living document. It must be updated automatically whenever you add, remove, or significantly change a page on your site. Most modern CMS platforms handle this automatically.</li>
            </ul>
          </section>

          <section id="submission-process">
            <h2 className="text-gold">The Submission Process: Getting Your Sitemap to Search Engines</h2>
            <p>Creating the sitemap is only half the battle. You need to tell search engines where to find it.</p>
            <ol className="list-decimal ml-5 space-y-2">
                <li>
                    <strong>Reference it in `robots.txt`:</strong> This is the easiest method. Simply add a line to your `robots.txt` file at the root of your domain:
                    <br/>
                    <code>Sitemap: https://www.yourdomain.com/sitemap.xml</code>
                    <br/>
                    Crawlers check this file first, making it an efficient way for them to find your sitemap automatically.
                </li>
                <li>
                    <strong>Submit via Google Search Console:</strong>
                    <ul>
                        <li>Log in to your Google Search Console account.</li>
                        <li>Select your property.</li>
                        <li>Navigate to "Sitemaps" in the left-hand menu.</li>
                        <li>Enter the URL of your sitemap (e.g., `/sitemap.xml`) and click "Submit".</li>
                        <li>GSC will then report on the status, including any errors it finds and how many URLs were discovered.</li>
                    </ul>
                </li>
                <li>
                    <strong>Submit via Bing Webmaster Tools:</strong> The process is very similar to Google's. Log in, select your site, navigate to the Sitemaps section, and submit the URL.
                </li>
            </ol>
          </section>

          <section id="advanced-sitemaps">
            <h2 className="text-gold">Beyond the Basics: Advanced Sitemap Strategies</h2>
            <p>For larger, more complex sites, a single sitemap may not be enough. Consider these advanced tactics:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Sitemap Index Files:</strong> As mentioned, if you have more than 50,000 URLs, you'll need to split them into multiple sitemaps. A sitemap index file is a sitemap of sitemaps—it's a simple XML file that lists the locations of all your individual sitemap files. You submit this single index file to search engines.</li>
              <li><strong>Image and Video Sitemaps:</strong> To help search engines discover and index your multimedia content, create separate sitemaps for them. These allow you to provide valuable metadata like titles, descriptions, duration (for video), and location, increasing their visibility in specialized search results.</li>
              <li><strong>News Sitemaps:</strong> If you run a news publication, a News Sitemap is crucial. It has a different format and tells Google about your latest articles, helping them appear in Google News and Top Stories carousels. These sitemaps only include articles published in the last 48 hours.</li>
              <li><strong>Dynamic Generation:</strong> The best practice for any modern website is to have the sitemap generated dynamically by your server or CMS. This ensures it's always up-to-date with the latest content, eliminating the risk of human error from manual updates.</li>
            </ul>
          </section>

          <section id="faq">
            <h2 className="text-gold">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              <details className="bg-gray-800/50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-yellow-400">Do I absolutely need a sitemap?</summary>
                <p className="mt-2 text-gray-400">No, but it's highly recommended. Search engines can crawl your site without one, but a sitemap makes their job easier, faster, and more thorough, especially for large or new websites. It's a foundational SEO best practice.</p>
              </details>
              <details className="bg-gray-800/50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-yellow-400">Does the `priority` tag help my page rank higher?</summary>
                <p className="mt-2 text-gray-400">No. Google has publicly stated they largely ignore this tag. Its purpose is to signal to crawlers which of your *own* pages you consider most important, potentially influencing crawl order, but it has no direct impact on SERP rankings.</p>
              </details>
              <details className="bg-gray-800/50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-yellow-400">What's the difference between an HTML sitemap and an XML sitemap?</summary>
                <p className="mt-2 text-gray-400">An HTML sitemap is designed for human users to help them navigate your website. It's typically a regular page with a structured list of links. An XML sitemap is specifically for search engine crawlers, written in a structured format they can easily parse.</p>
              </details>
               <details className="bg-gray-800/50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-yellow-400">How often should I update my sitemap?</summary>
                <p className="mt-2 text-gray-400">Your sitemap should be updated every time you add, remove, or make a significant change to a page. This is why dynamic sitemap generation is the recommended approach. Manually updating a sitemap is not scalable or efficient.</p>
              </details>
            </div>
          </section>

          <p className="text-center mt-12 text-gray-500">
            By mastering XML sitemaps, you are taking a significant step toward technical SEO excellence. You are building a stronger, more transparent relationship with search engines, ensuring your valuable content gets the visibility it deserves.
          </p>
        </>
      )}
    </div>
  );
};
