'use client'
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import Screenshot2 from './images/image.png'
import DesignerImage from './images/Designer.png'
import Profile from './images/profile.jpeg'
import { Separator } from "@/components/ui/separator"
import OPSLogo from './images/ontario_public_service_leadership_logo-removebg-preview.png'
import Screenshot1 from './images/screeenshot1.png'
import { Button } from "@/components/ui/button"
import Mtb from './images/mtb.png'
import Freelance from './images/freelance1.png'
import ConestogaImg from './images/conestogalog.png'
import Mgsu from './images/mgsu.png'
import VideoGif from './images/video1.gif'
import Screenshot3 from './images/Screenshot2.png'
import { ScrollArea } from "@/components/ui/scroll-area";
import Screenshot4 from './images/screenshot3.png'
import expressjs from './images/expressjs.png'
import kafka from './images/kafka.png'
import kubernetes from './images/kubernetes.svg'
import mongodb from './images/mongodb.png'
import nextjsRemove from './images/nextjs-removebg.png'
import postgresql from './images/postgres.png'
import { useState } from "react";
import reactlogo from './images/react.png'
import tailwind from './images/tailwind.png'
import Classes from './page.module.css'
import aws from './images/aws.png'
import badge from './images/badge.png'
import googlebadge from './images/googlebadge.png'
import github from './images/github.png'

