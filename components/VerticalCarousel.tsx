import Image from "apps/website/components/Image.tsx";
import { IImage } from "../sections/Product.tsx";

export interface Props {
  images?: IImage[];
}

export default function VerticalCarousel({ images }: Props) {
  return (
    <div class="text-primary max-h-[100vh] overflow-hidden hover:overflow-y-scroll flex flex-col pt-16 px-8 border-r border-neutral hide-scrollbar">
      {images?.map((image) => (
        <Image
          src={image.src}
          alt={image.alt || ""}
          width={777}
        />
      ))}
    </div>
  );
}
