const cards = [
    { title: "training Courses", color: "#ffdcd1"},
    { title: "2,769 online courses", color: "#b9eaa8"},
    { title: "training Courses", color: "#ffffff"},
  ];
  
  const Cards = () => {
    return (
      <div className="flex justify-center gap-6 bg-[#252842] py-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`py-[22px] px-[19px] shadow-lg w-64 text-centers ${
              index === 2 ? "bg-[#23a6f0] text-white" : "bg-white text-black"
            }`}
          >
            
            <div
              className="w-12 h-12  mb-4 rounded-md py-[22px] px-[19px]"
              style={{ backgroundColor: card.color }}
            ></div>
            
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            
            <div
              className="h-[2px] w-[50px] mt-3 mb-3"
              style={{ backgroundColor: index === 2 ? "white" : "#E74C3C" }}
            ></div>
            
            <p
              className={`text-sm ${
                index === 2 ? "text-white" : "text-gray-500 font-normal"
              }`}
            >
              The gradual accumulation of information about atomic and small-scale
              behaviour...
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Cards;
  