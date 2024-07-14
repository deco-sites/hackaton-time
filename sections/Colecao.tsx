export interface props {
  titlecolection: string;
  yearcolection: number;
}

export default function (props: props) {
  return (
    <div class="py-12 max-w-[1920px] mx-auto">
      <div class="text-white text-8xl">
        <p class="font-bold">
          {props.titlecolection}{" "}
          <span class="text-info tracking-widest">{props.yearcolection}</span>
        </p>
      </div>
    </div>
  );
}
