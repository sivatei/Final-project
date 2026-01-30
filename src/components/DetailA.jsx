import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LuTimer } from "react-icons/lu";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";


const DetailA = () => {
  
  const foods = [
    {
      id: 1,
      country: "Vietnam",
      name: "Pho Bo",
      mainImg: "https://i.pinimg.com/1200x/8d/e1/ab/8de1ab3778ad5d639eccf1df1975f820.jpg",
      rating: 4.8,
      time: "2hr 15min",
      servings: "4 servings",
      ingredients: 8,
      gallery: [
        "https://i.pinimg.com/1200x/16/8e/9d/168e9ded37d61d1218f0ad1d68eef855.jpg",
        "https://i.pinimg.com/1200x/96/54/09/9654094733264c98a0df5368b2690fde.jpg",
        "https://i.pinimg.com/736x/c7/a7/55/c7a7554051337e29db3500ffc29282c4.jpg",
      ],
      description: `Pho Bo is a fragrant Vietnamese noodle soup featuring tender slices of beef
      simmered in a rich, aromatic broth infused with star anise, cloves, cinnamon, and ginger.
      The soup is served with soft rice noodles and garnished with fresh herbs, bean sprouts,
      lime wedges, and chili slices. Each spoonful combines the warmth of the broth with the
      tender texture of beef and the freshness of herbs, making it a comforting and satisfying meal.`
    },
     {
      id: 2,
      country: "Cambodia",
      name: "Amok Trey",
      mainImg: "https://i.pinimg.com/1200x/d0/f2/d8/d0f2d88116abcd3cb81b0b2f67eda0c9.jpg",
      rating: 4.6,
      time: "3hr 20min",
      servings: "4 servings",
      ingredients: 5,
      gallery: [
        "https://i.pinimg.com/1200x/75/7b/2a/757b2adbf52cd7d39a0779ef6e0af7f4.jpg",
        "https://i.pinimg.com/736x/cd/c3/21/cdc32186fefadfa9bf3f0b19cdd3701f.jpg",
        "https://i.pinimg.com/736x/e7/6e/27/e76e27dcd136e638832c6dfcf0c054eb.jpg",
      ],
      description: `Amok Trey is a traditional Cambodian dish made from fresh fish and a fragrant
      kroeung paste containing lemongrass, galangal, turmeric, garlic, shallots, and kaffir lime leaves.
      The fish is steamed in coconut milk, resulting in a creamy, aromatic dish with a delicate balance
      of flavors. Typically served with steamed rice, the dish is both comforting and elegant,
      showcasing Cambodia's unique culinary heritage.`
    },
    {
      id: 3,
      country: "Indonesia",
      name: "Nasi Goreng",
      mainImg: "https://i.pinimg.com/1200x/ff/f3/a2/fff3a20a802740fe0bc3de086fdce696.jpg",
      rating: 4.7,
      time: "1hr 45min",
      servings: "3 servings",
      ingredients: 7,
      gallery: [
        "https://i.pinimg.com/1200x/57/45/7b/57457b81d0be24b4e5250ca5bb0523b7.jpg",
        "https://i.pinimg.com/736x/1f/7d/0b/1f7d0bda30cd9c7646c374bb20f33c2a.jpg",
        "https://i.pinimg.com/1200x/84/1b/c1/841bc1665850351ce27e2850ec63241b.jpg",
      ],
      description: `Nasi Goreng is Indonesias' iconic fried rice dish, cooked with sweet soy sauce,
      garlic, shallots, and chili, then mixed with vegetables, eggs, and your choice of protein such
      as chicken or shrimp. Often garnished with crispy shallots, fresh cucumber slices, and a fried egg
      on top, it offers a combination of savory, sweet, and spicy flavors. It's a versatile and
      satisfying dish perfect for breakfast, lunch, or dinner.`
    },
    {
      id: 4,
      country: "Greece",
      name: "Moussaka",
      mainImg: "https://i.pinimg.com/1200x/6d/4e/07/6d4e07886cf90dc78442010fe4d3b1d4.jpg",
      rating: 4.5,
      time: "2hr 50min",
      servings: "4 servings",
      ingredients: 9,
      gallery: [
        "https://i.pinimg.com/736x/ae/34/29/ae3429ef538ccd61665ff6ca40a75891.jpg",
        "https://i.pinimg.com/1200x/d7/41/0a/d7410ab8cd85ec8c92d81b68125208f8.jpg",
        "https://i.pinimg.com/1200x/13/5d/f4/135df4dc41db401b08c1ed5b89bc9439.jpg",
      ],
      description: `Moussaka is a classic Greek baked dish made of layers of eggplant, minced meat,
      and béchamel sauce. The minced meat is typically cooked with onions, garlic, and tomatoes, then
      layered between slices of tender eggplant. The creamy béchamel topping adds a rich, velvety
      texture. Baked to perfection, Moussaka is a hearty, comforting dish that embodies the flavors
      of Mediterranean cuisine.`
    },
    {
      id: 5,
      country: "South Korea",
      name: "Bibimbap",
      mainImg: "https://i.pinimg.com/1200x/0f/02/23/0f02235e0a8ceb2ec5253431fe84c43a.jpg",
      rating: 4.9,
      time: "1hr 30min",
      servings: "2 servings",
      ingredients: 10,
      gallery: [
        "https://i.pinimg.com/1200x/07/84/70/0784701da0758305657ba3226cc237f6.jpg",
        "https://i.pinimg.com/1200x/ff/94/40/ff944099cfa3072a27f2ed9b913545c3.jpg",
        "https://i.pinimg.com/736x/d6/6a/4e/d66a4edde8a80e0535a9340919837706.jpg",
      ],
      description: `Bibimbap is a vibrant Korean mixed rice dish featuring a colorful assortment
      of sautéed vegetables, marinated beef, and a fried egg on top of steamed rice. Served with
      gochujang, a spicy-sweet chili paste, each bite is packed with flavor and texture. Bibimbap
      emphasizes balance, combining protein, vegetables, and carbs, making it both nutritious
      and visually appealing.`
    },
     {
      id: 6,
      country: "France",
      name: "Coq au Vin",
      mainImg: "https://i.pinimg.com/1200x/3f/f4/a3/3ff4a3c41815f54d2974e7dc0a010652.jpg",
      rating: 4.7,
      time: "3hr 10min",
      servings: "4 servings",
      ingredients: 12,
      gallery: [
        "https://i.pinimg.com/1200x/34/51/b3/3451b374c688e6817c228b424b5d2e7e.jpg",
        "https://i.pinimg.com/1200x/16/5e/42/165e42859fcfd6be7bc15dc480655718.jpg",
        "https://i.pinimg.com/736x/12/95/0c/12950c3a7efee753119f0ecad46e4004.jpg",
      ],
      description: `Coq au Vin is a classic French dish of chicken braised slowly in red wine
      with mushrooms, onions, and aromatic herbs. The long cooking process tenderizes the chicken
      while infusing it with the rich, deep flavors of wine and herbs. Served with creamy mashed
      potatoes or crusty bread, Coq au Vin is a sophisticated, comforting dish that showcases
      traditional French culinary techniques.`
    },
    {
      id: 7,
      country: "Singapore",
      name: "Chilli Crab",
      mainImg: "https://i.pinimg.com/1200x/2a/92/a6/2a92a660957dc3074598977b3c34e445.jpg",
      rating: 4.8,
      time: "2hr 40min",
      servings: "3 servings",
      ingredients: 9,
      gallery: [
        "https://i.pinimg.com/1200x/51/c4/ab/51c4abfab5769ae98ad12f71498ab03a.jpg",
        "https://i.pinimg.com/1200x/57/45/7b/57457b81d0be24b4e5250ca5bb0523b7.jpg",
        "https://i.pinimg.com/1200x/14/18/b1/1418b12e986b9274e9d330a9c260151c.jpg",
      ],
      description: `Chilli Crab is Singapore's signature seafood dish featuring fresh crab
      stir-fried in a rich, tangy, and spicy tomato-based sauce. The crab is succulent and sweet,
      perfectly complementing the savory, slightly sweet sauce with a hint of heat. Often served
      with fried mantou buns to soak up the sauce, Chilli Crab is a beloved dish for gatherings
      and special occasions.`
    },
    {
      id: 8,
      country: "Spain",
      name: "Paella",
      mainImg: "https://i.pinimg.com/1200x/82/66/3e/82663e13738a93dffe2cf8adced42778.jpg",
      rating: 4.9,
      time: "2hr 30min",
      servings: "4 servings",
      ingredients: 10,
      gallery: [
        "https://i.pinimg.com/1200x/95/de/95/95de956ca1abc82350ad6384c5f79c9e.jpg",
        "https://i.pinimg.com/736x/7e/39/f1/7e39f1ad2abfcf9e1d0cc9534fe090f9.jpg",
        "https://i.pinimg.com/736x/bd/10/e3/bd10e30f9dbd6073b7415cd576a35885.jpg",
      ],
      description: `Paella is a traditional Spanish rice dish cooked with saffron, seafood,
      chicken, and a variety of vegetables. Originating from Valencia, the dish features a
      distinctive golden color from saffron and a rich depth of flavors from simmering the
      ingredients together. Served in a wide, shallow pan, Paella is visually striking
      and perfect for sharing, making it a festive and flavorful centerpiece.`
    },
  ];

const {id}=useParams();
const food=foods.find(u=>u.id===Number(id));

  return (
    <div>

       <div className='w-full h-dvh'>
              <div className='flex gap-105 bg-orange-100'>
                <NavLink to="/"><button className='w-10 h-10 bg-orange-50 text-2xl rounded-full shadow-lg my-8 mx-10 hover:scale-105 transition'><IoMdArrowRoundBack className='mx-2'/></button></NavLink>
                <div className='text-center'>
                <h1 className='text-3xl font-bold py-8 text-orange-900'>FOOD DETAIL</h1>
              </div>
            </div>
 <div className='w-full h-full  bg-orange-100 flex justify-center '>
                
              <div className='w-[85%] h-[90%] flex justify-center items-center shadow-2xl bg-orange-50'>
                <div className='w-[85%] h-[80%] flex'>
                <div className='w-[55%] h-full'>  
                  <div className='w-full h-full'>
                    <img className='w-[90%] h-full object-cover' src={food.  mainImg} alt="" /></div>
                </div>
                <div className=' w-[45%] h-full '>
                  <div className='w-full h-[60%]  text-center'>
                    <div><h1 className='text-center font-bold text-3xl pb-3 '>{food.name}</h1></div>
                       <div className='flex gap-2 justify-center font-bold'> 
                    <div className='flex text-3xl pt-0.5 gap-3 text-amber-400 '>  
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline /></div>
                    <p className='text-2xl '>({food.rating})</p> </div>
                    <div><p className='mb-3 mt-3'>{food.description}</p></div>
                
                   <div className='flex justify-around'>
                    <div className='flex gap-1.5'>
                       <LuTimer className='text-2xl text-amber-800'/>
                    <div className='flex gap-2'><p>{food.time}</p>
                    <p> {food.servings}</p></div>
                     </div>
                    <div className=''><p>{food. ingredients} ingredients</p></div>
                  

                   </div>
                 </div>
                  <div className='w-full h-[35%] grid grid-cols-3 gap-1 mt-10'>
                     {food.gallery.map((img, idx) => (
                      <div className=' bg-amber-300 w-full  h-full overflow-hidden'>
                      <img  className='w-full h-full object-cover' src={img} alt={`gallery-${idx}`}  />
                      
                    </div> ))}
                    
                    {/* <div className=' bg-amber-300 w-full  h-full overflow-hidden'>
                      <img  className='w-full h-full object-cover' src="https://i.pinimg.com/1200x/49/e7/45/49e745b5a4e94bf2b1c2de00dc2ec13c.jpg" alt="" />
                    </div>
                    <div className=' bg-amber-300 w-full  h-full overflow-hidden'>
                      <img  className='w-full h-full object-cover' src="https://i.pinimg.com/1200x/56/8f/93/568f933701047d1ef8594e88037e7491.jpg" alt="" />
                    </div> */}
                    
                    <Link to="/plan" onClick={(e) => e.stopPropagation()}><button className='w-50 h-10 text-center border-2 bg-orange-400 text-orange-50 rounded-xl mt-3 ml-26 hover:scale-105 hover:bg-linear-to-r from-orange-500 to-orange-600 transform'>VIEW RECIPE</button></Link>
                   
                  </div>
                </div>
              </div></div>
              </div>
        

       </div>
      

    </div>
  )
}

export default DetailA