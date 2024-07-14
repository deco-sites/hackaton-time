import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{altText}}
 */
export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

export interface ILink {
  text: string;
  href: string;
}

export interface Props {
  title?: string;
  logos?: Logo[];
  link?: ILink;
}

const IMG_PLACEHODLER = Array(30).fill(0).map(() => ({
  src:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
  altText: "Logo",
}));

export default function Logos({
  title,
  logos = IMG_PLACEHODLER,
  link,
}: Props) {
  if (logos.length > 3 && logos.length < 13) {
    logos = [...logos, ...logos, ...logos];
  }

  const slideContent = (
    <div class="flex items-center sm:gap-14 gap-20 h-6 md:h-8 lg:h-24">
      {logos?.map((logo) => {
        return (
          <Image
            src={logo.src || ""}
            alt={logo.altText || ""}
            width={300}
            class="h-full"
          />
        );
      })}
    </div>
  );
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 py-6 lg:py-14 mb-8">
      <div class="flex flex-col gap-12">
        {title && (
          <p class="text-center text-xl text-accent font-light">{title}</p>
        )}
        <div class="relative w-full overflow-hidden h-28">
          <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-full">
            {slideContent}
          </div>
        </div>
        {link && (
          <a
            href={link.href}
            class="underline text-primary hover:text-info font-extrabold text-xl flex items-center transition-all duration-200 mx-auto"
          >
            {link.text}
            <svg
              class="fill-current"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.0306 11.401L11.5306 15.901C11.3897 16.0419 11.1986 16.121 10.9994 16.121C10.8001 16.121 10.609 16.0419 10.4681 15.901C10.3272 15.7601 10.2481 15.569 10.2481 15.3697C10.2481 15.1705 10.3272 14.9794 10.4681 14.8385L13.6875 11.6203H4.5C4.30109 11.6203 4.11032 11.5413 3.96967 11.4007C3.82902 11.26 3.75 11.0693 3.75 10.8703C3.75 10.6714 3.82902 10.4807 3.96967 10.34C4.11032 10.1994 4.30109 10.1203 4.5 10.1203H13.6875L10.4694 6.90035C10.3285 6.75945 10.2493 6.56836 10.2493 6.3691C10.2493 6.16984 10.3285 5.97874 10.4694 5.83785C10.6103 5.69695 10.8014 5.6178 11.0006 5.6178C11.1999 5.6178 11.391 5.69695 11.5319 5.83785L16.0319 10.3378C16.1018 10.4076 16.1573 10.4905 16.1951 10.5818C16.2329 10.6731 16.2523 10.7709 16.2522 10.8697C16.252 10.9685 16.2324 11.0662 16.1944 11.1574C16.1564 11.2486 16.1007 11.3314 16.0306 11.401Z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
