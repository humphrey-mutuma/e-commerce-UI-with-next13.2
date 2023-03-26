import { sneakers } from "@/data";
import Link from "next/link";

export default function Sneakers() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Sneakers</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {sneakers.map((sneaker) => (
            <Link
              key={sneaker.id}
              href={`sneakers/${sneaker.id}`}
              className="group"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                {sneaker.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                ))}
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{sneaker.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {sneaker.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
