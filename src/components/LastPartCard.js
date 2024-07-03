export const LastPartCard = (props) => {
  return (
    <div className="w-[296px] h-[320px] flex flex-col rounded-xl justify-end pb-7 px-7	">
      <img src={props.image} />
      <div className="flex flex-col gap-y-4 ">
        <button className="bg-[#4B6BFB] text-[#FFFFFF] w-fit h-fit rounded-md px-1 py-1	">
          Technology
        </button>
        <p>
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
      </div>
    </div>
  );
};
