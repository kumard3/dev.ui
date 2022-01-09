/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Componentbutton } from "../../components/ComponentButton";

import Card1 from "../../components/card/Card1";
import Card2 from "../../components/card/Card2";
import CodeDisplay from "../../components/CodeDisplay";

import Footer1 from "../../components/footer/Footer1";
import Footer2 from "../../components/footer/Footer2";
import Button1 from "../../components/button/Button1";
import Button2 from "../../components/button/Button2";
import Button3 from "../../components/button/Button3";
import Nav2 from "../../components/nav/Nav2";
const routes = [
  {
    href: "/components/card",
    title: "Card",
  },
  {
    href: "/components/footer",
    title: "Footer",
  },
  {
    href: "/components/button",
    title: "Button",
  },
  {
    href: "/components/nav",
    title: "Nav",
  },
];

export default function Component() {
  const [stores, setStore] = useState("");
  const [codeData, setCodeData] = useState([
    {
      title: "Card",
      store: [
        {
          component: <Card1 />,
          jsx: `<div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img src="https://source.unsplash.com/300x300/?random" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"/>
        <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-indigo-400">Quisque</span>
            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
        </div>
        <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
    </div>`,
          html: `<div class="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
    <img src="https://source.unsplash.com/300x300/?random" alt="" class="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500">
    <div class="mt-6 mb-2">
        <span class="block text-xs font-medium tracking-widest uppercase dark:text-indigo-400">Quisque</span>
        <h2 class="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
    </div>
    <p class="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
  </div>`,
        },
        {
          component: <Card2 />,
          jsx: `<div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img src="https://source.unsplash.com/301x301/?random" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"/>
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
            </div>
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-gray-900">Read more</button>
        </div>
    </div>`,
          html: `<div class="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
    <img src="https://source.unsplash.com/301x301/?random" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500">
    <div class="flex flex-col justify-between p-6 space-y-8">
        <div class="space-y-2">
            <h2 class="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
            <p class="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
        </div>
        <button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-gray-900">Read more</button>
    </div>
  </div>`,
        },
      ],
    },
    {
      title: "Footer",
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
          html: `<footer class="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
            <div class="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div class="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-indigo-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5 rounded-full dark:text-gray-900">
                            <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                        </svg>
                    </div>
                    <ul class="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                    </ul>
                </div>
                <ul class="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
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
          html: `<footer class="py-6 dark:bg-gray-800 dark:text-gray-50">
              <div class="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                  <div class="grid grid-cols-12">
                      <div class="pb-6 col-span-full md:pb-0 md:col-span-6">
                          <a href="#" class="flex justify-center space-x-3 md:justify-start">
                              <div class="flex items-center justify-center w-12 h-12 rounded-full dark:bg-indigo-400">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
                                      <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                                  </svg>
                              </div>
                              <span class="self-center text-2xl font-semibold">Brand name</span>
                          </a>
                      </div>
                      <div class="col-span-6 text-center md:text-left md:col-span-3">
                          <p class="pb-1 text-lg font-medium">Category</p>
                          <ul>
                              <li>
                                  <a href="#" class="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" class="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" class="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" class="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" class="hover:dark:text-indigo-400">Link</a>
                              </li><!---->
                          </ul>
                      </div>
                      <div class="col-span-6 text-center md:text-left md:col-span-3">
                          <p class="pb-1 text-lg font-medium">Category</p>
                          <ul>
                              <li>
                                  <a href="#" class="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" class="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" class="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" class="hover:dark:text-indigo-400">Link</a>
                              </li>
                              <li>
                                  <a href="#" class="hover:dark:text-indigo-400">Link</a>
                              </li><!---->
                          </ul>
                      </div>
                  </div>
                  <div class="grid justify-center pt-6 lg:justify-between">
                      <div class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                          <span>©2021 All rights reserved</span>
                          <a href="#">
                              <span>Privacy policy</span>
                          </a>
                          <a href="#">
                              <span>Terms of service</span>
                          </a>
                      </div>
                      <div class="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                          <a href="#" title="Email" class="flex items-center justify-center w-10 h-10 rounded-full dark:bg-indigo-400 dark:text-gray-900">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                              </svg>
                          </a>
                          <a href="#" title="Twitter" class="flex items-center justify-center w-10 h-10 rounded-full dark:bg-indigo-400 dark:text-gray-900">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5">
                                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                              </svg>
                          </a>
                          <a href="#" title="GitHub" class="flex items-center justify-center w-10 h-10 rounded-full dark:bg-indigo-400 dark:text-gray-900">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
          </footer>`,
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
      title: "Button",
      store: [
        {
          component: <Button1 />,
          jsx: `<button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Basic</button>`,
          html: `<button type="button" class="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Basic</button>`,
        },
        {
          component: <Button2 />,
          jsx: `<button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Border</button>`,
          html: `<button type="button" class="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Border</button>`,
        },
        {
          component: <Button3 />,
          jsx: `<button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">Rounded</button>`,
          html: `<button type="button" class="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">Rounded</button>`,
        },
      ],
    },
    {
      title: "Nav",
      store: [
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
  ]);

  const filterdata = codeData.filter((e) => e.title === stores);
  const Filter = filterdata[0];
  return (
    <div className="min-h-screen">
      <section className="text-white container w-full mx-auto mt-3 ">
        <h1 className="text-5xl font-bold">Components</h1>
        <section className="text-white flex justify-center items-center w-full my-4 ">
          {routes.map((n, index) => {
            return (
              <div key={n.title} onClick={() => setStore(n.title)}>
                <Componentbutton title={n.title} />
              </div>
            );
          })}
        </section>
      </section>

      {stores === "" ? (
        <div className="container flex items-center justify-center p-6 mx-auto mt-8 lg:my-16 h-80 sm:h-96 md:h-112 xl:h-128">
          <img
            src="/pc_guy.png"
            alt="pc_guy"
            className="object-contain h-80 sm:h-96 md:h-112 xl:h-128"
          />
        </div>
      ) : (
        <div className="text-white">
          <div className="container mx-auto flex w-full justify-center flex-col items-center">
            {Filter?.store.map((n) => {
              return (
                <CodeDisplay
                  component={n.component}
                  key={n.component}
                  jsx={n.jsx}
                  html={n.html}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
