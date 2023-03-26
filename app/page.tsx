import { Sneaker } from "@/typings";
import Gallery from "./Gallery";

async function fetchSneakers(id: string) {
  const res = await fetch(`http://localhost:3000/api/sneakers`, {
    next: { revalidate: 60 },
  });

  const sneaker = await res.json();

  return sneaker.data;
}

export default async function Page({ params: { id } }: Sneaker) {
  const sneakers = await fetchSneakers(id);

  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Step up your game in style{" "}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Step up your sneaker game with our wide range of stylish and
            comfortable footwear, perfect for any occasion or activity. Elevate
            your style and performance today.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/10/45/shoes-157716__340.png"
            alt=" "
          />
        </div>
      </section>
      <Gallery sneakers={sneakers} />
    </main>
  );
}
