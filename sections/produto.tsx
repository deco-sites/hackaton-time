import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface props {
  firstsrc?: ImageWidget;
  secondsrc?: ImageWidget;
  secondname?: string;
  priceum: string;
  pricedois: string;
  nomeum: string;
  nomedois: string;
  buynow: string;
}

export default function (props: props) {
  return (
    <div class="flex px-4 max-w-[1920px] mx-auto">
      <div class="w-1/2 border border-2 border-neutral overflow-hidden hover:bg-primary text-primary hover:text-info transition-all duration-500">
        <div class="flex justify-between w-full py-8 pr-6">
          <h1 class="min-w-24 md:w-full max-w-[430] text-4xl mb-4 min-h-20 pl-4 text-start font-bold">
            {props.nomeum}
          </h1>
          <button class="text-secondary text-4xl border border-solid border-2 p-4 mb-4 border-neutral transition-all duration-400 hover:bg-secondary hover:text-primary font-bold">
            NOVO
          </button>
        </div>
        <div class="w-full transition-transform duration-300 ease-out transform hover:scale-110">
          {props.firstsrc && (
            <Image width={1920} alt={props.nomeum} src={props.firstsrc} />
          )}
        </div>
        <div class="flex justify-between text-2xl py-12 px-8">
          <button class="p-4 underline">{props.buynow}🠒</button>
          <p class="p-4">{props.priceum}</p>
        </div>
      </div>
      <div class="w-1/2 border border-2 border-neutral overflow-hidden hover:bg-primary text-primary hover:text-info transition-all duration-500">
        <div class="flex justify-between w-full py-8 pr-6">
          <h1 class="min-w-24 md:w-full text-4xl max-w-[430px] pl-4 mb-4 min-h-20 text-start font-bold">
            {props.nomedois}
          </h1>
          <button class="text-secondary text-4xl border border-solid border-2 p-4 mb-4 border-neutral font-bold hover:bg-secondary hover:text-primary">
            NOVO
          </button>
        </div>
        <div class="w-full transition-transform duration-300 ease-out transform hover:scale-110">
          {props.secondsrc && (
            <Image width={1920} alt={props.nomedois} src={props.secondsrc} />
          )}
        </div>
        <div class="flex justify-between text-2xl py-12 px-8">
          <button class="p-4 underline">{props.buynow}🠒</button>
          <p class="p-4">{props.pricedois}</p>
        </div>
      </div>
    </div>
  );
}

/*
primary branco
base - branco 2
base é fundo preto
secundary tbm

vermelho secondary
info roxo

*/
