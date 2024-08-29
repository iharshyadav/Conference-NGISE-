// import React from 'react';
import img1 from "/indiagate.jpg";
import img2 from "/akshadham.jpg";
import img3 from "/jamamasjid.jpg";
import img4 from "/lotus_temple.jpg";
import img5 from "/jantar-mantar.jpg";
import img6 from "/redfort.jpg";
import img7 from "/humanyu_tomb.jpg";
import img8 from "/lodhi_garden.jpg";
import img9 from "/gurudwara.jpg";

const data = [
  {
    image: img1,
    name: "The India Gate",
    desc: "The India Gate is a war memorial located near the Rajpath on the eastern edge of the ceremonial axis of New Delhi.",
    website: "https://delhitourism.gov.in/delhitourism/tourist_place/india_gate.jsp",
  },
  {
    image: img2,
    name: "Akshardham Temple",
    desc: "Akshardham means the divine abode of God. It is hailed as an eternal place of devotion, purity, and peace.",
    website: "https://delhitourism.gov.in/delhitourism/tourist_place/akshardham_temple.jsp",
  },
  {
    image: img3,
    name: "Jama Masjid",
    desc: "Jama Masjid of Delhi, is one of the largest mosques in India. Its builder is the Mughal emperor Shah Jahan.",
    website: "https://delhitourism.gov.in/delhitourism/tourist_place/jama_masjid.jsp",
  },
  {
    image: img4,
    name: "Lotus Temple",
    desc: "The Lotus Temple is notable for its lotus-like shape, it has become a prominent attraction in the city.",
    website: "https://delhitourism.gov.in/delhitourism/tourist_place/bahai_temple.jsp",
  },
  {
    image: img5,
    name: "Jantar Mantar",
    desc: "A Jantar Mantar is an assembly of stone-built astronomical instruments, designed to be used with the naked eye.",
    website: "https://delhitourism.gov.in/delhitourism/tourist_place/jantar_mantar.jsp",
  },
  {
    image: img6,
    name: "Red Fort",
    desc: "The Red Fort, also known as Lal Qila, is a historic fort in Delhi, India, that historically served as the main residence of the Mughal emperors.",
    website: "https://whc.unesco.org/en/list/231/",
  },
  {
    image: img7,
    name: "Humayun's Tomb",
    desc: "Humayun's Tomb was built in the 1560s, with the patronage of Humayun's son, the great Emperor Akbar.",
    website: "https://delhitourism.gov.in/delhitourism/tourist_place/humayun_tomb.jsp",
  },
  {
    image: img8,
    name: "Lodhi Garden",
    desc: "Lodi Garden is a city park situated in New Delhi, India, spread over 90 acres.",
    website: "https://en.wikipedia.org/wiki/Lodi_Gardens",
  },
  {
    image: img9,
    name: "Gurudwara Bangla Sahib",
    desc: "Gurudwara Bangla Sahib is one of the most prominent Sikh houses of worship, known for its association with the eighth Sikh Guru.",
    website: "https://delhitourism.gov.in/delhitourism/tourist_place/gurudawra_bangla_sahib.jsp",
  }
];

const PlaceToVisit = () => {
  return (
    <div className="py-10">
      <div className='flex justify-center'>
        <h1 className='text-4xl md:text-5xl mb-7 font-bold border-b-4 inline-block border-[#46ce9c] pb-2'>Places To Visit</h1>
      </div>
      <div className="max-w-4xl mx-auto text-center px-4 mb-6">
        <p className="text-base md:text-lg">
          There are plenty of tourist attractions in nearby areas. 
          Some popular names are Jantar Mantar, Qutub Minar, Lotus Temple, India Gate, Red Fort, etc.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 md:px-4 lg:px-10">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover"/>
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">{item.name}</p>
              <p className="text-sm mb-4">{item.desc}</p>
              <a href={item.website} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceToVisit;

