export const NavCards = (props) => {
  return (
    <div className="max-w-screen-lg relative">
      <img
        src={props.image}
        className="w-[100%] h-[600px] rounded-xl top-0 left-0 "
      />
      <div className="w-[90%] rounded-xl  bg-[#FFFFFF] absolute bottom-2 left-4 gap-y-6  flex flex-col	px-10 py-10 ">
        <div className=" flex flex-col gap-y-4">
          <button className="bg-[#4B6BFB] text-[#FFFFFF] w-fit h-fit rounded-md	text-sm	">
            {props.tag
              .slice(0, 5)
              .split(",")
              .map((item, index) => (
                <p className="py-1 px-2.5 text-white " key={index}>
                  {item}
                </p>
              ))}
          </button>
          <p className="text-4xl font-semibold text-left ">
            {props.title.slice()}
          </p>
        </div>
        <p className="text-base	font-normal	text-[#97989F]">
          {props.readable_publish_date}
        </p>
      </div>
    </div>
  );
};
