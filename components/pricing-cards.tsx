import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  isPopular?: boolean
  buttonText: string
  priceNote?: string
}

function PricingCard({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  isPopular = false, 
  buttonText,
  priceNote 
}: PricingCardProps) {
  return (
    <div className={`relative bg-gray-900/50 border rounded-xl p-8 ${
      isPopular ? 'border-primary ring-2 ring-primary/20' : 'border-gray-800'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-2">{period}</span>
        </div>
        {priceNote && (
          <p className="text-sm text-primary font-medium">{priceNote}</p>
        )}
        <p className="text-muted-foreground mt-4">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

    </div>
  )
}

export function PricingCards() {
  const freeFeatures = [
    "10 Fast requests and 50 Slow requests of Premium models / month",
    "1000 Slow Requests of Advanced models / month",
    "5000 Autocomplete / month"
  ]

  const proFeatures = [
    "600 Fast requests and unlimited Slow requests of Premium models / month",
    "Unlimited Requests of Advanced models",
    "Unlimited Autocomplete"
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground text-lg">Choose the plan that works best for you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PricingCard
          title="Free"
          price="$0"
          period="/month"
          description="Perfect for getting started with basic AI assistance"
          features={freeFeatures}
          buttonText="Get Started Free"
        />
        
        <PricingCard
          title="Pro"
          price="$7.5"
          period="/month"
          priceNote="First month $3 for new accounts • $10/month without annual plan"
          description="Full access to all features with priority support"
          features={proFeatures}
          isPopular={true}
          buttonText="Start Pro Plan"
        />
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground">
          <span className="font-semibold">New subscriber special:</span> Get your first month for just $3, then $7.5/month with annual billing or $10/month with monthly billing.
        </p>
        <p className="text-muted-foreground mt-2 text-sm">
          All plans include a 30-day money-back guarantee. No setup fees.
        </p>
      </div>
    </div>
  )
}