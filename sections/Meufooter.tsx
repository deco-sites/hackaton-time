import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface props {
  politicapriv: string;
  politicaReem: string;
  Politicafrete: string;
  home?: string;
  loja?: string;
  privalink?: string;
  reemblink?: string;
  fretelink?: string;
  imgsrc?: ImageWidget;
  imgdescription?: string;
}

export default function (props: props) {
  return (
    <footer class="py-8 px-8 flex flex-row justify-center flex-wrap max-w-[1920px] mx-auto min-h-[620px] border border-neutral">
      <div class=" p-8 border border-neutral flex-wrap shadow-md md:flex-nowrap md:w-1/3">
        <p class="text-white text-3xl pb-8">Entre em Contato</p>
        <form
          action="createaccount"
          class="overflow-hidden flex flex-col gap-8 py-6 border-base"
        >
          <input
            type="text"
            class="text-white border border-neutral pl-2 py-2 bg-base-content"
            placeholder="Nome"
          />
          <input
            type="text"
            class="text-white border border-neutral pl-2 py-2 bg-base-content"
            placeholder="Email"
          />
          <input
            type="text"
            class="text-white border border-neutral  pl-2 py-2 bg-base-content"
            placeholder="Mensagem"
          />
        </form>
        <div class="flex justify-center pt-10">
          <button class="border border-secondary rounded-full text-3xl py-3 px-8 rounded-2xl text-secondary lg:py-5 px-32">
            ENVIAR
          </button>
        </div>
      </div>
      <div class="md:w-2/3  border border-neutral flex-wrap shadow-md">
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start border border-neutral shadow-md pt-5 min-h-1/2 text-primary">
          <nav class="md:pl-4 w-full text-primary justify-center text-xl  flex flex-col gap-3 lg:gap-5 text-3xl">
            <a class="text-center" href={props.privalink}>
              {props.politicapriv}
            </a>
            <a class="text-center" href={props.reemblink}>
              {props.politicaReem}
            </a>
            <a class="text-center" href={props.fretelink}>
              {props.Politicafrete}
            </a>
          </nav>
          <nav class="flex w-full flex-col justify-center text-xl gap-3 lg:gap-5 text-3xl">
            <a class="text-center" href="#">{props.home}</a>
            <a class="text-center" href="#">{props.loja}</a>
          </nav>
          <nav class="flex w-full flex-col justify-center text-xl gap-3 lg:gap-5 text-3xl">
            <a class="text-center" href="#">Instagram</a>
            <a class="text-center" href="#">TikTok</a>
            <a class="text-center" href="#">Youtube</a>
            <a class="text-center" href="#">X(Twitter)</a>
          </nav>
        </div>
        <div class="min-h-1/2 border-base shadow-md">
          {props.imgsrc &&
            (
              <Image
                width={1920}
                src={props.imgsrc}
                alt={props.imgdescription}
              />
            )}
        </div>
      </div>
    </footer>
  );
}
