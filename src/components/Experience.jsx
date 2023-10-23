import React from 'react';

const Experience = () => {
  return (
    <div name='experiences' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-67 flex flex-col justify-center w-full h-full'>
         <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Work Experience</p>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <div>
                    <strong>Summit Media </strong><br></br>
                    <p className='my-2'>Sr. Software Engineer</p>
                    June 20, 2022 - Oct 2023
                </div>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <div>
                    <strong>iACADEMY </strong><br></br>
                    <p className='my-2'>Backend Developer</p>
                    June 11, 2019 - Jue 2022
                </div>
            </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <div>
                    <strong>Synergy88 Digital </strong><br></br>
                    <p className='my-2'>Backend Developer</p>
                    January 2018 - May 2019
                </div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <div>
                    <strong>Associate Web Developer </strong><br></br>
                    <p className='my-2'>Associate Web Developer</p>
                    March 2016 - January 2018
                </div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <div>
                    <strong>Jr. Software Engineer </strong><br></br>
                    <p className='my-2'>Zonelisting Solutions Inc.</p>
                    July 2015 - February 2016
                </div>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <div>
                    <strong>Jr. Android Developer</strong><br></br>
                    <p className='my-2'>ByteHeads Corporations</p>
                    May 2015 - July 2015
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Experience;