import React from 'react'
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";


function HeroArea() {
  return (
    <section className="bg-[url('./heroimg.png')] w-full bg-no-repeat bg-cover h-[80vh] mt-4 overflow-hidden">
      <div className="container w-full mx-auto">
        <h1 className="lg:text-6xl text-2xl w-[90%] lg:w-[65%] font-bold py-8 px-10 mt-[30px] text-white -leading-6 text-center">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>
        <div className="bg-[#fbfcff] lg:w-[750px] lg:h-[150px]  h-auto py-10 px-10 lg:ms-10 rounded-xl  w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Location"
                placeholder="Oshodi"
                className="w-[100%]"
              >
                <AutocompleteItem value="Oshodi">Oshodi</AutocompleteItem>
                <AutocompleteItem value="Hablu Programmer">
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem value="Stack Learner">
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Date"
                placeholder="Date"
                className="w-[100%]"
              >
                <AutocompleteItem value="Oshodi">Oshodi</AutocompleteItem>
                <AutocompleteItem value="Hablu Programmer">
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem value="Stack Learner">
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Activities"
                placeholder="Night Clubs"
                className="w-[100%]"
              >
                <AutocompleteItem value="Oshodi">Oshodi</AutocompleteItem>
                <AutocompleteItem value="Hablu Programmer">
                  Hablu Programmer
                </AutocompleteItem>
                <AutocompleteItem value="Stack Learner">
                  Stack Learner
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div>
              <Button color="primary" className="w-full p-8 mt-2">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroArea