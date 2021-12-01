import { useEffect, useState } from "react";
import AppButton from "../components/AppButton";
import AppSelect from "../components/AppSelect";
import RegionInterface from "../models/RegionInterface";

function Region(props: { onSubmit: (region: RegionInterface) => void }) {
  const [regions, setRegions] = useState<RegionInterface[]>([]);
  const [filteredRegions, setFilteredRegions] = useState<RegionInterface[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<RegionInterface|null>(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/listregions`)
      .then(res => res.json())
      .then(
        (result) => {
          setRegions(result.regions);
          setFilteredRegions(result.regions);
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error.message);
        }
      )
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-full w-full">
      <div className="">
        <div className="container max-w-lg mx-auto flex flex-col justify-start text-left px-6 lg:px-0 pb-32">
          <h3 className="text-3xl md:text-4xl font-extrabold text-app-yellow mt-20 md:mt-10 transform scale-y-75 md:scale-y-85">RIVERS</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 md:mt-48 md:leading-snug">Get advice on your next educational journey....</h1>
          <div className="max-w-sm">
            <AppSelect<RegionInterface> className="mt-10"
              valueProp='id' labelProp="regionname"
              options={filteredRegions}
              selected ={selectedRegion}
              onChange ={(region)=>setSelectedRegion(region)}
              onSearch={(st)=>{setFilteredRegions(regions.filter(fr=>fr.regionname.toLowerCase().includes(st.toLowerCase())))}}
            />
            <AppButton className="mt-10 w-full" text="Next" onClick={() => props.onSubmit(selectedRegion!)} disabled={selectedRegion==null} />
          </div>
        </div>
      </div>
      <div className="flex md:items-end bg-gradient-to-r from-app-black  to-app-black md:bg-50% bg-repeat-y md:bg-right pb-20">
        <div className="flex-1 flex flex-col items-center md:items-end space-y-6 md:space-y-8 px-6 lg:px-0 -mt-14">
          <div className="flex space-x-6 md:space-x-8 md:mt-32">
            <img src="/img/placeholder-4.png" alt="students-in-blue-standing" className="object-contain rounded-md" />
            <div className="md:w-12 hidden md:block"></div>
          </div>
          <div className="flex space-x-6 md:space-x-8">
            <img src="/img/placeholder-1.png" alt="students-in-blue-standing" className="object-contain rounded-md h-44 md:h-auto" />
            <img src="/img/placeholder.png" alt="students-in-blue-standing" className="object-contain rounded-md h-44 md:h-auto" />
          </div>
          <div className="flex space-x-6 md:space-x-8 justify-items-center md:items-start">
            <img src="/img/placeholder-3.png" alt="students-in-blue-standing" className="object-contain rounded-md h-36  md:h-auto" />
            <img src="/img/placeholder-2.png" alt="students-in-blue-standing" className="rounded-md h-52 md:h-auto" />
            <div className="md:w-12 hidden md:block"></div>
          </div>
        </div>
        <div className="hidden md:block w-32"></div>
      </div>
    </div>
  );
}

export default Region;
