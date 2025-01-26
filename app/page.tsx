"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin,Mail, Twitter, ArrowDown,FileText } from "lucide-react";
import Link from "next/link";
import { Card } from './components/Card';

export default function Home() {
  const skills = [
    "HTML",
    "CSS",
    "Express",
    "Node",
    "React",
    "NextJs",
    "MongoDb",
    "Postgres",
    "WebSockets",
    "TurboRepo",
    "Github",
    "Docker",
    "Kubernetes",
    "ArgoCD",
    "Solana",
    "Ethereum",
    "SmartContracts"
  ];
  
  const scrollToSection = () => {
    document.getElementById('projects-section')!.scrollIntoView({ behavior: 'smooth' });
  };
  return (
  <main className="min-h-screen overflow-x-hidden w-[100vw]">
    <section>
    <div className="bg-slate-900 relative">
     <div className="h-screen">
    <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
    
    </div>
    </div>
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

    <div className="absolute top-0 text-white h-screen w-screen flex flex-col justify-center items-center">
    
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Manepalli Hari</h1>
      <p className="text-lg md:text-2xl text-muted-foreground mb-8 text-slate-400 text-center">Full Stack Development, Web3 and DevOps Enthusiast</p>

      <div className="flex gap-3 md:gap-5 mb-8">
        <Link href={"https://github.com/harry6902"} target="_blank">
        <div className="cursor-pointer h-10 w-10 bg-black rounded-md flex items-center justify-center hover:bg-slate-900"><Github className="h-5 w-5" /></div>
        </Link>
        <Link href={"https://www.linkedin.com/in/manepalli-hari-55a189217/"} target="_blank">
        <div className="cursor-pointer h-10 w-10 bg-black rounded-md flex items-center justify-center hover:bg-gray-900"><Linkedin className="h-5 w-5"/></div>
        </Link>
        <Link href={"mailto:manepallihari2002@gmail.com"}>
        <div className="cursor-pointer h-10 w-10 bg-black rounded-md flex items-center justify-center hover:bg-gray-900"><Mail className="h-5 w-5" /></div>
        </Link>
        <Link href={"https://x.com/harry_codes"} target="_blank">
        <div className="cursor-pointer h-10 w-10 bg-black rounded-md flex items-center justify-center hover:bg-gray-900"><Twitter className="h-5 w-5"/></div>
        </Link>
        <Link href={"Resume_Hari.pdf"} target="_blank">
        <div className="cursor-pointer h-10 w-10 bg-black rounded-md flex items-center justify-center hover:bg-gray-900">
    
            <FileText className="h-5 w-5" />

        </div>
        </Link>

      </div>
    
      <button onClick={scrollToSection} className="bg-slate-800 px-3 py-2 rounded-md font-semibold flex justify-center items-center gap-1">
        <p>View Projects</p>
        <ArrowDown className="h-5 w-5" />
      </button>
    
      

    </div>
    </motion.div>
    </section>


       {/*Tech Skills*/}
    <section className="min-h-[60vh] bg-black text-white w-full flex flex-col justify-center items-center">
    <h2 className="text-3xl font-bold text-center mb-12 mt-10">Tech Stack</h2>
    <div className="grid grid-cols-4 md:grid-cols-10 gap-y-2 md:gap-y-3 mb-10">

      {skills.map((skill)=>(
            <div key={skill} className="flex flex-col justify-center items-center text-white">
        
            <Image
              src={`/stack/${skill}.svg`}
              alt={skill}
              width={24}
              height={24}
              className="w-7 h-7 md:h-10 md:w-10 text-white"
            />
                  <p className="text-xs md:text-sm text-gray-500 font-bold">{skill}</p>
            
                  </div>

      ))}
  
        
    </div>

    </section>

    {/*Projects  Section*/}
    <section id="projects-section" className="min-h-[50vh] bg-slate-900  text-white w-full flex flex-col justify-center items-center pb-5">
    <h2 className="text-3xl font-bold text-center mb-12 mt-10">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-3">
    <Card 
    heading={"Excalidraw"}
    description={"A real-time collaborative whiteboard where users can draw various shapes, write text, and interact seamlessly with updates appearing instantly for all participants."}
    gitlink={"https://github.com/harry6902/excalidraw"}
    imgUrl={"/projects/excali.png"}

    />
    <Card
   heading={"Real Time Chat Application"}
   description={"A real-time chat application that connects users with similar interests and chat with not more than one people"}
   gitlink={"https://github.com/harry6902/hari-omeglechat-frontend"}
   hostlink={"https://hari-omeglechat-frontend.vercel.app/"}
   imgUrl={"/projects/chat.png"}
    />
    <Card
       heading={"Pitch Your StartUp"}
       description={"A platform where users can pitch their startups, allowing users to showcase their ideas and let people know about it."}
       gitlink={"https://github.com/harry6902/harry-directory"}
       hostlink={"https://harry-directory.vercel.app/"}
       imgUrl={"/projects/startup.png"}
    />
    <Card
       heading={"Cloud Based Wallet"}
       description={"A website where users can sign up to automatically create a Solana wallet, transfer SOL using another users public address, and check our wallet balance"}
       gitlink={"https://github.com/harry6902/cloudwallet-backend"}
       imgUrl={"/projects/wallet.png"}
    />
    <Card
       heading={"Ethereum Bridge Contract"}
       description={"Ethereum smart contract enabling token transfers between the Ethereum blockchain and other blockchains, with the ability to retrieve tokens when needed."}
       gitlink={"https://github.com/harry6902/eth-bridges"}
       imgUrl={"/projects/bridge.png"}
    />
    <div className="flex items-center justify-center">
      <Link href={"https://github.com/harry6902"} className=" bg-gray-700 hover:bg-gray-600 w-60 rounded-md p-2 cursor-pointer text-center" target="_blank">
        Visit GitHub for more Projects
      </Link>

    </div>
    </div>
    </section>
    {/* ABout me */}

    <section className="min-h-[50vh] bg-black text-white" >

      <div className="flex flex-col md:flex-row w-full">
        <div className="lg:w-[30vw] h-full flex flex-col justify-center items-center">

          <img src="./myimg2.png" alt=""  className="h-32 w-32 rounded-full object-cover mt-10"/>
          <h1 className=" italic font-semibold text-xl md:text-3xl mt-2 md:mt-5">Manepalli Hari</h1>
          <h2 className="italic texl-lg md:text-2xl">IIT Jodhpur (2019-2023)</h2>
          <h3 className="italic text-lg">Computer Science and Engineering</h3>


        </div>
        <div className="lg:w-[75vh] flex flex-col items-center md:items-start justify-center mb-8 md:mb-0  md:ml-16">
        <h1 className=" font-bold text-lg md:text-xl mt-2 md:mt-5">Get in touch</h1>
        <p className="w-[70vw] md:w-[50vw] text-center md:text-left text-gray-400">I’m open to exciting projects and collaborations! Let’s bring your idea to life or solve your web development challenges—reach out anytime.</p>
          
          <p className="text-gray-400">Ph.No: +91-9352218875</p>
          <p className="text-gray-400">📧 Email: <span className="text-blue-500">manepallihari2002@gmail.com</span></p>

        </div>

      </div>


    </section>

  </main>
  );
}
