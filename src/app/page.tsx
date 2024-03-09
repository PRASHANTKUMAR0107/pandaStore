import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
const perks=[
  {
    name:'Instant Delivery',
    icon:ArrowDownToLine,
    description:"Get your assets delivered to your email in seconds and download them."
  },
  {
    name:'Guaranteed Quality',
    icon:CheckCircle,
    description:"Every asset on this platform is verified by our team to ensure our highest quality standards."
  },
  {
    name:'For the Planet',
    icon:Leaf,
    description:"We've pledged 1% of our sales in restoration of our environment."
  },
]

export default function Home() {
  return (
    <>
    <div className=" bg-rose-50/50">
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl ">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your marketplace for high-quality{' '}
        <span className="text-rose-600">digital assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-pblue text-muted-foreground">
          welcome to myStore. Every asset on this platform is verified by our team to ensure our highest quality standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href={"/products"} className={buttonVariants()}>browse Trending</Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
    </div>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk)=>(
            <div key={perk.name} className="text-center md:flex md:text-left md:items-start lg:block lg:text-center">
              <div className="flex md:flex-shrink-0 justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-rose-100 text-rose-900">
                  {<perk.icon className="w-1/3 h-1/3"/>}
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">
                  {perk.name}
                  <p className="mt-3 text-muted-foreground text-sm">
                    {perk.description}
                  </p>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
}
