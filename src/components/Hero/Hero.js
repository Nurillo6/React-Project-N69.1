import { useState } from "react";
import { SearchIcon } from "../../assets/images/Icon";
import CountryCard from "../CountryCard/CountryCard";
import Loading from "../../assets/images/loading.png"

function Hero({allCountries, countries, setCountries, setIsLoading, isLoading}) {

  function handleSearchCountry(e){
    setIsLoading(true)
    setTimeout(() => {
      const searchValues = allCountries.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setCountries(searchValues)
      setIsLoading(false)
    },1000)
  }
  function handleChangeSelect(e){
   const selectedCountry = allCountries.filter(item => item.id == e.target.value)
   setIsLoading(true)
   if(e.target.value == 0){
    setCountries(allCountries)
    setIsLoading(false)
   }
   else{
     setTimeout(() => {
      setCountries(selectedCountry)
      setIsLoading(false)
     },500)
   }
   
  }
    return (
    <section className="pt-[48px] bg-[#FAFAFA] dark:bg-[#202C36]">
      <div className="w-[1280px] mx-auto">
        <div className="flex items-center justify-between mb-[48px]">
          <label className="w-[480px] bg-white text-[#848484] dark:text-white dark:bg-[#2B3844] py-[18px] pl-[32px] flex items-center gap-[24px]  rounded-md shadow-md">
            <SearchIcon />
            <input onChange={handleSearchCountry} className="bg-transparent dark:text-white text-black w-[87%] outline-none font-normal text-[14px] leading-5" type="text" placeholder="Search for a country…" />
          </label>
          <select onChange={handleChangeSelect} className="w-[200px] outline-none px-[24px] text-black bg-white dark:text-white dark:bg-[#2B3844] rounded-md shadow-sm py-[18px]">
            <option value={0}>All</option>
            {allCountries.map(item => <option key={item.id} value={item.id}>{item.capital}</option>)}
          </select>
        </div>
        <div className='flex items-center justify-start gap-[70px] flex-wrap w-[1280px]'>
          { isLoading ? <img className="mx-auto mt-[100px]" src={Loading} width={150}/> : 
            countries.map(item => (
              <CountryCard key={item.id} country={item} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero