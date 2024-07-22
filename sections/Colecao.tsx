export interface props {
  titlecolection: string;
  yearcolection: number;
}

export default function (props: props) {
  return (
    <div class="py-12 max-w-[1920px] mx-auto">
      <div class="text-white   text-7xl md:text-9xl">
        <p class="font-bold break-all">
          {props.titlecolection}{" "}
          <span class="text-info tracking-widest">{props.yearcolection}</span>
        </p>
      </div>
    </div>
  );
}
