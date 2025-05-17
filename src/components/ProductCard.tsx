"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  price: number
}

export const ProductCard = ({ id, name, price }: ProductCardProps) => {
  // Main color for the product image
  const mainColor = '#FF9966'
  
  // Colors for the small thumbnail images
  const thumbnailColors = ['#5D8AA8', '#89CFF0', '#7CB9E8']

  return (
    <Link href={`/product/${id}`} className="block">
      <Card className="h-full overflow-hidden">
        {/* Main product image (colored div) */}
        <div 
          className="aspect-square w-full" 
          style={{ backgroundColor: mainColor }}
        />
        
        {/* Thumbnail row */}
        <div className="flex px-4 -mt-6 relative z-10 justify-center space-x-2">
          {thumbnailColors.map((color, index) => (
            <div 
              key={index} 
              className="w-12 h-12 rounded-md border-2 border-white shadow-sm" 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        
        <CardContent className="pt-4">
          <h3 className="text-xl font-bold truncate">{name}</h3>
          <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
