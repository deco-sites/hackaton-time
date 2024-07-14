export interface props {
  titlecolection: string;
  yearcolection: number;
}

export default function (props: props) {
  return (
    <div class="py-12 max-w-[1920px] mx-auto">
      <h1 class="text-white text-9xl">
        {props.titlecolection} {props.yearcolection}
      </h1>
    </div>
  );
}
