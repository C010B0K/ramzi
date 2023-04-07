import React from "react";
import CardComponent from "../components/card_components/card";
import Header from "../components/Header";


export const SearchContext = React.createContext();

export function Home() {
  const [searchValue, setSearchValue] = React.useState('');
  return(
    <>
          <SearchContext.Provider value={{ searchValue, setSearchValue }} className='flex flex-col gap-[5rem]'>
      <Header/>
      <CardComponent/>
            </SearchContext.Provider>
    </>
  )
}