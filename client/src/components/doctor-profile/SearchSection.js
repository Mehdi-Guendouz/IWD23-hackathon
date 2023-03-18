import { ReactComponent as SearchIcon } from "../../icons/search-icon.svg"
import { ReactComponent as FilterIcon } from "../../icons/search.svg"
import { ReactComponent as LocationIcon } from "../../icons/location.svg"
import { ReactComponent as WhoIcon } from "../../icons/who.svg"
import { ReactComponent as DateIcon } from "../../icons/date.svg"
import { ReactComponent as HeartIcon } from "../../icons/heart.svg"
import { ReactComponent as EyeIcon } from "../../icons/eye.svg"
import { ReactComponent as OncoIcon } from "../../icons/onco.svg"
import { ReactComponent as BrainIcon } from "../../icons/brain.svg"
import { ReactComponent as CardioIcon } from "../../icons/cardio.svg"
import { ReactComponent as ToothIcon } from "../../icons/tooth.svg"
import { ReactComponent as KarchIcon } from "../../icons/karch.svg"
import { ReactComponent as PulmIcon } from "../../icons/pulm.svg"
import { ReactComponent as SkinIcon } from "../../icons/skin.svg"
import { ReactComponent as HemaIcon } from "../../icons/hema.svg"
import { ReactComponent as GynIcon } from "../../icons/gyn.svg"

import { useState } from "react"

export const SearchSection = () => {
  const [hashtags,setHashtags] = useState(["#heart","#heart","#heart","#heart","#eyes","#eyes","#eyes","#mouth","#mouth","#mouth","#mouth"])
  const handleSearch = () => {
    //pass
  }
  return (
    <div className="space-y-4 py-10 w-full">
        <div className="flex flex-row px-2 space-x-2 justify-between">
            <div class="relative w-5/12">
                <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                        <SearchIcon className="w-7 h-7"/>
                    </div>
                <input type="search" id="default-search" class="block w-full p-4 py-5 pl-16 text-md text-gray-900 border border-gray-300 rounded-2xl" placeholder="Search Heart...." required/>
            </div>
            <div className="flex bg-white border rounded-xl border-gray-300 flex-row py-2 px-3 w-52  space-x-3 items-center">
                <LocationIcon className="w-14"/>
                <div className="flex flex-col justify-center  items-start">
                    <span className="text-xs text-gray-600">Location</span>
                    <input className="text-sm font-medium text-black w-9/12" type="text" placeholder="Oran, Algeria"/>
                </div>
            </div>
            <div className="flex bg-white border rounded-xl border-gray-300 flex-row py-2 px-3 w-52  space-x-3 items-center">
                <WhoIcon className="w-14"/>
                <div className="flex flex-col justify-center  items-start">
                    <span className="text-xs text-gray-600">Who</span>
                    <input className="text-sm font-medium text-black w-9/12" type="text" placeholder="Oran, Algeria"/>
                </div>
            </div>
            <div className="flex bg-white border rounded-xl border-gray-300 flex-row py-2 px-3 w-52  space-x-3 items-center">
                <DateIcon className="w-14"/>
                <div className="flex flex-col justify-center  items-start">
                    <span className="text-xs text-gray-600">Appointment Date</span>
                    <input className="text-sm font-medium text-black w-9/12" type="text" placeholder="Oran, Algeria"/>
                </div>
            </div>
        <button className="W-16 h-16 px-5 rounded-xl hover:bg-emerald-600 bg-[#66CA98]"><FilterIcon/></button>
            
            
        </div>
        <div className="px-2 flex flex-row justify-between">
            {hashtags.map((el,index)=>{
                return (
                    <div key={index} className="bg-gray-200 rounded-lg py-1.5 px-4 text-gray-600 text-sm">{el}</div>

                );

            })}
            
        </div>
        <div className="px-2 flex flex-row justify-between overflow-x-scroll space-x-2 w-full py-4">
            <div className="min-w-[9rem] bg-white rounded-2xl h-28 flex flex-col space-y-2 items-center justify-center">
                <HeartIcon className="w-12 h-12"/>
                <span className="font-medium">Cardiologyst</span>
            </div>
            <div className="min-w-[9rem] px-2 bg-white rounded-2xl h-28 flex flex-col space-y-2 items-center justify-center">
                <EyeIcon className="w-12 h-12"/>
                <span className="font-medium">Ophtamologyst</span>
            </div>
            <div className="min-w-[9rem] bg-white rounded-2xl h-28 flex flex-col space-y-2 items-center justify-center">
                <OncoIcon className="w-12 h-12"/>
                <span className="font-medium">Oncologyst</span>
            </div>
            <div className="min-w-[9rem] bg-white rounded-2xl h-28 flex flex-col space-y-2 items-center justify-center">
                <BrainIcon className="w-12 h-12"/>
                <span className="font-medium">Neurologist</span>
            </div>
            <div className="min-w-[9rem] bg-white rounded-2xl h-28 flex flex-col space-y-2 items-center justify-center">
                <ToothIcon className="w-12 h-12"/>
                <span className="font-medium">Dentist</span>
            </div>
            <div className="min-w-[9rem] bg-white rounded-2xl h-28 flex flex-col space-y-2 items-center justify-center">
                <KarchIcon className="w-12 h-12"/>
                <span className="font-medium">Gastroenterologist</span>
            </div>
            <div className="min-w-[9rem] bg-white rounded-2xl h-28 flex flex-col space-y-2 items-center justify-center">
                <SkinIcon className="w-12 h-12"/>
                <span className="font-medium">Dermatologist</span>
            </div>
            <div className="min-w-[9rem] bg-white rounded-2xl h-28 flex flex-col space-y-2 items-center justify-center">
                <HemaIcon className="w-12 h-12"/>
                <span className="font-medium">Hematologist</span>
            </div>
            <div className="min-w-[9rem] bg-white rounded-2xl h-28 flex flex-col space-y-2 items-center justify-center">
                <PulmIcon className="w-12 h-12"/>
                <span className="font-medium">Pulmonologist</span>
            </div>
            
            <div className="min-w-[9rem] bg-white rounded-2xl h-28 flex flex-col space-y-2 items-center justify-center">
                <GynIcon className="w-12 h-12"/>
                <span className="font-medium">Gynecologist</span>
            </div>
            
        </div>
    </div>
  )
}
