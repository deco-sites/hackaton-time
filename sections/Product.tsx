import { ImageWidget } from "apps/admin/widgets.ts";
import VerticalCarousel from "../components/VerticalCarousel.tsx";
import { useSection } from "deco/hooks/useSection.ts";

export interface IImage {
  src: ImageWidget;
  alt?: string;
}

export interface Props {
  images?: IImage[];
  title: string;
  variations?: string[];
  price?: string;
  description?: string;
  addCardText?: string;
  buyText?: string;

  /** @hide true */
  counter: number;

  /** @hide true */
  updateCounter: boolean;
}

export default function Product(
  {
    images,
    title,
    variations = [],
    price,
    description,
    addCardText,
    buyText,
    counter = 1,
    updateCounter,
  }: Props,
) {
  if (counter < 1) counter = 0;

  const counterNumber = (
    <div
      id="counterNumberP"
      class="flex border border-primary h-24 max-w-48 text-2xl font-bold"
    >
      <button
        class="w-1/3 h-full transition-transform hover:scale-150 "
        hx-trigger="click"
        hx-get={useSection({
          props: {
            counter: counter - 1,
            updateCounter: true,
          },
        })}
        hx-target="#counterNumberP"
        hx-swap="outerHTML"
      >
        -
      </button>
      <p class="w-1/3 flex justify-center items-center">{counter}</p>
      <button
        class="w-1/3 h-full transition-transform hover:scale-150 "
        hx-trigger="click"
        hx-get={useSection({
          props: { counter: counter + 1, updateCounter: true },
        })}
        hx-target="#counterNumberP"
        hx-swap="outerHTML"
      >
        +
      </button>
    </div>
  );

  if (updateCounter) return counterNumber;

  return (
    <section class="text-primary border-t border-neutral overflow-hidden">
      <div class="mx-auto max-w-[1920px] flex ">
        <VerticalCarousel images={images} />
        <div class="pt-16 flex-grow">
          <div class="border-b border-neutral px-8 pb-8">
            <h1 class="text-4xl font-semibold">{title}</h1>
            <div class="flex flex-wrap gap-9">
              {variations.map((variation) => (
                <button class="min-h-12 lg:min-h-24 min-w-12 lg:min-w-24 text-2xl border border-primary my-8 transition-transform hover:scale-125 hover:bg-info">
                  {variation}
                </button>
              ))}
            </div>
            <div>
              {counterNumber}
            </div>
          </div>
          <div class="p-16">
            <p class="text-6xl font-bold">{price}</p>
            <p class="py-12 text-2xl max-w-[880px]">{description}</p>
            <div class="flex gap-8">
              <button class="border border-secondary p-5 text-secondary text-2xl font-medium hover:bg-primary transition-all duration-500">
                {addCardText}
              </button>
              <button class="text-3xl text-primary bg-info px-48 py-4 hover:bg-primary hover:text-secondary-content transition-all duration-500">
                {buyText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
