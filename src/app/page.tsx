import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  // Test product for demonstration
  const testProduct = {
    id: '1',
    name: 'Barcelona Home Jersey 2025',
    price: 89.99
  };
  
  // In a real implementation, we would use this:
  // const { data: products, error } = await supabase.from('products').select('*');
  // if (error) {
  //   console.error('Error fetching products:', error);
  // }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Soccer Jersey Catalog</h1>
        
        <div className="max-w-sm mx-auto">
          <ProductCard
            id={testProduct.id}
            name={testProduct.name}
            price={testProduct.price}
          />
        </div>
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        <p>Soccer Jersey Catalog - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
