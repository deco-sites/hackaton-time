export interface props {
  icon: string;
  firsta: string;
  seconda: string;
  thirda: string;
}

export default function (props: props) {
  return (
    <header class="bg-secondary-content p-25 flex flex-cow pt-3">
      <img src={props.icon} alt="" class="pl-5 h-15 pt-5px" />
      <nav class="text-primary p-[20px]">
        <a
          href="#"
          class="text-white py-2 px-4 border-l border-r border-gray-600"
        >
          {props.firsta}
        </a>
        <a
          href="#"
          class="text-white py-2 px-4 border-l border-r border-gray-600"
        >
          {props.seconda}
        </a>
        <a
          href="#"
          class="text-white py-2 px-4 border-l border-r border-gray-600"
        >
          {props.thirda}
        </a>
      </nav>
      <nav>
        <button>
          <img src="../icon.png" alt="" />
        </button>
        <button></button>
        <button></button>
      </nav>
    </header>
  );
}
