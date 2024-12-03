"use client";
import { useState,useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";

const RecentProjects = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(()=>{
    setIsClient(true)
  },[])
  return (
    isClient?(
    <>
    <div className="mt-10 p-10" id="projects">
      <h1 className="heading">A Small Selection Of <span className="text-purple">Recent Projects</span></h1>
    </div>
    <div className="flex flex-wrap item-center justify-center p-4 gap-x-24  gap-y-8 mt-10">
      {projects.map((project)=>(
        <div key={project.id} className="sm:h-[41rem] lg:min-h-[35.5rem] h-[32rem] flex items-center justify-center
        sm:w-[570px] w-[80vw]"> 
          <PinContainer title={project.link} href={project.link}>
            <div className="relative flex item-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
              <div className="relatiive w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                <img src="/bg.png" alt="bg-img"/>
              </div>
              <img src={project.img} alt={project.title}
              className="z-10 absolute bottom-0"/>

            </div>
            <h1 className="font-bold lg:text-2xl md:text-xl line-clamp-1 text-base">
              {project.title}
            </h1>
            <p className="lg:text-sm lg:font-normal font-light line-clamp-2 text-sm">
              {project.des}
            </p>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {project.iconLists.map((i,index)=>(
                  <div key={i} className="border border-white/[0.2] rounded-full
                   bg-black-100 lg:h-10 w-10 h-10 flex justify-center items-center" style={{transform:`translateX(-${4 *index *2}px`}}>
                    <img src={i} alt={i} className="p-2"/>

                  </div>
                 
                ))}
              </div>
              <div className="flex justify-center items-center">
                <p className=" flex lg:text-lg md:text-xs text-sm text-purple">Check Live Site</p>
                <FaLocationArrow className="ms-2" color="#CBACF9"/>
              </div>

            </div>
           
          </PinContainer>
        </div>
      ))}
      

    </div>

    </>
      
    ):(<></>)
    
  );
};

export default RecentProjects;
