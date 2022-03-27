import Card1 from '../../app/components/card/Card1'
import Card2 from '../../app/components/card/Card2'
import Card3 from '../../app/components/card/Card3'
import Card4 from '../../app/components/card/Card4'
import Card5 from '../../app/components/card/Card5'
import Card6 from '../../app/components/card/Card6'

import Footer1 from '../../app/components/footer/Footer1'
import Footer2 from '../../app/components/footer/Footer2'

import Button1 from '../../app/components/button/Button1'
import Button2 from '../../app/components/button/Button2'
import Button3 from '../../app/components/button/Button3'
import Button4 from '../../app/components/button/Button4'

import Nav1 from '../../app/components/nav/Nav1'
import Nav2 from '../../app/components/nav/Nav2'
import { Feature1 } from '../../app/components/features/Features1'

import TabSection from '../../app/components/nav/tab/TabSection'
import VerticalTab from '../../app/components/nav/tab/VerticalTab'
import Modal from '../../app/components/modal/Modal'

import { SquareAvatar, ContentAvatar, CircleAvatar } from '../../app/components/avatar/index'
import Button5 from '../../app/components/button/Button5'

export const codeData = [
  {
    url: '/components/',
    title: 'Modal',
    urlTitle: 'modal',
    store: [
      {
        component: <Modal />,
        jsx: `import { useState } from "react";

        export default function Modal() {
          const [isModalOpen, setModalOpen] = useState(false);
        
          return (
            <div className=" flex flex-col">
              <button
                className="bg-white/20 p-3 rounded-xl"
                onClick={() => setModalOpen(true)}
              >
                click me
              </button>
              <>
                {isModalOpen ? (
                  <div
                    className="fixed z-10 inset-0 overflow-y-auto"
                    aria-labelledby="modal-title"
                    role="model"
                    aria-modal="true"
                  >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                        aria-hidden="true"
                      ></div>
        
                      <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>
        
                      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                          <div className="sm:flex sm:items-start">
                            
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              <h3
                                className="text-lg leading-6 font-medium text-gray-900"
                                id="modal-title"
                              >
                                Lorem ipsum
                              </h3>
                              <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                  dolor sit amet consectetur adipisicing elit. Corporis
                                  atque beatae exercitationem. Eligendi sit excepturi
                                  harum necessitatibus. Veritatis sequi nemo corporis,
                                  autem, itaque quae debitis error laboriosam recusandae
                                  optio ea!
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="button"
                            onClick={() => setModalOpen(!true)}
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Accept
                          </button>
                          <button
                            type="button"
                            onClick={() => setModalOpen(!true)}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            </div>
          );
        }
        `,
      },
    ],
  },
  {
    url: '/components/',
    title: 'Tab',
    urlTitle: 'Tab',
    store: [
      {
        component: <VerticalTab />,
        jsx: `'export default function VerticalTab(){
            const [tab, setTab] = React.useState("First");
            const data = [
              {
                title: "First",
                data: "first",
              },
              {
                title: "Second",
                data: "Second",
              },
            ];
          
            const filterdata = data.filter((e) => e.title === tab);
            const active = filterdata[0].title;
          
            return (
              <div>
                <div className="flex flex-col">
                  {data.map((n, index) => {
                    return (
                      <button
                        onClick={() => setTab(n.title)}
                        className={$ {
                          active === n.title ? "text-blue-400 bg-white/10 rounded-t-xl" : ""
                        } p-3  }
                        key={index}
                      >
                        {n.title}
                      </button>
                    );
                  })}
                </div>
                <hr/>
                <div>
                  {filterdata.map((n, index) => {
                    return <div key={index}>{n.data}</div>;
                  })}
                </div>
              </div>
            );
          }'
          `,
      },
      {
        component: <TabSection />,
        jsx: ` export default function TabSection() {
          const [tab, setTab] = useState("First");
          const data = [
            {
              title: "First",
              data: "first",
            },
            {
              title: "Second",
              data: "Second",
            },
          ];
        
          const filterdata = data.filter((e) => e.title === tab);
          const active = filterdata[0].title;
        
          return (
            <div>
              <div>
                {data.map((n, index) => {
                  return (
                    <button
                      onClick={() => setTab(n.title)}
                      className={
                        $ { active === n.title ? "border-b-2 border-black" : ""} p-3  }
                      key={index}
                    >
                      {n.title}
                    </button>
                  );
                })}
              </div>
              <div>
                {filterdata.map((n, index) => {
                  return <div key={index}>{n.data}</div>;
                })}
              </div>
            </div>
          )
        }`,
      },
    ],
  },
  {
    url: '/components/',
    title: 'Card',
    urlTitle: 'card',
    store: [
      {
        component: <Card1 />,
        jsx: `<div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://source.unsplash.com/300x300/?random"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>`,
      },
      {
        component: <Card2 />,
        jsx: `<div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://source.unsplash.com/301x301/?random"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">Lorem</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>
      </div>`,
      },
      {
        component: <Card3 />,
        jsx: ` <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">Bored ape nft accidental</h1>
            <h1>Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
        `,
      },
      {
        component: <Card4 />,
        jsx: `    <div className="relative max-w-lg p-8 border bg-black border-gray-100 shadow-xl rounded-xl">
        <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
          4.3
        </span>
  
        <div className="mt-4 text-gray-200 sm:pr-8">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            ></path>
          </svg>
  
          <h5 className="mt-4 text-xl font-bold text-gray-300">Science of Chemstry</h5>
  
          <p className="mt-2 text-sm">
            You can manage phone, email and chat conversations all from a single mailbox.
          </p>
        </div>
      </div>
        `,
      },
      {
        component: <Card5 />,
        jsx: `<div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
          <div className=" bg-black sm:p-10 p-6 rounded-xl">
            <div className="">
              <h5 className="text-xl font-bold text-gray-200">Science of Chemistry</h5>
    
              <p className="mt-2 text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
              </p>
            </div>
          </div>
        </div>`,
      },
      {
        component: <Card6 />,
        jsx: ` <div className="relative block group  ">
        <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
        <div className="transition bg-black border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-6 ">
            <p className="mt-4 text-lg font-medium">Lorem ipsum dolor</p>
            <p className="mt-1 text-xs">ipsum dolor</p>
          </div>
        </div>
      </div>
    `,
      },
    ],
  },
  {
    url: '/components/',
    title: 'Features',
    urlTitle: 'features',
    store: [
      {
        component: <Feature1 />,
        jsx: `export const Feature1 = () => {
          return (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="px-12 text-center sm:px-0">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="img-fluid rounded mx-auto d-block" width="100" height="50">
                          <rect width="100" height="50" fill="#000000"></rect>
                          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="monospace" fontSize="26px" fill="#ffffff">icon</text>   
                      </svg>
                  </div>
                  <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                  Lorem ipsum
                  </h6>
                  <div className="mb-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
           
                  </div>
                </div>
                <div className="px-12 text-center sm:px-0">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="img-fluid rounded mx-auto d-block" width="100" height="50">
                          <rect width="100" height="50" fill="#000000"></rect>
                          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="monospace" fontSize="26px" fill="#ffffff">icon</text>   
                      </svg>
                  </div>
                  <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                  Lorem 
                  </h6>
                  <div className="mb-2 text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing 
                  </div>
                </div>
                <div className="px-12 text-center sm:px-0">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="img-fluid rounded mx-auto d-block" width="100" height="50">
                          <rect width="100" height="50" fill="#000000"></rect>
                          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="monospace" fontSize="26px" fill="#ffffff">icon</text>   
                      </svg>
                  </div>
                  <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                  Lorem ipsum
                  </h6>
                  <div className="mb-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </div>
                </div>
                <div className="px-12 text-center sm:px-0">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="img-fluid rounded mx-auto d-block" width="100%">
                          <rect width="100" height="50" fill="#000000"></rect>
                          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="monospace" fontSize="26px" fill="#ffffff">icon</text>   
                      </svg>
                  </div>
                  <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                  Lorem ipsum
                  </h6>
                  <div className="mb-2 text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing            </div>
                </div>
              </div>
            </div>
          );
        };`,
      },
    ],
  },
  {
    url: '/components/',
    title: 'Footer',
    urlTitle: 'footer',
    store: [
      {
        component: <Footer1 />,
        jsx: `footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
                  <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-indigo-400">
                        Logo
                      </div>
                      <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                          <a href="#">Terms of Use</a>
                        </li>
                        <li>
                          <a href="#">Privacy</a>
                        </li>
                      </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                    </ul>
                  </div>
                </footer>`,
      },
      {
        component: <Footer2 />,

        jsx: `<footer className="py-6 dark:bg-gray-800 dark:text-gray-50">
              <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                  <div className="grid grid-cols-12">
                      <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                          <a href="#" className="flex justify-center space-x-3 md:justify-start">
                              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-indigo-400">
          Logo
                              </div>
                              <span className="self-center text-2xl font-semibold">Brand name</span>
                          </a>
                      </div>
                      <div className="col-span-6 text-center md:text-left md:col-span-3">
                          <p className="pb-1 text-lg font-medium">Category</p>
                          <ul>
                              <li>
                                  <a href="#" className="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" className="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" className="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" className="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" className="hover:dark:text-indigo-400">Link</a>
                              </li>
                          </ul>
                      </div>
                      <div className="col-span-6 text-center md:text-left md:col-span-3">
                          <p className="pb-1 text-lg font-medium">Category</p>
                          <ul>
                              <li>
                                  <a href="#" className="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" className="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" className="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" className="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" className="hover:dark:text-indigo-400">Link</a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="grid justify-center pt-6 lg:justify-between">
                      <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                          <span>©2021 All rights reserved</span>
                          <a href="#">
                              <span>Privacy policy</span>
                          </a>
                          <a href="#">
                              <span>Terms of service</span>
                          </a>
                      </div>
                      <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                          <a href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-indigo-400 dark:text-gray-900">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                              </svg>
                          </a>
                          <a href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-indigo-400 dark:text-gray-900">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                              </svg>
                          </a>
                          <a href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-indigo-400 dark:text-gray-900">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
          </footer>`,
      },
    ],
  },
  {
    url: '/components/',
    title: 'Button',
    urlTitle: 'button',
    store: [
      {
        component: <Button4 />,
        jsx: `
      <button className="relative rounded bg-[#6c757d] px-10 py-2 shadow-[0_5px_#495057] duration-300 ease-in-out hover:top-[1px] hover:shadow-[0_3px_#495057] active:shadow-[#495057]">
        Button
      </button>
      `,
      },
      {
        component: <Button5 />,
        jsx: `
      <button className="relative z-0 rounded bg-[#0b0b0b] px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-gray-700 after:transition-[all_0.3s_ease]  hover:after:w-full ">
        Button
      </button>
      `,
      },
      {
        component: <Button1 />,
        jsx: `<button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Basic</button>`,
      },
      {
        component: <Button2 />,
        jsx: `<button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Border</button>`,
      },
      {
        component: <Button3 />,
        jsx: `<button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">Rounded</button>`,
      },
    ],
  },
  {
    url: '/components/',
    title: 'Nav',
    urlTitle: 'nav',
    store: [
      {
        component: <Nav1 />,
        jsx: `<header className="p-4 bg-coolGray-100 text-coolGray-800 w-full">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-8 h-8 text-blue-600"
            >
              <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
              <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
            </svg>
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Link
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded">Sign in</button>
            <button className="self-center px-8 py-3 font-semibold rounded bg-blue-600 text-white">
              Sign up
            </button>
          </div>
  
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-coolGray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
  
  
        </div>
      </header>`,
      },
      {
        component: <Nav2 />,
        jsx: `<header className = "p-4 dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex justify-between h-16 mx-auto">
            <a
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-8 h-8 dark:text-indigo-400"
              >
                <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
              </svg>
            </a>
            <ul className="items-stretch hidden space-x-3 md:flex">
              <li className="flex">
                <a
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Link
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Link
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-indigo-400 dark:border-indigo-400"
                >
                  Link
                </a>
              </li>
              <li className="flex">
                <a
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Link
                </a>
              </li>
            </ul>
            <button className="flex justify-end p-4 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </header>`,
        html: `<header class="p-4 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div class="container flex justify-between h-16 mx-auto">
            <a href="#" aria-label="Back to homepage" class="flex items-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-8 h-8 dark:text-indigo-400">
                    <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                    <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                </svg>
            </a>
            <ul class="items-stretch hidden space-x-3 md:flex">
                <li class="flex">
                    <a href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</a>
                </li>
                <li class="flex">
                    <a href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</a>
                </li>
                <li class="flex">
                    <a href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-indigo-400 dark:border-indigo-400">Link</a>
                </li>
                <li class="flex">
                    <a href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</a>
                </li>
            </ul>
            <button class="flex justify-end p-4 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>`,
      },
    ],
  },
  {
    url: '/components/',
    title: 'Avatar',
    urlTitle: 'avatar',
    store: [
      {
        component: <SquareAvatar />,
        jsx: `
        export const SquareAvatar = () => {
          return (
            <img
              src="https://source.unsplash.com/120x120/?portrait"
              className="rounded-lg w-32"
              alt="Avatar"
            />
          );
        };`,
      },
      {
        component: <CircleAvatar />,
        jsx: `export const CircleAvatar = () => {
          return (
            <div className="flex flex-wrap justify-center">
              <div className="w-6/12 sm:w-4/12 px-4">
                <img
                  src="https://images.unsplash.com/photo-1645491223603-218aa69dcec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=729&q=80"
                  alt="image"
                  className="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>
          );
        }`,
      },
      {
        component: <ContentAvatar />,
        jsx: `export const ContentAvatar = () => {
          return (
            <div className="text-center">
              <img
                src="https://source.unsplash.com/120x120/?portrait"
                className="rounded-full w-32 mb-4 mx-auto"
                alt="Avatar"
              />
              <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
              <p className="text-gray-500">Web designer</p>
            </div>
          );
        };`,
      },
    ],
  },
]
