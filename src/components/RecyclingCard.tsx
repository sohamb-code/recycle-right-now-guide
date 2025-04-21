
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RecyclingCardProps {
  title: string;
  description: string;
  imageUrl: string;
  disposalMethod: string;
}

const RecyclingCard = ({ title, description, imageUrl, disposalMethod }: RecyclingCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-green-700">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-2">
          <h4 className="font-semibold text-blue-600 mb-2">How to dispose:</h4>
          <p className="text-gray-700">{disposalMethod}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecyclingCard;
