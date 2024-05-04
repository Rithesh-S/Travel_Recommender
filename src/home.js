import React, { useState } from 'react';
import './App.css';

function Home() {

    const [destination,getDestination] = useState('');
    const [result,setResult] = useState();

    const dataFetch = () => {
        fetch("https://rithesh-s.github.io/Travel_Recommender/data.json")
        .then(res => res.json())
        .then(data => {
            console.log('Fetched')
            let resultdata;
            if(destination.toLowerCase() === 'beach' || destination.toLowerCase() === 'beaches')
                resultdata = data["beaches"]
            else if(destination.toLowerCase() === 'country' || destination.toLowerCase() === 'countries')
                resultdata = data["countries"][Math.floor(Math.random()*3)]["cities"]
            else if(destination.toLowerCase() === 'temple' || destination.toLowerCase() === 'temples')
                resultdata = data["temples"]
            else{
                data["countries"].forEach(e => {
                    if(e.name === (destination.toLowerCase().charAt(0).toUpperCase()+destination.toLowerCase().slice(1)))
                        resultdata = e.cities
                });
            }
            setResult(resultdata)
        })
        .catch(err => console.error(err))
    }

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({behavior:'smooth'});
    }

  return (
    <>
    <section className="h-screen w-screen flex flex-col bg-[url('https://wallpapers.com/images/hd/4k-ultra-hd-city-of-new-york-skyline-7kiov1197qzy8qua.jpg')] bg-center bg-fixed bg-cover">
    <div className='h-[10vh] flex justify-between bg-gradient-to-r from-[#490354] from-60% text-[#f2f2f2]'>
      <p className='h-fit w-fit ml-4 my-auto italic font-semibold text-2xl cursor-default'><i className="fa fa-plane text-3xl"></i> Travel Blossom</p>
      <nav className='flex h-fit w-fit my-auto space-x-4 font-semibold '>
        <p className='cursor-pointer hover:underline' onClick={() => scrollToSection('home')}>Home</p>
        <p className='cursor-pointer hover:underline' onClick={() => scrollToSection('aboutus')}>About Us</p>
        <p className='cursor-pointer hover:underline' onClick={() => scrollToSection('contactus')}>Contact Us</p>
      </nav>
      <div className='h-fit my-auto relative'>
        <input type='text' placeholder='Your Destination' spellCheck={false} value={destination} className='w-80 mr-4 my-auto pl-4 p-1 rounded-full text-black focus:outline-none' onChange={(e) => {getDestination(e.target.value)}}></input>
        <button type='submit' className='bg-purple-200 p-px px-2 absolute right-24 top-[3px] text-black rounded-full' onClick={() => {getDestination('');setResult(undefined)}}>Clear</button>
        <button type='submit' className='bg-purple-200 p-px px-2 absolute right-7 top-[3px] text-black rounded-full' onClick={() => dataFetch()}>Search</button>
      </div>
    </div>
    <div className="h-[90vh] bg-gradient-to-r from-[#490354] from-1% flex">
      <div className='basis-1/12 flex flex-col justify-end mb-8'>
        <div className='flex flex-col text-white justify-center w-fit mx-auto space-y-6 text-3xl items-center'>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-youtube-play"></i>
        </div>
      </div>
      <div className='grid basis-11/12 text-white h-[90vh] overflow-y-scroll scrollBar'>
        <section className='flex flex-col justify-around h-[90vh] ml-8 relative' id='home'>
            <div className='absolute z-10 h-[80vh] w-5/12 grid overflow-y-scroll scrollBar top-7 right-10 p-4 space-y-4 overscroll-none'>
                {
                    result && result.map((ele,i) => { return(
                        <div key={i} className='w-full h-fit bg-white rounded-xl'>
                            <div className='h-[45vh] w-full bg-cover bg-center rounded-t-xl'style={{backgroundImage: `url(${ele.imageUrl})`}}></div>
                            <div className='text-black px-4 py-2 text-xl font-semibold'>{ele.name}</div>
                            <div className='text-black px-4 pb-2'>{ele.description}</div>
                            <button className='mb-4 px-4 p-2 rounded-md bg-orange-400 mx-4'>Visit!</button>
                        </div>
                    )})
                }
            </div>
            <div className='text-6xl space-y-4 font-bold'>
            <p>EXPLORE</p>
            <p>DREAM</p>
            <p>DESTINATION</p>
            </div>
            <p className='w-2/5 font-thin text-sm'>
            Embark on a journey of discovery with our innovative travel app. 
            Whether you're planning a weekend getaway or a globetrotting adventure, 
            our app offers a seamless experience to explore destinations near and far.
            From stunning beaches to vibrant cities, uncover hidden gems and must-visit 
            landmarks with personalized recommendations tailored to your preferences.
            </p>
            <button className='w-fit px-4 p-2 rounded-md bg-orange-400 hover:bg-orange-500'>BOOK NOW!</button>
        </section>
        <hr className='mx-4 mr-8'></hr>
        <section className='h-[90vh] flex flex-col justify-around ml-8 mt-8' id='aboutus'>
            <p className='text-6xl font-bold'>ABOUT US</p>
            <div className='w-5/6 p-4' style={{background: 'rgba(128, 128, 128,0.5)'}}>     
                <p className='text-sm '>
                    At TRAVEL BLOSSOM, we're passionate about turning your travel dreams into 
                    unforgettable experiences. With years of expertise in the industry, we've curated a 
                    platform that seamlessly connects adventurers with their next destination.
                    Our team is dedicated to providing top-notch service, offering a diverse range of 
                    destinations, accommodations, and activities to suit every traveler's taste. 
                    Whether you're a seasoned globetrotter or a first-time explorer, trust us to be 
                    your ultimate companion on your journey. Join us in exploring the world, 
                    one adventure at a time.
                </p>
            </div>
            <div className='flex w-[80vw] mx-auto p-4 justify-between text-center'>
                <p className='w-fit text-4xl space-y-4 font-bold text-left p-4'>OUR<br></br>TEAM</p>
                <div className='w-fit p-4 px-8 rounded-md' style={{background: 'rgba(128, 128, 128,0.5)'}}>
                    <p>ALOK</p>
                    <p className='pb-1'>ALOK is responsible for...</p>
                    <p className='rounded-md bg-orange-400'>CEO</p>
                </div>
                <div className='w-fit p-4 px-8 rounded-md'style={{background: 'rgba(128, 128, 128,0.5)'}}>
                    <p>KELLY</p>
                    <p className='pb-1'>KELLY is responsible for...</p>
                    <p className='rounded-md bg-orange-400 px-2'>TEAM LEAD</p>
                </div>
                <div className='p-4 w-fit px-8 rounded-md' style={{background: 'rgba(128, 128, 128,0.5)'}}>
                    <p>MAXIUM</p>
                    <p className='pb-1'>MAXIUM is responsible for...</p>
                    <p className='rounded-md bg-orange-400 px-2'>EXECUTIVE OFFICIER</p>
                </div>
            </div>
        </section>
        <hr className='mx-4 mr-8'></hr>
        <section className='h-[90vh] w-full flex' id='contactus'>
            <div className='w-2/5 h-full flex flex-col justify-center'>
                <p className='mx-auto font-bold text-6xl'>CONTACT US</p>
                <p className='mx-auto mt-4'>Get in touch with us!</p>
            </div>
            <div className='w-3/5 flex'>
                <div className='w-4/5 h-4/5 rounded-xl m-auto flex flex-col justify-evenly p-4' style={{background: 'rgba(128, 128, 128,0.6)'}}>
                    <p className='text-xl'>Name</p>
                    <input type='text' placeholder='Enter your name' className='px-4 h-8 rounded-md text-black focus:outline-none'></input>
                    <p className='text-xl'>Email</p>
                    <input type='email' placeholder='Enter your email' className='px-4 h-8 rounded-md text-black focus:outline-none'></input>
                    <p className='text-xl'>Message</p>
                    <textarea type='text' placeholder='Enter your messsage' className='p-4 py-2 h-32 rounded-md text-black focus:outline-none'></textarea>
                    <button className='text-xl p-1 bg-orange-400 rounded-md'>Submit</button>
                </div>
            </div>
        </section>
      </div>
    </div>
    </section>
    </>
  );
}

export default Home;