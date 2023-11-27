import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';

const Menu = () => {

    const [menu, setMenu] = useState([]);

    const [filteredItems, setFilteredItems] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("all");

    const [sortOption, setSortOption] = useState("default");

    //loading data

    useEffect(() => {
           const fetchData = async () => {
            try {
                const response = await fetch("/menu.json")
                const data = await response.json();
                // console.log(data);
                setMenu(data);
                setFilteredItems(data);
            } catch (error) {
                console.log("Error fetching data", error);
            }
           };

           //call the function

           fetchData();
      }, [])
    
      //filtering data based on category
      const filterItems = (category) => {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);

        setFilteredItems(filtered);
        setSelectedCategory(category);
      };

      //show all data
      const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory("all");
      }

      //sorting based on A-Z, Z-A, Low to High Pricing
      const handleSortChange = (option) => {
        setSortOption(option);

        let sortedItems = [...filteredItems];

        //logic
        switch(option) {
            case "A-Z":
              sortedItems.sort((a, b) => a.name.localeCompare(b.name))
              break;
            case "Z-A":
                sortedItems.sort((a, b) => b.name.localeCompare(a.name))
              break;
            case "low-to-high":
              sortedItems.sort((a, b) => a.price - b.price)
              break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price)
              break;
            default:
              // code block
              break; 
          }

          setFilteredItems(sortedItems);
      }

    return (
        <div>
            {/* menu banner */}
            <div className='max-w-screen-2xl section-container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FAFAFA] to-500%'>
                <div className='py-48 flex flex-col  justify-center items-center gap-8'>

                    {/* text */}
                    <div className='text-center space-y-7 px-4'>
                        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-[#000]'>For the Love of Delicious <span className='text-green'>Food</span></h2>
                        <p className='text-xl text-[#4A4A4A] md:w-4/5 mx-auto'>Come with family & feel the joy of mouthwatering food such as Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas Rellenas and more for a moderate cost</p>
                        <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                    </div>

                </div>
            </div>

            {/* menu shop section */}
            <div className='section-container'>
                {/* filtering and sorting */}
                <div>
                    {/* btns */}
                </div>

                {/* products card */}
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        filteredItems.map((item) => (
                            <Cards key={item._id} item={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu