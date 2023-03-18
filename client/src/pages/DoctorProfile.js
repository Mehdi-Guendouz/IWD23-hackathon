import { SearchSection } from "../components/doctor-profile/SearchSection"
import Doctors from "../components/Doctors/Doctors"

export const DoctorProfile = () => {
  return (
    <div className="bg-[#F4F6F5] font-poppins pb-10">
      <SearchSection/>
      <Doctors/>
    </div>
  )
}

