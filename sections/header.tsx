import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface props {
  icon: string;
  firstnava: string;
  secondnava: string;
  thirdnava: string;
  firsticon?: ImageWidget;
  firsticondescri: string;
  firsticonurl: string;
  secondicon: ImageWidget;
  secondiconurl: string;
  secondicondescri?: string;
  thirdicon: ImageWidget;
  thirdicondescri?: string;
  thirdiconurl: string;
}

export default function (props: props) {
  return (
    <header class="bg-secondary-content p-25 pt-3">
      <div class="max-w-[1920px] mx-auto flex justify-between px-8">
        <div class="flex">
          <img src={props.icon} alt="" class="pl-5 h-15 pt-5px" />
          <nav class="text-primary p-[20px]">
            <a
              href="#"
              class="text-primary py-2 px-4 border-l border-r border-neutral"
            >
              {props.firstnava}
            </a>
            <a
              href="#"
              class="text-primary py-2 px-4 border-l border-r border-neutral"
            >
              {props.secondnava}
            </a>
            <a
              href="#"
              class="text-primary py-2 px-4 border-l border-r border-neutral"
            >
              {props.thirdnava}
            </a>
          </nav>
        </div>
        <div class="flex items-center">
          <nav class="gap-4 flex flex-row">
            <a href={props.firsticonurl}>
              {props.firsticon &&
                (
                  <Image
                    width={30}
                    src={props.firsticon}
                    alt={props.firsticondescri}
                  />
                )}
            </a>
            <a href={props.secondiconurl}>
              {props.secondicon &&
                (
                  <Image
                    width={30}
                    src={props.secondicon}
                    alt={props.secondicondescri}
                  />
                )}
            </a>
            <a href={props.thirdiconurl}>
              {props.thirdicon &&
                (
                  <Image
                    width={30}
                    src={props.thirdicon}
                    alt={props.thirdicondescri}
                  />
                )}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
