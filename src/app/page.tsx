import { Navbar } from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function Home() {
  // Fetch products from Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Soccer Jersey Catalog</h1>
        
        {error && (
          <div className="text-center py-10">
            <p className="text-red-500">Failed to load products. Please try again later.</p>
          </div>
        )}

        {!error && products && products.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No products available at the moment.</p>
          </div>
        )}

        {!error && products && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="transition-transform hover:scale-105">
                <Card className="h-full overflow-hidden">
                  <div className="aspect-square relative">
                    {product.images && (
                      <Image
                        src={product.images.split(',')[0] || '/placeholder.png'}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    )}
                    {!product.images && (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <p className="font-bold">${product.price.toFixed(2)}</p>
                    <span className="text-sm text-gray-500">View Details</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        <p>Soccer Jersey Catalog - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
