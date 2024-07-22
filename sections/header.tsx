import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
// import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  image: ImageWidget;
  href?: string;
}

export interface Nav {
  title?: string;
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export default function Header({
  title,
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    buttons: [],
  },
}: Nav) {
  return (
    <>
      <div class="h-28"></div>
      <nav
        class={`drawer drawer-end fixed top-0 w-full z-50 bg-secondary-content border-b border-neutral`}
      >
        <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

        {/* main content */}
        <div
          class={`drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between`}
        >
          <div class="h-10 md:h-16 flex gap-2">
            <a href="/">
              <Image
                src={logo.src || ""}
                width={67}
                height={67}
                class="h-full object-contain whitespace-nowrap"
                alt={logo.alt}
              />
            </a>
          </div>
          {title && (
            <h2 class="text-primary font-bold text-4xl whitespace-nowrap">
              {title}
            </h2>
          )}
          <div
            id="navContainer"
            class={`hidden items-center lg:flex w-full pr-2.5`}
          >
            <div
              id="navItemsContainer"
              class={`relative flex gap-10 items-center pr-8 `}
            >
              <ul class="flex min-h-24 h-24">
                {navigation.links.map((link) => (
                  <li class="flex items-center h-full border-x border-neutral">
                    <a
                      href={link.url}
                      aria-label={link.label}
                      class="link no-underline text-primary text-2xl font-light py-2.5 px-10 transition-all hover:drop-shadow-custom-box"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul class="flex gap-10 ">
            {navigation.buttons?.map((item) => (
              <a
                href={item?.href ?? "#"}
                target={item?.href?.includes("http") ? "_blank" : "_self"}
                class={`font-normal flex items-center text-secondary font-medium rounded-full h-10 md:h-16 text-lg hover:drop-shadow-custom-box`}
              >
                <div class="w-[30px]">
                  <Image
                    width={30}
                    src={item.image || ""}
                    class="w-full object-contain"
                  />
                </div>
              </a>
            ))}
          </ul>

          <label
            htmlFor="mobile-drawer-nav"
            class="flex lg:hidden btn btn-ghost drawer-button"
          >
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 124 124"
              xml:space="preserve"
              class="text-primary fill-current"
            >
              <g>
                <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z" />
                <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z" />
                <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z" />
              </g>
            </svg>
          </label>
        </div>

        {/* sidebar */}
        <aside class="drawer-side z-50">
          {/* Close when clicking on overlay */}
          <label
            htmlFor="mobile-drawer-nav"
            aria-label="close sidebar"
            class="drawer-overlay"
          />
          <div class="flex flex-col gap-8 min-h-full w-80 bg-secondary-content text-primary p-4 ">
            <div>
              <div class="flex justify-end w-full">
                <label
                  htmlFor="mobile-drawer-nav"
                  aria-label="close sidebar"
                  class="w-20 text-2xl font-bold cursor-pointer py-4 text-center"
                >
                  X
                </label>
              </div>
              <ul class="menu">
                {navigation?.links.map((link) => (
                  <li>
                    <a
                      href={link.url}
                      aria-label={link.label}
                      class="no-underline text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </nav>
    </>
  );
}
