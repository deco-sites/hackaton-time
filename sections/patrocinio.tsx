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
    <nav class="w-full flex justify-around items-center pt-8">
      <a href={props.firstpatrourl} target="_blank">
        {props.firstpatro &&
          (
            <Image
              width={150}
              src={props.firstpatro}
              alt={props.firstpatroname}
            />
          )}
      </a>
      <a href={props.secondpatrourl} target="_blank">
        {props.secondpatro &&
          (
            <Image
              width={150}
              src={props.secondpatro}
              alt={props.secondpatroname}
            />
          )}
      </a>
      <a href={props.thirdpatrourl} target="_blank">
        {props.thirdpatro &&
          (
            <Image
              width={150}
              src={props.thirdpatro}
              alt={props.thirdpatroname}
            />
          )}
      </a>
      <a href={props.fourthpatrourl} target="_blank">
        {props.fourthpatro &&
          (
            <Image
              width={150}
              src={props.fourthpatro}
              alt={props.fourthpatroname}
            />
          )}
      </a>
      <a href={props.fifthpatrourl} target="_blank">
        {props.fifthpatro &&
          (
            <Image
              width={150}
              src={props.fifthpatro}
              alt={props.fifthpatroname}
            />
          )}
      </a>
    </nav>
  );
}
