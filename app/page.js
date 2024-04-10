"use client"
import React, { useEffect, useState } from 'react'
import Cards from '@/Components/Cards' 
import Form from '@/Components/Form'

const page = () => {
  const obj = [
    {SongName: "Nowadays", Artist:"Khan Bhaini", vid:"https://youtu.be/B5nXNUdmgLM?si=uWNs01X59gP5_r95" },
    {SongName: "Main Suneya", Artist:"Ammy Virk", vid:"https://youtu.be/9i1dXa13CxA?si=PIGbp3V-QpjE5ENh" },
    {SongName: "Sardaar Munde", Artist:"Ammy Virk", vid:"https://youtu.be/lqyt-aZsdEM?si=GsGkip5IFI9NTxTN" },
    {SongName: "Gunday Returns", Artist:"Dilpreet Dhillon", vid:"https://youtu.be/x51I9PV8B3Y?si=ZyNKAPmycuAiEyso" },
    {SongName: "BULLET", Artist:"HARSIMRAN", vid:"https://youtu.be/xW_rfv099rw?si=8D5NM1c9OFRn44xp" },
    {SongName: "Panga", Artist:"Diljit Dosanjh", vid:"https://youtu.be/Qrd7GyQvaCg?si=NeR5GCPZ15Liqo2I" },
      // {SongName: "Never Fold", Artist:"Sidhu Moosewala", vid:"https://soundcloud.com/jaspreet-badhan-652985517/295-sidhu-moosewala-new-song?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"},
      // {SongName: "Take It Easy", Artist:"Sidhu Moosewala", vid:"https://soundcloud.com/user-46285871/take-it-easy-karan-aujla-ikky-four-you-ep-latest-punjabi-songs-2023?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"},
      // {SongName: "Drippy", Artist:"Sidhu Moosewala", vid:"https://soundcloud.com/dhillon-652212896/drippy-sidhu-moosewala?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"},
      // {SongName: "Patiala Flow", Artist:"Parmish Verma", vid:"https://soundcloud.com/dhillon-652212896/patiala-flow-parmish-verma?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"},
      // {SongName: "Never Fold", Artist:"Sidhu Moosewala", vid:"https://soundcloud.com/bhogalsaabmusic/love-fold-no-name-sidhu-moose?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"},
      // {SongName: "King Shit", Artist:"Shubh", vid:"https://soundcloud.com/jaskaran-singh-847899430/sets/shubh-all-songs?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"},
      // {SongName: "The Jatts", Artist:"Varindar Brar", vid:"https://soundcloud.com/songs-534169550/the-jatts-varinder-brar?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"}
  ]
  // const obj2 = [
  //   {SongName:"Thaa", Artist:"Varindar Brar", vid:"https://www.youtube.com/watch?v=q18sBAVMlMs"}
  // ]

  const [users,setUsers] = useState(obj);

  useEffect(() => {
    const fetchData = async () => {
      function shuffleArray(arr) {
        return arr.sort(function (a, b) {
          return Math.random() - 0.5;
        });
      }
      const shuffledData = shuffleArray(obj);
      setUsers(shuffledData);
    };

    fetchData(); 
  },[]);
  
  
  const handleFormSubmit = (data)=>{
    setUsers([...users,data]);
  }
  const handleRemove = (id)=>{
    setUsers(()=>users.filter((item,index)=>index!=id));
  }



  return (
    <>
      <div className='flex items-center justify-center'>
        <h1 className='w-full text-2xl bg-zinc-300 text-center py-[2vh]'>- Designed by Rahul 🖤</h1>
      </div>
      
      <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
        <div className='container mx-auto'>
            <Cards users={users} handleRemove={handleRemove}></Cards>
            <Form handleFormSubmit={handleFormSubmit}></Form>
        </div>
        
      </div>
    </>
  )
}

export default page
