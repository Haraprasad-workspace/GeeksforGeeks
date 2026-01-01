
import MemberCard from "@/app/components/Team";
import GFGSeparator from "../components/GFGSeparator";

export default function BRTeamPage() {
  const brMembers = [
    {
      name: "Jaydevsinh Mahida",
      role: "BR Head",
      department: "Electronics Engineering",
      year: "2nd",
      image: "/team/Jaydevsinh Mahida_BR HEAD.jpg",
      linkedin: "https://www.linkedin.com/in/jaydevsinh-mahida-0a93a2339",
    },
    {
      name: "Kishan Patel",
      role: "BR Computer",
      department: "Computer Engineering",
      year: "2nd",
      image: "/team/Kishan Patel Computer BR.jpg",
      instagram: "https://www.instagram.com/mr_kishan.patel",
      linkedin: "https://www.linkedin.com/in/kishan-patel-17488a305",
    },
    {
      name: "Aditya Pandya",
      role: "BR IT",
      department: "IT Engineering",
      year: "2nd",
      image: "/team/Pandya Aditya__Branch Representative (IT)_1.jpg",
      instagram: "https://www.instagram.com/adityapandya96",
      linkedin: "https://www.linkedin.com/in/aditya-pandya-821540308",
    },{
  name: "Sneha Patel",
  role: "BR EC",
  department: "Electronics Engineering",
  year: "2nd",
  image: "/team/Sneh Patel_BR(ECE) .JPG", // 
  linkedin: "https://www.linkedin.com/in/sneh-patel-a72575321/",
},

{
  name: "Manav Rana",
  role: "BR Production",
  department: "Production Engineering",
  year: "3rd",
  image: "/team/Manav_BR.jpeg", 
  linkedin: "",
},
    {
      name: "Jay Thakar",
      role: "BR Mechanical",
      department: "Mechanical Engineering",
      year: "2nd",
      image: "/team/Jay Thakar_ ME-BR.jpg",
      instagram: "https://www.instagram.com/hpott_er13",
      linkedin: "https://www.linkedin.com/in/jay-thakar-1b0b4323a",
    },
    {
      name: "Siddharth Sinha",
      role: "BR Electrical",
      department: "Electrical Engineering",
      year: "2nd",
      image: "/team/Siddharth Sinha Electrical BR.jpg",
      linkedin: "https://www.linkedin.com/in/siddharth-sinha-753086380",
    },
    {
      name: "Arunika Ghosh",
      role: "BR Electronics",
      department: "Electronics Engineering",
      year: "3rd",
      image: "/team/Arunika Ghosh_EL_BR.jpg",
      instagram: "https://www.instagram.com/shei.meye",
      linkedin: "https://www.linkedin.com/in/arunikaghosh",
    },
    {
      name: "Happy Judal",
      role: "BR Civil",
      department: "Civil Engineering",
      year: "2nd",
      image: "/team/Happy Judal_CE (BR).jpg",
      linkedin: "https://www.linkedin.com/in/happy-judal-2ba247330",
    },
    
  ];

 return (
    <div className="bg-gray-50 dark:bg-neutral-900 font-roboto">
      <div className="max-w-7xl mx-auto px-6">
        
        <h1 className="text-3xl md:text-4xl font-semibold text-[#0F9D58] text-center mb-12">
          Branch Representative Team
        </h1>

        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {brMembers.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
      <GFGSeparator/>
    </div>
  );
}
