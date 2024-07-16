export const GridCard = (props) => {
  return (
    <div className="w-[296px] h-[320px] flex flex-col rounded-xl px-8	relative overflow-hidden">
      <img className="w-full h-full absolute left-0 top-0" src={props.image} />
      <div className=" absolute bottom-1 flex flex-col gap-y-4 pb-7">
        <button className="bg-[#4B6BFB] text-[#FFFFFF] w-fit h-fit rounded-md px-1 py-1	">
          {props.tag
            .slice(0, 5)
            .split(",")
            .map((item) => (
              <p className="py-1 px-2.5 text-white ">{item}</p>
            ))}
        </button>
        <p className="text-lg	font-semibold	text-[#FFFFFF]">{props.title}</p>
      </div>
    </div>
  );
};
