export const platforms = ['Amazon', 'Walmart', 'Shopify', 'Ebay', 'Tiktok', 'Etsy'];

export const packagesData = {
  Amazon: [
    {
      name: 'Bronze Package',
      features: [
        '80/20 profit split from 4th Month Onwards.',
        '100% profit possession for the first 3 months',
        'Amazon Store Creation and Setup',
        'Amazon Store Logo & Favicon Creation',
        'Product Hunting',
        'Supplier Hunting',
        'Supplier Onboarding',
        'Keyword Research',
        'Product Listing & Optimization',
        'Virtual Assistance',
        'Social Media Setup',
        'Content Population',
        'Social Media Posts',
        'Social Media Channels (Fb and Insta)'
      ],
      buttonText: 'Get A Quote',
      terms: '* Terms & Conditions Apply'
    },
    {
      name: 'SILVER Package',
      features: [
        '90/10 profit split from 4th Month Onwards.',
        '100% profit possession for the first 3 months',
        'Amazon Store Creation and Setup',
        'Amazon Store Logo & Favicon Creation',
        'Product Hunting',
        'Supplier Hunting',
        'Supplier Onboarding',
        'Keyword Research',
        'Product Listing & Optimization',
        'Virtual Assistance',
        'Social Media Setup',
        'Content Population',
        'Social Media Posts',
        'Social Media Channels (Fb and Insta)'
      ],
      buttonText: 'Get A Quote',
      terms: '* Terms & Conditions Apply'
    },
    {
      name: 'Gold Package',
      features: [
        'No profit split for One Year',
        '100% profit possession for the first 3 months',
        'Amazon Store Creation and Setup',
        'Amazon Store Logo & Favicon Creation',
        'Product Hunting',
        'Supplier Hunting',
        'Supplier Onboarding',
        'Keyword Research',
        'Product Listing & Optimization',
        'Virtual Assistance',
        'Social Media Setup',
        'Content Population',
        'Social Media Posts',
        'Social Media Channels (Fb and Insta)'
      ],
      buttonText: 'Get A Quote',
      terms: '* Terms & Conditions Apply'
    }
  ],
  Walmart: [
    {
      name: 'Bronze Package',
      features: [
        '80/20 profit split from 4th Month Onwards.',
        '100% profit possession for the first 3 months',
        'Walmart Store Creation and Setup',
        'Product Hunting',
        'Supplier Hunting',
        'Virtual Assistance'
      ],
      buttonText: 'Get A Quote',
      terms: '* Terms & Conditions Apply'
    },
    {
      name: 'SILVER Package',
      features: [
        '90/10 profit split from 4th Month Onwards.',
        '100% profit possession for the first 3 months',
        'Walmart Store Creation and Setup',
        'Product Hunting',
        'Supplier Hunting',
        'Virtual Assistance'
      ],
      buttonText: 'Get A Quote',
      terms: '* Terms & Conditions Apply'
    },
    {
      name: 'Gold Package',
      features: [
        'No profit split for One Year',
        '100% profit possession for the first 3 months',
        'Walmart Store Creation and Setup',
        'Product Hunting',
        'Supplier Hunting',
        'Virtual Assistance'
      ],
      buttonText: 'Get A Quote',
      terms: '* Terms & Conditions Apply'
    }
  ],
  // Adding placeholders for other platforms for now, they can be filled with same structure
  Shopify: [],
  Ebay: [],
  Tiktok: [],
  Etsy: []
};

// Fill empty ones with Amazon data for demo purposes if needed, 
// but usually it's better to just have the structure.
['Shopify', 'Ebay', 'Tiktok', 'Etsy'].forEach(p => {
  if (packagesData[p].length === 0) {
    packagesData[p] = JSON.parse(JSON.stringify(packagesData['Amazon'])).map(pkg => ({
      ...pkg,
      name: pkg.name,
      features: pkg.features.map(f => f.replace('Amazon', p))
    }));
  }
});