export default function Home() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpen1, setDrawerOpen1] = useState(false);
  const [drawerOpen2, setDrawerOpen2] = useState(false);
  const [drawerOpen3, setDrawerOpen3] = useState(false);

  const emailHandler = () => {
    window.location = 'mailto:jaideepgrover147@gmail.com'
  }
  const calendlyHandler = () => {
    window.location = 'https://tinyurl.com/JaideepMeeting'
  }

  return (
    <>
      <Menubar className={'p-8'}>
        <MenubarMenu>
          <MenubarTrigger>Jaideep Grover

          </MenubarTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          
        </MenubarMenu>
      </Menubar>

      <Card className='h-screen flex flex-wrap items-center justify-center gap-8'>
        <blockquote className="mt-6 border-l-2 pl-6 italic w-full sm:w-1/2 lg:w-1/3">
          "Every day is a classroom, and every challenge is a lesson; I am a perpetual student of life and my craft, constantly evolving to grow and excel."
        </blockquote>
        <Image alt={'graphic'} src={VideoGif}></Image>
      </Card>

      <Card className={'m-5 text-center'}>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>


          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 flex" style={{ justifyContent: 'center' }}>
              <Image alt="Screenshot2" className="rounded-full w-9/12	" src={Profile}></Image>
              {/* <img src={DesignerImage}
                alt="Sample Image"
                className="w-full rounded-lg shadow-lg" /> */}
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <p className="text-gray-600 leading-relaxed">
                Hi, I'm Jaideep Grover, a passionate full-stack developer with hands-on experience in building and deploying applications. I have successfully self-deployed multiple projects, utilizing both front-end and back-end technologies. Along with my technical skills, I hold certifications like AZ-900, AZ-204, and AWS Certified Solutions Architect, showcasing my understanding of cloud platforms like AWS and Azure. Currently, I am expanding my expertise by learning machine learning, aiming to enhance my skill set in AI and data-driven solutions.
              </p>
            </div>
          </div>


        </CardContent>

      </Card>
      <Card className={'m-5 text-center p-5'}>
        <CardHeader>
          <CardTitle>
            Projects
          </CardTitle>
        </CardHeader>
        <Card>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 md:p-8">
            {/* <img
                src={Screenshot}
                alt="Descriptive Alt Text"
                className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-md"
              /> */}
            <Image alt={'screenshot1'} className={"md:w-1/2 lg:w-1/2 rounded-lg shadow-md"} src={Screenshot1} ></Image>

            <div className="flex flex-col text-center md:text-left space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                Fashion Assitant Application
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Tech Stack Used: - NextJS, NextAuth, Three.js, Tensorflow.js, PostgreSql
              </p>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button>Checkout the app</Button>
                </DrawerTrigger>
                <DrawerContent className={'p-2'}>
                  <div className="">
                    <DrawerHeader>
                      <DrawerTitle>Checkout the Application</DrawerTitle>
                    </DrawerHeader>
                    <DrawerClose asChild>
                      <Button variant='outline'>Close</Button>
                    </DrawerClose>
                    <div className="p-4 lg:p-1 pb-0 w-full">
                      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
                        <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center w-full">
                          <div className="sm:w-8/12 m-5 border-solid-200">
                            <p>
                              The Fashion Assistant App is your personal style companion! It analyzes your wardrobe to recommend perfect outfit combinations using simple color harmony formulas. By scanning your face, it suggests the best hairstyles and lenses tailored to your features. You can even try hairstyles and lenses in real-time, offering a sneak peek into your transformed look. While the real-time try-on feature is still under development, the app already serves as a powerful tool to elevate your fashion game effortlessly.
                            </p>
                          </div>
                          <div className="sm:w-3/12 m-5 p-2 border-2 text-center">
                            <p><a href="https://ai-stylist-umber.vercel.app/">Link to the product</a></p>
                          </div>
                        </div>
                        <ScrollArea className={'block lg:hidden h-72 rounded-md border'}>
                          <div className="sm:w-8/12 m-5 border-solid-200">
                            <p>
                              The Fashion Assistant App is your personal style companion! It analyzes your wardrobe to recommend perfect outfit combinations using simple color harmony formulas. By scanning your face, it suggests the best hairstyles and lenses tailored to your features. You can even try hairstyles and lenses in real-time, offering a sneak peek into your transformed look. While the real-time try-on feature is still under development, the app already serves as a powerful tool to elevate your fashion game effortlessly.
                            </p>
                          </div>
                          <div className="sm:w-3/12 m-5 p-2 border-2 text-center">
                            <p><a href="https://ai-stylist-umber.vercel.app/">Link to the product</a></p>
                          </div>
                        </ScrollArea>
                      </div>

                    </div>
                    <DrawerFooter>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
              <Separator></Separator>
              <Button>
                Github
              </Button>
            </div>
          </div>

        </Card>
        <Card className={'m-3'}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 md:p-8">

            <div className="flex flex-col text-center md:text-left space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                Restaurant CMS System
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Tech Stack Used: - Terraform, Ansible, NextJs, MongoDB, Google Cloud
              </p>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button>Checkout the app</Button>
                </DrawerTrigger>
                <DrawerContent className={'p-2'}>
                  <div className="">
                    <DrawerHeader>
                      <DrawerTitle>Checkout the Application</DrawerTitle>
                    </DrawerHeader>
                    <DrawerClose asChild>
                      <Button variant='outline'>Close</Button>
                    </DrawerClose>
                    <div className="p-4 lg:p-1 pb-0 w-full">
                      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
                        <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center w-full">
                          <div className="sm:w-8/12 m-5 border-solid-200">
                            <p>The Restaurant CMS is a cloud-based management system built with Terraform and hosted on GCP, designed to empower restaurants with their own fully managed websites, including independent frontends and backends. Each site comes with automatic DNS management, streamlining deployment and scalability. Key features include payment integration, social media control (Twitter), and email promotions via SendGrid, all managed through a super admin portal. This solution simplifies operations while providing robust tools to enhance customer engagement and digital presence.
                            </p>
                            <p>There are three links to checkout the product super admin port is where you make an additional instance, rest two front end, admin are the portals which show you how an accomplished instance would look like</p>
                          </div>
                          <div className="sm:w-3/12 m-5 p-2 border-2 text-center">
                            {/* <p><a href="https://ai-stylist-umber.vercel.app/">Link to the l</a></p> */}
                            <Popover>
                              <PopoverTrigger>Link to the product</PopoverTrigger>
                              <PopoverContent>
                                <p><a href="http://superadmin-restaurantcms.jaideepgrover.blog/">Super-Admin Portal</a></p>
                                <p><a href="https://admin-res.netlify.app/">Admin End</a></p>
                                <p><a href="https://restaurant-capstone-1.netlify.app/">Front End</a></p>
                              </PopoverContent>
                            </Popover>

                          </div>
                        </div>
                        <ScrollArea className={'block lg:hidden h-72 rounded-md border'}>
                          <div className="sm:w-8/12 m-5 border-solid-200">
                            <p>The Restaurant CMS is a cloud-based management system built with Terraform and hosted on GCP, designed to empower restaurants with their own fully managed websites, including independent frontends and backends. Each site comes with automatic DNS management, streamlining deployment and scalability. Key features include payment integration, social media control (Twitter), and email promotions via SendGrid, all managed through a super admin portal. This solution simplifies operations while providing robust tools to enhance customer engagement and digital presence.
                            </p>
                            <p>There are three links to checkout the product super admin port is where you make an additional instance, rest two front end, admin are the portals which show you how an accomplished instance would look like</p>
                          </div>
                          <div className="sm:w-3/12 m-5 p-2 border-2 text-center">
                            <Popover>
                              <PopoverTrigger>Link to the Product</PopoverTrigger>
                              <PopoverContent>
                                <p><a href="http://superadmin-restaurantcms.jaideepgrover.blog/">Super-Admin Portal</a></p>
                                <p><a href="https://admin-res.netlify.app/">Admin End</a></p>
                                <p><a href="https://restaurant-capstone-1.netlify.app/">Front End</a></p>
                              </PopoverContent>
                            </Popover>

                            {/* <p><a href="https://ai-stylist-umber.vercel.app/">Link to the product</a></p> */}
                          </div>
                        </ScrollArea>
                      </div>

                    </div>
                    <DrawerFooter>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
              <Separator></Separator>
              <Button>
                Github
              </Button>
            </div>

            <Image alt="Screenshot" className={"md:w-1/2 lg:w-1/2 rounded-lg shadow-md"} src={Screenshot2} ></Image>

          </div>

        </Card>
        <Card className={'m-3'}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 md:p-8">

            <Image alt={'screenshot3'} className={"md:w-1/2 lg:w-1/2 rounded-lg shadow-md"} src={Screenshot3} ></Image>

            <div className="flex flex-col text-center md:text-left space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                HomeCare Compass
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Tech Stack Used: - ReactJS, ExpressJS, MongoDB, NodeJS
              </p>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button>Checkout the app</Button>
                </DrawerTrigger>
                <DrawerContent className={'p-2'}>
                  <div className="">
                    <DrawerHeader>
                      <DrawerTitle>Checkout the Application</DrawerTitle>
                    </DrawerHeader>
                    <DrawerClose asChild>
                      <Button variant='outline'>Close</Button>
                    </DrawerClose>
                    <div className="p-4 lg:p-1 pb-0 w-full">
                      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
                        <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center w-full">
                          <div className="sm:w-8/12 m-5 border-solid-200">
                            <p>The NGO Shelter Website is a community-driven platform built using the MEAN stack, aimed at supporting homeless shelters and those in need. Shelters can easily register themselves, making it simpler for the community to guide homeless individuals to safe spaces. The platform also consolidates essential government resources, offering access to food, healthcare, and support services under one roof. This initiative fosters collaboration and compassion, creating a streamlined system to help those in need more effectively.
                            </p>
                          </div>
                          <div className="sm:w-3/12 m-5 p-2 border-2 text-center">
                            <p><a href="https://homecarefront.vercel.app/home">Link to the product</a></p>
                          </div>
                        </div>
                        <ScrollArea className={'block lg:hidden h-72 rounded-md border'}>
                          <div className="sm:w-8/12 m-5 border-solid-200">
                            <p>
                              The NGO Shelter Website is a community-driven platform built using the MEAN stack, aimed at supporting homeless shelters and those in need. Shelters can easily register themselves, making it simpler for the community to guide homeless individuals to safe spaces. The platform also consolidates essential government resources, offering access to food, healthcare, and support services under one roof. This initiative fosters collaboration and compassion, creating a streamlined system to help those in need more effectively.
                            </p>

                          </div>
                          <div className="sm:w-3/12 m-5 p-2 border-2 text-center">
                            <p><a href="https://homecarefront.vercel.app/home">Link to the product</a></p>
                          </div>
                        </ScrollArea>
                      </div>

                    </div>
                    <DrawerFooter>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
              <Separator></Separator>
              <Button>
                Github
              </Button>
            </div>

          </div>

        </Card>
        <Card className={'m-3'}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 md:p-8">


            <div className="flex flex-col text-center md:text-left space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                E-Commerce Application
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Tech Stack Used: - ReactJS, ExpressJS, MongoDB, NodeJS
              </p>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button>Checkout the app</Button>
                </DrawerTrigger>
                <DrawerContent className={'p-2'}>
                  <div className="">
                    <DrawerHeader>
                      <DrawerTitle>Checkout the Application</DrawerTitle>
                    </DrawerHeader>
                    <DrawerClose asChild>
                      <Button variant='outline'>Close</Button>
                    </DrawerClose>
                    <div className="p-4 lg:p-1 pb-0 w-full">
                      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
                        <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center w-full">
                          <div className="sm:w-8/12 m-5 border-solid-200">
                            <p>The Freelance E-Commerce Website is a streamlined platform designed to simplify online shopping and order fulfillment. With Stripe payment integration, it ensures secure and seamless transactions, while the Shiprocket API manages logistics for efficient and reliable delivery. The website accumulates orders, providing a centralized system for tracking and processing, making it an intuitive and hassle-free solution for both sellers and buyers.

                            </p>
                          </div>
                          <div className="sm:w-3/12 m-5 p-2 border-2 text-center">
                            <p><a href="https://cycle-front-phi.vercel.app/">Link to the product</a></p>
                          </div>
                        </div>
                        <ScrollArea className={'block lg:hidden h-72 rounded-md border'}>
                          <div className="sm:w-8/12 m-5 border-solid-200">
                            <p>
                              The Freelance E-Commerce Website is a streamlined platform designed to simplify online shopping and order fulfillment. With Stripe payment integration, it ensures secure and seamless transactions, while the Shiprocket API manages logistics for efficient and reliable delivery. The website accumulates orders, providing a centralized system for tracking and processing, making it an intuitive and hassle-free solution for both sellers and buyers.
                            </p>

                          </div>
                          <div className="sm:w-3/12 m-5 p-2 border-2 text-center">
                            <p><a href="https://cycle-front-phi.vercel.app/home">Link to the product</a></p>
                          </div>
                        </ScrollArea>
                      </div>

                    </div>
                    <DrawerFooter>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
              <Separator></Separator>
              <Button>
                Github
              </Button>
            </div>
            <Image alt={'screenshot1'} className={"md:w-1/2 lg:w-1/2 rounded-lg shadow-md"} src={Screenshot4} ></Image>

          </div>

        </Card>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className={'text-center mt-5'}>Professional Experience</CardTitle>
        </CardHeader>
        <Separator />
        <div className="mb-32  mt-32 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center justify-content flex-col w-full sm:w-1/2 lg:w-1/5">
            <Image alt="opslogo" src={OPSLogo}></Image>
            <p>Ontario Public Service</p>
            <p>Operator Control Analyst</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/2">

            <ul>
              <li className={'mt-2'}>
                ●	Spearheaded the design and implementation of scalable microservices web applications using NextJS, and Azure Functions  to support over 100 concurrent users, leveraged ensuring seamless performance under high traffic conditions..
              </li>
              <li className={'mt-2'}>
                ●	Engineered a RESTful API through ExpressJS for a web application, optimizing response times by 20% and reducing system downtime by 15%, enhancing overall application performance
              </li>
              <li className={'mt-2'}>
                ●	Created an internal notice board portal using NodeJS, integrating it with the department website to ensure timely and accurate dissemination of critical information.
              </li>
              <li className={'mt-2'}>
                ●	Developed and executed comprehensive test suites for React components using Jest and React Testing Library, ensuring robust functionality, UI consistency, and 95%+ code coverage across the application.
              </li >
              <li className={'mt-2'}>
                ●	Authored detailed release notes for system component modifications, cutting troubleshooting time by 15% during team handoffs, ensuring smoother transitions.


              </li>
            </ul>
          </div>
        </div>
        <Separator></Separator>
        <div className="bg-gray-100 pt-32 pb-32 flex flex-wrap items-center justify-center gap-8">

          <div className="w-full sm:w-1/2 lg:w-1/2">

            <ul>
              <li className={'mt-2'}>
                ●	Directed the development and launch of 7 fully functional websites for businesses, achieving a 30% increase in online engagement and 40% faster page load times by leveraging technologies like ReactJS and NextJS to optimize performance and enhance visibility.
              </li>
              <li className={'mt-2'}>
                ●	Led the development and testing of API components in ExpressJS, achieving 100% code coverage and ensuring system stability across 11  key modules
              </li>
              <li className={'mt-2'}>
                ●	Pioneered the development of 13 reusable React components, streamlining development processes, and promoting code efficiency
              </li>
              <li className={'mt-2'}>
                ●	Developed and executed comprehensive test suites for React components using Jest and React Testing Library, ensuring robust functionality, UI consistency, and 95%+ code coverage across the application.
              </li >
              <li className={'mt-2'}>
                ●	Documented software processes and best practices meticulously, leading to a 20% improvement in project efficiency and accelerating team onboarding.
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-content flex-col w-full sm:w-1/2 lg:w-1/5">
            <Image alt="mtb" src={Mtb}></Image>
            <p>Multitech Bulls Technology</p>
            <p>Software Developer </p>
          </div>
        </div>
        <Separator></Separator>
        <div className="mt-24 mb-32 flex flex-wrap items-center justify-center gap-8">


          <div className="flex items-center justify-content flex-col w-full sm:w-1/2 lg:w-1/5">
            <Image alt="freelance" src={Freelance}></Image>
            <p>Freelance Project</p>
            <p>Software Developer </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/2">

            <ul>
              <li className={'mt-2'}>
                ●	Developed a comprehensive e-commerce portal, complemented by a robust administrative backend, exemplifying a seamless synergy of user-friendly shopping experiences and efficient management capabilities, resulting in a 35% increase in user engagement.
              </li>
              <li className={'mt-2'}>
                ●	Integrated logistics APIs seamlessly to facilitate the delivery of products, enhancing the e-commerce portal's operational efficiency by 40%.
              </li>
              <li className={'mt-2'}>
                ●	Instilled a Payment Gateway to ensure a seamless experience for over 1,500 customers, leading to a 25% increase in completed transactions.
              </li>
            </ul>
          </div>

        </div>
      </Card>
      <Card className={'bg-gray-100'}>
        <CardHeader>
          <CardTitle className={'mt-5 text-center'}>Education</CardTitle>
        </CardHeader>
        <CardContent>

          <div className={'p-9'}>
            <Carousel>
              <CarouselContent>
                <CarouselItem >
                  <Card className={`pt-6 pb-6 ${Classes.shadowCard}`}>
                    <CardContent>
                      <div className={'flex flex-wrap items-center justify-center gap-8'}>
                        <div className="flex items-center justify-content flex-col w-full sm:w-1/2 lg:w-1/5">
                          <Image alt="conestogalogo" src={ConestogaImg}></Image>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/2 text-center">
                          <h2>Post Graduation Certificate in Virtualization and Cloud Computing</h2>
                          <h3>May 2024 - Dec 2024</h3>
                          <h4>Program Outcomes</h4>
                          <ul className="text-left mt-5 ">
                            <li>1. Designed and deployed fault-tolerant, highly available microservices to meet client and business needs in hosted cloud environments.</li>
                            <li>2. Architected secure, enterprise-level cloud solutions using automation tools to protect assets and mitigate risks.</li>
                            <li>3. Implemented code-based cloud computing solutions focused on resiliency, security-in-depth, and performance optimization.</li>
                            <li>4. Conducted viability assessments and resiliency testing for cloud solutions to ensure operational stability and compliance.</li>
                            <li>5. Developed and defended strategic cloud architectures tailored to address client-specific business requirements.</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className={`pt-6 pb-6 ${Classes.shadowCard}`}>
                    <CardContent>
                      <div className={'flex flex-wrap items-center justify-center gap-8'}>
                        <div className="flex items-center justify-content flex-col w-full sm:w-1/2 lg:w-1/5">
                          <Image alt={'conestoga'} src={ConestogaImg}></Image>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/2 text-center">
                          <h2>Post Graduation Certificate in Computer Applications Development</h2>
                          <h3>May 2023 - May 2024</h3>
                          <h4>Program Outcomes</h4>
                          <ul className="text-left mt-5 ">
                            <li>1. Designed and developed software solutions and scalable multi-tier applications using web and mobile technologies to meet diverse business needs.</li>
                            <li>2. Analyzed market trends and system requirements to architect optimal computing solutions aligned with industry best practices.  </li>
                            <li>3. Created flexible, data-driven applications by designing and deploying databases tailored to current industry standards.</li>
                            <li>4. Deployed and troubleshot software solutions across various platforms to ensure seamless integration and functionality.</li>
                            <li>5. Collaborated effectively with stakeholders and teammates to deliver solutions that meet business requirements and foster strong working relationships.</li>
                          </ul>
                        </div>
                      </div>

                    </CardContent>

                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className={`pt-6 pb-6 ${Classes.shadowCard}`}>
                    <CardContent>
                      <div className={'flex flex-wrap items-center justify-center gap-8'}>
                        <div className="flex items-center justify-content flex-col w-full sm:w-1/2 lg:w-1/5">
                          <Image alt="mgsu" src={Mgsu}></Image>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/2 text-center">
                          <h2>Bachelors of Computer Applications </h2>
                          <h3>Aug 2019 - Aug 2022</h3>
                          <h4>Program Outcomes</h4>
                          <ul className="text-left mt-5 ">
                            <li>1. Developed the ability to analyze complex computing problems and apply principles of computing, algorithms, and mathematics to identify solutions.</li>
                            <li>2. Gained expertise in programming languages such as C++, Java, Python, and PHP, including their application in software development, object-oriented design, and web-based solutions.  </li>
                            <li>3. Acquired the skills to design, implement, and manage databases using SQL and other database management systems, along with performing data analysis using tools like Pandas and Matplotlib in Python.</li>
                            <li>4. Learned the foundational concepts of computer networks, including protocols, network security, and architecture design, preparing for roles in system administration and IT infrastructure.  </li>
                            <li>5. Enhanced teamwork and project execution abilities through practical lab sessions, internships, and collaborative projects.</li>
                          </ul>
                        </div>
                      </div>

                    </CardContent>

                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </CardContent>
        <Card className={'bg-gray-100'}>
          <CardTitle className={'text-center p-4'}>My Skills</CardTitle>
          <div class="min-h-screen bg-gray-100 flex  items-center justify-center">

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <div class="flex m-5 justify-center items-center p-4 bg-white rounded-lg shadow-md">
                {/* <div  className={Classes.glowingimage}> */}
                <Image className={Classes.glowingimage} src={expressjs}></Image>
                {/* </div> */}
              </div>

              <div class="flex m-5 justify-center items-center p-4 bg-white rounded-lg shadow-md">
                <Image className={Classes.glowingimage} src={nextjsRemove}></Image>
              </div>

              <div class="flex m-5 justify-center items-center p-4 bg-white rounded-lg shadow-md">
                <Image className={`${Classes.glowingimage} p-3`} src={mongodb}></Image>
              </div>

              <div class="flex m-5 justify-center items-center p-4 bg-white rounded-lg shadow-md">
                <Image className={`${Classes.glowingimage} p-3`} src={postgresql}></Image>
              </div>

              <div class="flex m-5 justify-center items-center p-4 bg-white rounded-lg shadow-md">
                <Image className={Classes.glowingimage} src={kafka}></Image>
              </div>

              <div class="flex m-5 justify-center items-center p-4 bg-white rounded-lg shadow-md">
                <Image className={Classes.glowingimage} src={kubernetes}></Image>
              </div>

              <div class="flex m-5 justify-center items-center p-4 bg-white rounded-lg shadow-md">
                <Image className={Classes.glowingimage} src={reactlogo}></Image>
              </div>

              <div class="flex m-5 justify-center items-center p-4 bg-white rounded-lg shadow-md">
                <Image className={Classes.glowingimage} src={tailwind}></Image>
              </div>

              <div class="flex m-5 justify-center items-center p-4 bg-white rounded-lg shadow-md">
                <Image className={Classes.glowingimage} src={aws}></Image>
              </div>
              <div class="flex m-5 justify-center items-center p-4 bg-white rounded-lg shadow-md">
                <Image className={Classes.glowingimage} src={github}></Image>
              </div>

            </div>
          </div>


        </Card>
        <Card className={'p-6 pb-32 text-center'}>
          <CardTitle className={'p-5'}>Additional Certifications</CardTitle>
          <Card className={'mt-5 p-5 flex items-center md:flex-row flex-col'}>
            <Image className={Classes.imageFixing} src={badge}></Image>
            <p className="p-5">The Solutions Architect certification equips professionals with the knowledge and skills to design, implement, and manage secure, scalable, and cost-efficient cloud-based solutions. It focuses on core architectural principles, including system reliability, performance optimization, and security best practices. This certification validates expertise in cloud services, networking, storage, and databases, making it ideal for individuals aiming to create innovative and efficient solutions tailored to business needs.</p>
          </Card>
          <Card className={'mt-5 p-5 flex items-center md:flex-row flex-col'}>
            <Image className={Classes.imageFixing} src={googlebadge}></Image>
            <p className="p-5">The Google Cloud Design, Implement, and Manage Certificate is a professional certification aimed at equipping individuals with the skills to design scalable and secure cloud solutions. It covers principles of cloud architecture, best practices for infrastructure implementation, and effective resource management. This certificate is ideal for professionals or intermediates looking to enhance their expertise in cloud design, security, and operational management.</p>
          </Card>
        </Card>

        <div className={Classes.body}>
          <section className={Classes.wrapper}>
            <div className={Classes.hero}>
            </div>
            <div className={Classes.content}>
              <h1 className={Classes.h1ScalingSize} data-text='An awesome title'>Lets Connect</h1>
              <div className="flex gap-8">
                <Button variant='outline' onClick={emailHandler}>Email</Button>
                <Button onClick={calendlyHandler} variant='outline'>Book an Appointment</Button>
              </div>
              {/* <input type='checkbox' id='switch'>
                <label for='switch'><span><span className='icon'>→</span> switch bg</span></label> */}
            </div>
          </section>
        </div>
      </Card>
    </>
  );
}
