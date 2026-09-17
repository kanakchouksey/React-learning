import React from 'react'

import Card from './components/Card'

const App = () => {


  const jobs = [
  {
    brandLogo: "https://ui-avatars.com/api/?name=Google&background=4285F4&color=fff&size=128",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72 / hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://ui-avatars.com/api/?name=Microsoft&background=00A4EF&color=fff&size=128",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58 / hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://ui-avatars.com/api/?name=Amazon&background=FF9900&color=fff&size=128",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65 / hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://ui-avatars.com/api/?name=Apple&background=111111&color=fff&size=128",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78 / hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://ui-avatars.com/api/?name=Meta&background=0866FF&color=fff&size=128",
    companyName: "Meta",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$52 / hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://ui-avatars.com/api/?name=Netflix&background=E50914&color=fff&size=128",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75 / hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://ui-avatars.com/api/?name=NVIDIA&background=76B900&color=fff&size=128",
    companyName: "NVIDIA",
    datePosted: "7 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$82 / hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://ui-avatars.com/api/?name=Adobe&background=FF0000&color=fff&size=128",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55 / hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://ui-avatars.com/api/?name=IBM&background=1261FE&color=fff&size=128",
    companyName: "IBM",
    datePosted: "8 days ago",
    post: "Cloud Software Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48 / hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://ui-avatars.com/api/?name=Salesforce&background=00A1E0&color=fff&size=128",
    companyName: "Salesforce",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68 / hr",
    location: "Hyderabad, India"
  }
];

  return (
    <div className='parent'>
      
   
   {jobs.map(function(ele,idx) {
    return  <div key={idx}><Card companyName={ele.companyName} brandLogo={ele.brandLogo} datePosted = {ele.datePosted}
     post={ele.post} tag1 = {ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location}/>
     </div>
    
   })}
  
  

      </div>









    
    
  )

}

export default App