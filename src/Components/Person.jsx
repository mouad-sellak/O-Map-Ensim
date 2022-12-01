import React,{useState} from 'react';
import person from "../person.json";


export default function Person() {
    const [query, setQuery] = React.useState("");
    const length = person.data.length;
    const search=(e)=>{
       setQuery(e.target.value);
     

    }
    return (
       
    
        <div>
            
         <div className='flex flex-wrap justify-around mt-4 ' >
   

              <i class="fas fa-filter mt-2 text-3xl text-indigo-700"></i>
         <input
         
    type="text"
    id="participant"
    placeholder="   Rechercher un participant"
    class="mt-1 w-1/3 rounded-md border-gray-800 shadow-sm shadow-gray-400 sm:text-sm"
    onChange={search}
  />


  
  <h3 className='mt-4 text-lg rounded-md   font-bold bg-indigo-700 text-white p-2'>  Nombre de Participants: {length} </h3>
  </div>
        <div className='flex m-16 flex-wrap m-8 justify-around  '>
            {person.data
            .filter((choice) => {
              if (query === "") {
                return choice;
              } else if (
                choice.name.toLowerCase().includes(query.toLowerCase())
              ) {
                return choice;
              }  })
            .map((choice) => (
                <div className='shadow-md shadow-gray-500 mt-8'>
                <a href="#" class="relative block border border-gray-100">
                

                    <img
                        alt=""
                        src={choice.image}
    class="h-44 w-72 object-contain rounded-lg lg:h-72"
                    />

                
                     

<div className='m-8'>
                        <h3 class="mt-4 text-lg text-indigo-700  font-bold">{choice.name}</h3>
                        <div>
  <h2 class="sr-only">Steps</h2>

  <div>
   
    <div class="overflow-hidden rounded-full bg-gray-200 mt-2">
      

    {choice.progress == "50%" &&   <div class="h-2 w-28 rounded-full bg-indigo-500"></div>}
    {choice.progress == "70%" &&   <div class="h-2 w-40 rounded-full bg-indigo-600"></div>}
    {choice.progress == "30%" &&   <div class="h-2 w-16 rounded-full bg-indigo-300"></div>}
    {choice.progress == "20%" &&   <div class="h-2 w-12 rounded-full bg-indigo-200"></div>}
    {choice.progress == "55%" &&   <div class="h-2 w-32 rounded-full bg-indigo-500"></div>}
    {choice.progress == "100%" &&   <div class="h-2 w-50 rounded-full bg-indigo-900"></div>}
    {choice.progress == "90%" &&   <div class="h-2 w-48 rounded-full bg-indigo-800"></div>}
     

    </div>

    <p className='mt-2 text-indigo-700'>{choice.progress}</p>



   
  </div>
</div>

<div className='flex justify-around m-4 '>
                       
                            <a
          href="https://wa.me/33659577133"
   
          target="_blank"
          rel="noopener noreferrer"
          class=" rounded-lg   text-white  bg-indigo-700  text-sm font-medium w-10"
        ><i class="fas fa-comments text-xl"></i></a>
                            
                     
                        <button
                            type="button"
                            class="rounded-lg    text-white  bg-indigo-700 text-sm font-medium w-10"
                        >
                           <i class="fas fa-phone text-xl"></i>
                        </button>
                      
                            
                        </div>
                           </div>
                    
                   
                </a>
</div>


            ))}
        </div>
        </div>

    );
};
