import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface props {
  firstpatro?: ImageWidget;
  firstpatroname?: string;
  firstpatrourl?: string;

  secondpatro?: ImageWidget;
  secondpatroname?: string;
  secondpatrourl?: string;

  thirdpatro?: ImageWidget;
  thirdpatroname?: string;
  thirdpatrourl?: string;

  fourthpatro?: ImageWidget;
  fourthpatroname?: string;
  fourthpatrourl?: string;

  fifthpatro?: ImageWidget;
  fifthpatroname?: string;
  fifthpatrourl?: string;
}

export default function (props: props) {
  return (
    <nav class="w-full flex justify-around items-center pt-8 transition-all">
      <a
        class="hover:drop-shadow-custom-box duration-300"
        href={props.firstpatrourl}
        target="_blank"
      >
        {props.firstpatro &&
          (
            <Image
              class="transition-transform duration-300 transform hover:scale-110"
              width={150}
              src={props.firstpatro}
              alt={props.firstpatroname}
            />
          )}
      </a>
      <a
        class="hover:drop-shadow-custom-box duration-300"
        href={props.secondpatrourl}
        target="_blank"
      >
        {props.secondpatro &&
          (
            <Image
              class="transition-transform duration-300 transform hover:scale-110"
              width={150}
              src={props.secondpatro}
              alt={props.secondpatroname}
            />
          )}
      </a>
      <a
        class="hover:drop-shadow-custom-box duration-300"
        href={props.thirdpatrourl}
        target="_blank"
      >
        {props.thirdpatro &&
          (
            <Image
              class="transition-transform duration-300 transform hover:scale-110"
              width={150}
              src={props.thirdpatro}
              alt={props.thirdpatroname}
            />
          )}
      </a>
      <a
        class="hover:drop-shadow-custom-box duration-300"
        href={props.fourthpatrourl}
        target="_blank"
      >
        {props.fourthpatro &&
          (
            <Image
              class="transition-transform duration-300 transform hover:scale-110"
              width={150}
              src={props.fourthpatro}
              alt={props.fourthpatroname}
            />
          )}
      </a>
      <a
        class="hover:drop-shadow-custom-box duration-300"
        href={props.fifthpatrourl}
        target="_blank"
      >
        {props.fifthpatro &&
          (
            <Image
              class="transition-transform duration-300 transform hover:scale-110"
              width={150}
              src={props.fifthpatro}
              alt={props.fifthpatroname}
            />
          )}
      </a>
    </nav>
  );
}
