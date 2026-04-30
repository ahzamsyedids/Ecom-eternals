import validataion from '../assets/icons/validation.png'
import supplier from '../assets/icons/supplier.png'
import listing from '../assets/icons/listing.png'
import logistics from '../assets/icons/logistics.png'
import launch from '../assets/icons/launch.png'
import scaling from '../assets/icons/scaling.png'

export const serviceDetails = {
  'amazon-fba-automation': {
    hero: {
      title: 'Amazon FBA System',
      subtitle: 'We create, launch, and manage fully optimized Amazon FBA stores for you from product research to scaling sales using a proven, data-driven system designed for long-term profitability.',
    },
    intro: {
      title: 'A Fully Managed Amazon FBA System That Works For You',
      description: "Amazon FBA is one of the most powerful ecommerce models in the world but success requires experience, strategy, and execution. We eliminate the complexity by building and managing your entire Amazon business for you. From finding winning products to handling logistics and scaling, everything is done by our team.",
      cards: [
        {
          title: 'Product Research & Validation',
          desc: 'We identify high-demand, low-competition products using market data, trends, and competitor analysis to ensure strong sales potential.',
          icon: validataion
        },
        {
          title: 'Supplier Sourcing & Branding',
          desc: 'We connect you with reliable suppliers and help build a branded product that stands out in the Amazon marketplace.',
          icon: supplier
        },
        {
          title: 'Listing Creation & Optimization',
          desc: 'We create high-converting product listings with optimized titles, keywords, images, and descriptions to maximize visibility and conversions.',
          icon: listing
        },
        {
          title: 'FBA Setup & Logistics',
          desc: "We manage inventory, shipping, and Amazon FBA setup so your products are stored and delivered efficiently through Amazon's fulfillment network.",
          icon: logistics
        },
        {
          title: 'Launch & PPC Marketing',
          desc: 'We launch your product using proven Amazon PPC strategies to generate traffic, rankings, and early sales momentum.',
          icon: launch
        },
        {
          title: 'Scaling & Management',
          desc: 'We continuously optimize your store, ads, and product performance to increase sales and build long-term revenue growth.',
          icon: scaling
        }
      ]
    },
    process: {
      title: 'Simple 3-Step Amazon FBA System',
      subtitle: 'A straightforward system designed to take you from idea to a fully managed Amazon business with clear execution at every step.',
      steps: [
        {
          number: '1',
          title: 'Strategy & Product Selection',
          desc: 'We analyze your budget and select winning products with strong market demand.'
        },
        {
          number: '2',
          title: 'Store Setup & Launch',
          desc: 'We build your Amazon business, set up listings, and launch your products professionally.'
        },
        {
          number: '3',
          title: 'Manage & Scale',
          desc: 'We run ads, optimize performance, and scale your store for consistent sales growth.'
        }
      ]
    },
    benefits: {
      title: 'Built For Real Sales, Not Guesswork',
      subtitle: "We don't just create Amazon stores we build structured businesses designed to generate consistent revenue.",
      cards: [
        { title: 'Product-market fit', icon: 'search-dollar' },
        { title: 'Strong branding', icon: 'award' },
        { title: 'Scalable advertising', icon: 'bar-chart' },
        { title: 'Long-term profitability', icon: 'users-cog' }
      ]
    }
  }
};
