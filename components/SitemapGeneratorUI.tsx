
import React, { useState } from 'react';
import { generateSitemap } from '../lib/SitemapBuilder';
import { SitemapConfig, ChangeFreq } from '../types';

const SitemapGeneratorUI: React.FC = () => {
  const [config, setConfig] = useState<SitemapConfig>({
    urls: '',
    baseUrl: 'https://example.com',
    priority: '0.8',
    changeFreq: 'daily',
    lastMod: new Date().toISOString().split('T')[0],
  });
  const [generatedXml, setGeneratedXml] = useState<string>('');
  const [buttonText, setButtonText] = useState('Generate & Download XML Sitemap');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateAndDownload = () => {
    if (!config.urls.trim()) {
        alert("Please enter at least one URL.");
        return;
    }
    
    const xml = generateSitemap(config);
    setGeneratedXml(xml);

    const blob = new Blob([xml], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setButtonText('Downloaded!');
    setTimeout(() => setButtonText('Generate & Download XML Sitemap'), 2000);
  };
  
  const priorityOptions = Array.from({ length: 11 }, (_, i) => (i / 10).toFixed(1));
  const changeFreqOptions: { value: ChangeFreq; label: string }[] = [
    { value: 'always', label: 'Always' },
    { value: 'hourly', label: 'Hourly' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
    { value: 'never', label: 'Never' },
  ];

  return (
    <div className="w-full max-w-6xl bg-gray-900/50 backdrop-blur-md border border-gold/30 rounded-xl shadow-2xl p-4 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side: Configuration Panel */}
        <div className="flex flex-col space-y-6">
          <div>
            <label htmlFor="urls" className="block text-sm font-medium text-gold mb-2">URL List (one per line)</label>
            <textarea
              id="urls"
              name="urls"
              value={config.urls}
              onChange={handleInputChange}
              rows={10}
              className="w-full bg-gray-800/70 border border-gray-600 rounded-md p-3 text-gray-300 focus:ring-gold focus:border-gold transition-all duration-300"
              placeholder="Enter your URLs here...&#10;/page-1&#10;/products/item-2&#10;https://anothersite.com/contact"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4 border-b border-gold/20 pb-2">Global Configuration</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="baseUrl" className="block text-sm font-medium text-gray-300 mb-1">Base URL</label>
                <input
                  type="text"
                  id="baseUrl"
                  name="baseUrl"
                  value={config.baseUrl}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/70 border border-gray-600 rounded-md p-2 text-gray-300 focus:ring-gold focus:border-gold"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-300 mb-1">Priority</label>
                  <select
                    id="priority"
                    name="priority"
                    value={config.priority}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/70 border border-gray-600 rounded-md p-2 text-gray-300 focus:ring-gold focus:border-gold"
                  >
                    {priorityOptions.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="changeFreq" className="block text-sm font-medium text-gray-300 mb-1">Change Frequency</label>
                  <select
                    id="changeFreq"
                    name="changeFreq"
                    value={config.changeFreq}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/70 border border-gray-600 rounded-md p-2 text-gray-300 focus:ring-gold focus:border-gold"
                  >
                    {changeFreqOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="lastMod" className="block text-sm font-medium text-gray-300 mb-1">Last Modified</label>
                  <input
                    type="date"
                    id="lastMod"
                    name="lastMod"
                    value={config.lastMod}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/70 border border-gray-600 rounded-md p-2 text-gray-300 focus:ring-gold focus:border-gold [color-scheme:dark]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Output Panel */}
        <div className="flex flex-col">
          <label htmlFor="xmlOutput" className="block text-sm font-medium text-gold mb-2">Generated XML Sitemap</label>
          <textarea
            id="xmlOutput"
            readOnly
            value={generatedXml || '<!-- Your generated XML will appear here -->'}
            className="w-full h-full flex-grow bg-black/50 border border-gray-600 rounded-md p-3 text-gray-300 font-mono text-sm focus:ring-gold focus:border-gold transition-all duration-300 min-h-[300px] lg:min-h-0"
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleGenerateAndDownload}
          className="bg-gold text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-gold/20"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SitemapGeneratorUI;
