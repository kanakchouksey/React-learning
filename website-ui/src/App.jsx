import React from 'react'
import Section1 from './components/section1/Section1.jsx'
import Section2 from './components/section2/Section2.jsx'

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1675626492183-865d6d8e2e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMHdpdGglMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      intro:' Lorem ipsum dolor sit amet consectetur adipisicing elit. In numquam reprehenderit esse harum ratione vero consequatur nisi sed illum alias.',
      tag: 'underserved'

    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661767011483-feab300357ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, praesentium at ipsam, et assumenda nulla mollitia veritatis molestias totam, facere pariatur!',
      tag: 'underserved'

    },
    {
      img: 'https://images.unsplash.com/photo-1679508057051-8ac2bc94b05a?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, praesentium at ipsam, et assumenda nulla mollitia veritatis molestias totam, facere pariatur!',
      tag: 'statisfied'


    },

      {
      img: 'https://plus.unsplash.com/premium_photo-1661504571994-c43e6eaacbf7?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, praesentium at ipsam, et assumenda nulla mollitia veritatis molestias totam, facere pariatur!',
      tag: 'average'


    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, praesentium at ipsam, et assumenda nulla mollitia veritatis molestias totam, facere pariatur!',
      tag: 'statisfied'


    }
  ]
  return (
    <div >
   <Section1 users={users}/>
    </div>
  )
}

export default App