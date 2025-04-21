
import React from 'react';
import Hero from '@/components/Hero';
import RecyclingCard from '@/components/RecyclingCard';

const Index = () => {
  const recyclingItems = [
    {
      title: "Electronics",
      description: "Old computers, phones, and other electronic devices",
      imageUrl: "/placeholder.svg",
      disposalMethod: "Take to an electronics recycling center or participate in manufacturer take-back programs. Never dispose of electronics in regular trash due to hazardous materials."
    },
    {
      title: "Plastic Bottles",
      description: "Clean plastic bottles and containers",
      imageUrl: "/placeholder.svg",
      disposalMethod: "Rinse thoroughly and place in recycling bin. Remove caps and labels if required by your local recycling program. Crush to save space."
    },
    {
      title: "Paper Products",
      description: "Newspapers, magazines, and cardboard boxes",
      imageUrl: "/placeholder.svg",
      disposalMethod: "Break down cardboard boxes, keep paper clean and dry. Place in paper recycling bin or bundle together. Avoid recycling paper contaminated with food."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recyclingItems.map((item, index) => (
            <RecyclingCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              disposalMethod={item.disposalMethod}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
