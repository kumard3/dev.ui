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
import Button5 from '../../app/components/button/Button5'

import Nav1 from '../../app/components/nav/Nav1'
import Nav2 from '../../app/components/nav/Nav2'
import { Feature1 } from '../../app/components/features/Features1'

import TabSection from '../../app/components/tab/TabSection'
import VerticalTab from '../../app/components/tab/VerticalTab'

import { SquareAvatar, ContentAvatar, CircleAvatar } from '../../app/components/avatar/index'

import HeroSection from '../../app/components/Hero/HeroSection'
import HeroSection2 from '../../app/components/Hero/HeroSection2'
import Modal from '../../app/components/modal/Modal'
import HeroSection3 from '../../app/components/Hero/HeroSection3'
import HeroSection4 from '../../app/components/Hero/HeroSection4'
import HeroSection5 from '../../app/components/Hero/HeroSection5'
import HeroSection6 from '../../app/components/Hero/HeroSection6'
import HeroSection7 from '../../app/components/Hero/HeroSection7'
import HeroSection8 from '../../app/components/Hero/HeroSection8'
import Card7 from '../../app/components/card/Card7'
import Card9 from '../../app/components/card/Card9'
import Card8 from '../../app/components/card/Card8'
import HeroSection10 from '../../app/components/Hero/HeroSection10'
import Card10 from '../../app/components/card/Card10'

export const codeData = [
  {
    url: '/components/',
    title: 'Hero',
    urlTitle: 'hero',
    store: [
      {
        name: '',
        component: <HeroSection10 />,
        jsx: ` export default function HeroSection() {
          return (
            <div className="relative min-h-screen overflow-hidden">
              <nav className=" container relative mx-auto flex w-full items-center justify-between px-5 py-3 text-xl ">
                <div>Logo</div>
                <div className="flex items-center justify-around">
                  <ul className="mx-3 flex">
                    <li className="mx-3">Links</li>
                    <li className="mx-3">Links</li>
                    <li className="mx-3">Links</li>
                  </ul>
                  <button className="hidden rounded-xl bg-white/20 px-4 py-2 text-[#FF00E5] sm:block">
                    CTA Button
                  </button>
                </div>
              </nav>
        
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative top-32 max-w-3xl font-Manrope">
                  <h1 className="text-5xl font-extrabold sm:text-7xl">
                    Making bitcoin more than an investment.
                  </h1>
                  <p className="my-4 font-medium">
                    Bitcoin is the best money. It should defenitely be used like it. We
                    always build and fund free, open-source projects aimed at making
                    bitcoin the planet's preferred currency.
                  </p>
                  <div>
                    <button className="m-1 rounded-xl  bg-[#FF00E5] px-16 py-3">
                      Learn More
                    </button>
                    <button className=" mx-1 rounded-xl bg-white px-16 py-3 text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative   top-[10vh] max-w-full sm:top-0 ">
                <div className="absolute w-full object-contain">
                  <img src="circle.png" alt="" className="relative  object-fill" />
                </div>
              </div>
            </div>
          );
        }
                       
        `,
      },
      {
        name: '',
        component: <HeroSection8 />,
        jsx: ` export default function HeroSection8() {
          const data = ['HOME', 'GALLERY', 'BLOG', 'KNET']
        
          return (
            <div className="relative bg-[#060707]">
              <nav className=" relative  flex justify-between z-10 items-center px-5 py-5 w-full ">
                <div className="text-4xl font-IBMPlexBold">Koala.</div>
                <div className="flex font-IBMPlexBold">
                  {data.map((item, index) => {
                    return (
                      <h1 className="px-3" key={index}>
                        {item}
                      </h1>
                    )
                  })}
                </div>
              </nav>
              <div className=" items-center min-h-screen flex justify-around relative flex-wrap px-5">
                <>
                  <div className="bg-[#15d98bfd] h-[362px] w-[362px] absolute rounded-full blur-[120px] filter -top-[100px]  -left-20 opacity-75"></div>
                </>
                <div className="max-w-xl relative">
                  <h1 className="font-IBMPlexBold text-6xl max-w-md text-left uppercase">
                    Koala <span className="text-[#02C173]">Intelligence</span> Agency
                  </h1>
                  <p className="font-IBMPlexRegular text-left">
                    A collection of 10,000 worldly Koalas each with their unique
                    skillsets. Their mission is to protect the world from evil.
                  </p>
                  <div className="hidden md:block py-5">
                    <svg
                      width="108"
                      height="108"
                      viewBox="0 0 138 138"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_70)">
                        <path
                          d="M74.0661 17.1364L75.7731 6.09745L82.6557 7.33685L82.4258 8.82347L77.3072 7.90172L76.8107 11.1122L81.7404 11.9999L81.5105 13.4865L76.5808 12.5988L76.0599 15.9674L81.1786 16.8892L80.9487 18.3758L74.0661 17.1364Z"
                          fill="white"
                        />
                        <path
                          d="M90.0353 21.4714L88.1262 20.7743L87.617 18.239L87.1534 15.8225L87.0632 15.7896L85.2719 17.3827L83.3609 19.0343L81.5721 18.3811L86.5488 14.1036L85.1986 7.82233L87.1077 8.51942L87.5605 10.8128L88.0087 13.1726L88.0839 13.2001L89.8003 11.6307L91.5272 10.1332L93.316 10.7864L88.6082 14.8556L90.0353 21.4714Z"
                          fill="white"
                        />
                        <path
                          d="M90.6489 21.7419L95.749 11.804L99.3766 13.8742C100.303 14.403 100.871 15.0706 101.08 15.8771C101.298 16.6889 101.169 17.5599 100.692 18.4901C100.214 19.4203 99.5935 20.0111 98.8296 20.2623C98.075 20.5189 97.2344 20.3828 96.3078 19.854L94.2368 18.6722L92.2056 22.6302L90.6489 21.7419ZM94.9164 17.348L96.7511 18.3951C97.7147 18.945 98.4304 18.7644 98.898 17.8532L99.2122 17.2409C99.6749 16.3392 99.4245 15.6134 98.4608 15.0634L96.6261 14.0164L94.9164 17.348Z"
                          fill="white"
                        />
                        <path
                          d="M99.0086 25.4792L105.665 16.5088L107.053 17.6423L101.293 25.4046L105.236 28.623L104.339 29.831L99.0086 25.4792Z"
                          fill="white"
                        />
                        <path
                          d="M107.616 33.5322C107.151 33.0037 106.838 32.4545 106.677 31.8846C106.531 31.3152 106.522 30.7323 106.65 30.1357C106.785 29.5472 107.057 28.945 107.466 28.3292C107.875 27.7134 108.411 27.0874 109.072 26.4511C109.725 25.8222 110.362 25.32 110.983 24.9444C111.611 24.5614 112.212 24.3239 112.784 24.2318C113.363 24.1477 113.914 24.2091 114.437 24.4158C114.974 24.6232 115.476 24.9912 115.941 25.5197C116.406 26.0482 116.712 26.5971 116.858 27.1664C117.019 27.7363 117.032 28.3155 116.897 28.9041C116.769 29.5006 116.497 30.1105 116.08 30.7337C115.671 31.3495 115.139 31.9719 114.486 32.6007C113.825 33.237 113.184 33.7429 112.563 34.1185C111.943 34.4941 111.343 34.7239 110.763 34.808C110.191 34.9001 109.636 34.8425 109.099 34.6351C108.576 34.4283 108.082 34.0607 107.616 33.5322ZM108.689 32.5001C109.218 33.1006 109.806 33.3179 110.455 33.1518C111.112 32.9783 111.813 32.5327 112.559 31.8151L113.908 30.5167C114.646 29.8064 115.121 29.12 115.333 28.4575C115.552 27.7876 115.398 27.1523 114.869 26.5518C114.34 25.9512 113.747 25.7377 113.091 25.9112C112.442 26.0772 111.748 26.5154 111.01 27.2257L109.65 28.5352C108.912 29.2454 108.433 29.9355 108.213 30.6055C108.002 31.268 108.16 31.8995 108.689 32.5001Z"
                          fill="white"
                        />
                        <path
                          d="M112.149 38.9006L111.206 37.3949L120.435 31.1016L122.651 34.642C123.217 35.5464 123.4 36.402 123.201 37.2088C123.007 38.0247 122.479 38.7272 121.615 39.3163C120.91 39.7971 120.218 40.0175 119.538 39.9774C118.859 39.9372 118.26 39.6232 117.741 39.0351L115.248 43.8518L114.195 42.1698L116.667 37.6196L115.877 36.358L112.149 38.9006ZM118.205 37.3643C118.793 38.3048 119.506 38.4895 120.344 37.9185L120.912 37.5308C121.75 36.9598 121.874 36.204 121.285 35.2635L120.148 33.4458L117.067 35.5466L118.205 37.3643Z"
                          fill="white"
                        />
                        <path
                          d="M115.783 44.8495L125.94 40.2012L128.65 46.6479L127.282 47.2739L125.266 42.4794L122.312 43.8313L124.254 48.4488L122.886 49.0748L120.945 44.4573L117.845 45.8758L119.861 50.6703L118.493 51.2963L115.783 44.8495Z"
                          fill="white"
                        />
                        <path
                          d="M121.44 67.3673L124.339 66.2647L124.058 62.7231L121.026 62.1347L120.882 60.316L132.268 62.6056L132.461 65.0464L121.591 69.2657L121.44 67.3673ZM130.565 64.0061L130.555 63.8785L125.568 62.9295L125.795 65.8011L130.565 64.0061Z"
                          fill="#02C173"
                        />
                        <path
                          d="M121.368 71.7568L121.508 69.986L132.636 70.9509L132.307 75.1147C132.222 76.1782 131.861 76.9607 131.222 77.4621C130.582 77.9742 129.741 78.1851 128.7 78.0948C127.849 78.021 127.164 77.7528 126.644 77.2901C126.124 76.8274 125.831 76.2024 125.765 75.4149L120.907 77.5797L121.063 75.6015L125.746 73.6303L125.864 72.1466L121.368 71.7568ZM127.129 74.4088C127.042 75.5149 127.503 76.1117 128.513 76.1992L129.198 76.2587C130.208 76.3462 130.757 75.8369 130.844 74.7308L131.013 72.5931L127.299 72.2711L127.129 74.4088Z"
                          fill="#02C173"
                        />
                        <path
                          d="M128.996 85.3231L119.651 82.8522L120.073 81.1104L129.418 83.5812L130.244 80.1753L131.698 80.5598L129.624 89.1135L128.169 88.729L128.996 85.3231Z"
                          fill="#02C173"
                        />
                        <path
                          d="M118.503 86.8884L128.97 90.7992L128.362 92.2449L122.299 89.9099L119.626 88.8802L119.577 88.9982L125.14 92.934L124.452 94.5715L117.908 92.9666L117.859 93.0846L120.395 94.4389L126.142 97.5263L125.559 98.913L115.712 93.527L116.642 91.3141L122.962 92.9572L123.011 92.8392L117.573 89.1013L118.503 86.8884Z"
                          fill="#02C173"
                        />
                        <path
                          d="M112.878 97.7807C113.252 97.1838 113.683 96.736 114.172 96.4371C114.664 96.1533 115.203 96.0049 115.79 95.9921C116.371 95.9882 116.999 96.1198 117.674 96.3869C118.35 96.654 119.067 97.046 119.825 97.5629C120.574 98.0738 121.201 98.5985 121.707 99.1368C122.221 99.6812 122.594 100.232 122.824 100.789C123.048 101.355 123.13 101.927 123.07 102.505C123.013 103.098 122.798 103.694 122.424 104.29C122.05 104.887 121.618 105.328 121.126 105.611C120.637 105.91 120.102 106.062 119.521 106.065C118.934 106.078 118.299 105.948 117.615 105.675C116.939 105.408 116.227 105.019 115.477 104.508C114.719 103.991 114.088 103.464 113.582 102.925C113.076 102.387 112.711 101.835 112.487 101.269C112.257 100.712 112.171 100.137 112.228 99.5435C112.288 98.9651 112.505 98.3775 112.878 97.7807ZM114.108 98.6192C113.683 99.2974 113.63 99.945 113.948 100.562C114.275 101.185 114.866 101.788 115.721 102.371L117.268 103.426C118.114 104.003 118.872 104.32 119.541 104.376C120.219 104.438 120.77 104.13 121.194 103.452C121.619 102.774 121.668 102.123 121.341 101.5C121.023 100.883 120.441 100.286 119.594 99.7091L118.034 98.6452C117.188 98.0681 116.426 97.7485 115.748 97.6862C115.079 97.63 114.532 97.9409 114.108 98.6192Z"
                          fill="#02C173"
                        />
                        <path
                          d="M108.861 103.553L110.035 102.22L118.083 109.966L115.323 113.101C114.618 113.901 113.867 114.303 113.07 114.305C112.266 114.315 111.487 113.958 110.734 113.232C110.119 112.641 109.749 111.996 109.624 111.299C109.499 110.602 109.648 109.917 110.071 109.244L105.001 107.937L106.313 106.448L111.129 107.799L112.113 106.682L108.861 103.553ZM111.733 109.291C111 110.123 110.999 110.891 111.729 111.594L112.225 112.071C112.955 112.774 113.687 112.709 114.42 111.876L115.837 110.267L113.15 107.681L111.733 109.291Z"
                          fill="#02C173"
                        />
                        <path
                          d="M104.768 114.652L104.808 112.453L102.748 109.677L104.136 108.543L110.792 117.514L109.404 118.647L106.219 114.355L106.157 114.406L106.209 116.757L106.169 121.289L104.569 122.594L104.617 116.488L97.8016 113.715L99.3883 112.42L104.768 114.652Z"
                          fill="#02C173"
                        />
                        <path
                          d="M93.6414 114.538C94.4847 114.057 95.2715 113.804 96.0018 113.78C96.7322 113.756 97.4118 113.89 98.0406 114.181L97.544 115.735C96.9396 115.491 96.3728 115.379 95.8438 115.398C95.3197 115.427 94.7935 115.593 94.2654 115.894C93.6538 116.243 93.2589 116.652 93.0808 117.122C92.8933 117.597 92.936 118.101 93.2088 118.632C93.428 119.059 93.7165 119.318 94.0743 119.408C94.437 119.508 94.937 119.444 95.5744 119.215L96.7184 118.783C97.2207 118.595 97.6732 118.496 98.0759 118.487C98.4835 118.487 98.8455 118.551 99.1618 118.677C99.4831 118.813 99.7655 119.001 100.009 119.243C100.248 119.499 100.453 119.793 100.624 120.125C101.106 121.065 101.175 121.946 100.83 122.769C100.491 123.601 99.8018 124.313 98.764 124.905C97.9949 125.344 97.2759 125.589 96.6069 125.639C95.9336 125.704 95.3132 125.604 94.7458 125.339L95.2073 123.787C95.6465 123.966 96.1026 124.049 96.5755 124.037C97.0441 124.04 97.547 123.888 98.0845 123.581C98.659 123.253 99.0333 122.874 99.2076 122.443C99.3775 122.027 99.3382 121.577 99.0898 121.093C98.8803 120.685 98.5989 120.428 98.2454 120.323C97.8876 120.233 97.3808 120.307 96.7249 120.546L95.6014 120.948C94.6475 121.284 93.8448 121.319 93.193 121.053C92.5462 120.796 92.0425 120.316 91.682 119.614C91.4482 119.158 91.3126 118.696 91.2753 118.226C91.2287 117.762 91.2901 117.31 91.4595 116.869C91.6196 116.434 91.8831 116.014 92.2499 115.608C92.6124 115.217 93.0762 114.861 93.6414 114.538Z"
                          fill="#02C173"
                        />
                        <path
                          d="M77.8533 123.202C78.6303 123.062 79.2084 123.137 79.5877 123.426C79.9565 123.717 80.1817 124.127 80.2632 124.654L80.3365 125.128C80.3773 125.392 80.378 125.641 80.3388 125.876C80.2995 126.11 80.2081 126.322 80.0646 126.51C79.9227 126.709 79.7225 126.881 79.4642 127.025C79.2059 127.169 78.8825 127.276 78.494 127.346C78.1055 127.416 77.7674 127.428 77.4798 127.382C77.1921 127.336 76.9512 127.244 76.7571 127.106C76.5647 126.978 76.4146 126.81 76.3068 126.602C76.1991 126.393 76.1249 126.158 76.0841 125.894L76.0107 125.42C75.9292 124.892 76.0243 124.425 76.296 124.019C76.5572 123.614 77.0763 123.342 77.8533 123.202Z"
                          fill="#02C173"
                        />
                        <path
                          d="M63.5116 121.072L61.8046 132.111L54.9219 130.872L55.1518 129.385L60.2705 130.307L60.7669 127.096L55.8372 126.208L56.0671 124.722L60.9968 125.61L61.5177 122.241L56.399 121.319L56.6289 119.833L63.5116 121.072Z"
                          fill="white"
                        />
                        <path
                          d="M47.5421 116.737L49.4512 117.434L49.9604 119.97L50.424 122.386L50.5142 122.419L52.3055 120.826L54.2165 119.174L56.0053 119.827L51.0286 124.105L52.3788 130.386L50.4697 129.689L50.0169 127.396L49.5687 125.036L49.4935 125.009L47.7771 126.578L46.0502 128.075L44.2614 127.422L48.9692 123.353L47.5421 116.737Z"
                          fill="white"
                        />
                        <path
                          d="M46.9285 116.467L41.8284 126.405L38.2008 124.334C37.2742 123.806 36.7063 123.138 36.4973 122.331C36.279 121.52 36.4085 120.649 36.8859 119.718C37.3632 118.788 37.9839 118.197 38.7477 117.946C39.5024 117.69 40.343 117.826 41.2696 118.354L43.3405 119.536L45.3718 115.578L46.9285 116.467ZM42.661 120.86L40.8263 119.813C39.8627 119.263 39.147 119.444 38.6794 120.355L38.3652 120.968C37.9025 121.869 38.1529 122.595 39.1166 123.145L40.9513 124.192L42.661 120.86Z"
                          fill="white"
                        />
                        <path
                          d="M38.5685 112.729L31.9123 121.7L30.5239 120.566L36.2837 112.804L32.3416 109.586L33.238 108.377L38.5685 112.729Z"
                          fill="white"
                        />
                        <path
                          d="M29.9609 104.676C30.4262 105.205 30.7394 105.754 30.9003 106.324C31.0466 106.893 31.0557 107.476 30.9277 108.073C30.7927 108.661 30.5205 109.263 30.1113 109.879C29.702 110.495 29.1669 111.121 28.5058 111.757C27.8525 112.386 27.2154 112.888 26.5946 113.264C25.9662 113.647 25.3659 113.885 24.7937 113.977C24.2146 114.061 23.6635 113.999 23.1406 113.793C22.603 113.585 22.1015 113.217 21.6362 112.689C21.1709 112.16 20.8652 111.611 20.7189 111.042C20.5579 110.472 20.545 109.893 20.68 109.304C20.808 108.708 21.0804 108.098 21.4974 107.475C21.9066 106.859 22.438 106.237 23.0913 105.608C23.7524 104.971 24.3933 104.466 25.014 104.09C25.6348 103.714 26.2348 103.485 26.814 103.4C27.3861 103.308 27.941 103.366 28.4786 103.573C29.0015 103.78 29.4956 104.148 29.9609 104.676ZM28.8886 105.708C28.3599 105.108 27.771 104.891 27.122 105.057C26.4653 105.23 25.7641 105.676 25.0185 106.393L23.6695 107.692C22.9316 108.402 22.4567 109.088 22.2448 109.751C22.0252 110.421 22.1798 111.056 22.7085 111.657C23.2373 112.257 23.83 112.471 24.4867 112.297C25.1357 112.131 25.8292 111.693 26.5671 110.983L27.9276 109.673C28.6656 108.963 29.1443 108.273 29.3639 107.603C29.5758 106.941 29.4174 106.309 28.8886 105.708Z"
                          fill="white"
                        />
                        <path
                          d="M25.4289 99.3079L26.3713 100.814L17.1428 107.107L14.9267 103.566C14.3606 102.662 14.1773 101.807 14.3765 101C14.5701 100.184 15.0988 99.4813 15.9626 98.8922C16.6678 98.4114 17.3599 98.191 18.039 98.2311C18.7181 98.2713 19.3171 98.5853 19.8361 99.1734L22.3298 94.3567L23.3826 96.0387L20.9108 100.589L21.7004 101.85L25.4289 99.3079ZM19.3727 100.844C18.7841 99.9037 18.071 99.719 17.2337 100.29L16.6651 100.678C15.8278 101.249 15.7035 102.004 16.2921 102.945L17.4299 104.763L20.5105 102.662L19.3727 100.844Z"
                          fill="white"
                        />
                        <path
                          d="M21.7948 93.359L11.6378 98.0073L8.92742 91.5606L10.2953 90.9346L12.311 95.7291L15.265 94.3772L13.3237 89.7597L14.6915 89.1337L16.6328 93.7512L19.7323 92.3327L17.7166 87.5382L19.0844 86.9122L21.7948 93.359Z"
                          fill="white"
                        />
                        <path
                          d="M16.1374 70.8412L13.2389 71.9438L13.5194 75.4854L16.5518 76.0738L16.6958 77.8925L5.30965 75.6029L5.11635 73.1621L15.987 68.9428L16.1374 70.8412ZM7.01269 74.2023L7.0228 74.33L12.0101 75.279L11.7827 72.4074L7.01269 74.2023Z"
                          fill="#02C173"
                        />
                        <path
                          d="M16.2097 66.4517L16.0694 68.2225L4.94102 67.2576L5.27076 63.0938C5.35499 62.0303 5.71661 61.2478 6.35562 60.7464C6.99548 60.2343 7.83622 60.0234 8.87785 60.1137C9.72815 60.1875 10.4132 60.4557 10.9331 60.9184C11.4529 61.3811 11.7459 62.0061 11.812 62.7936L16.6708 60.6288L16.5141 62.6069L11.8312 64.5782L11.7137 66.0618L16.2097 66.4517ZM10.4481 63.7997C10.5357 62.6936 10.0746 62.0968 9.06484 62.0093L8.37928 61.9498C7.36954 61.8623 6.82087 62.3716 6.73327 63.4776L6.56398 65.6154L10.2788 65.9374L10.4481 63.7997Z"
                          fill="#02C173"
                        />
                        <path
                          d="M8.58186 52.8853L17.9266 55.3562L17.5041 57.098L8.15941 54.6272L7.33337 58.0331L5.87906 57.6486L7.95359 49.0948L9.4079 49.4794L8.58186 52.8853Z"
                          fill="#02C173"
                        />
                        <path
                          d="M19.0744 51.3201L8.60729 47.4093L9.2151 45.9636L15.2781 48.2985L17.9511 49.3283L18.0007 49.2103L12.4372 45.2745L13.1256 43.637L19.6691 45.2419L19.7187 45.1239L17.1822 43.7696L11.4355 40.6822L12.0185 39.2955L21.8654 44.6815L20.9351 46.8944L14.6159 45.2513L14.5663 45.3693L20.0048 49.1072L19.0744 51.3201Z"
                          fill="#02C173"
                        />
                        <path
                          d="M24.6992 40.4278C24.3257 41.0247 23.8944 41.4725 23.4055 41.7714C22.9134 42.0552 22.3741 42.2036 21.7875 42.2164C21.2066 42.2203 20.5784 42.0887 19.9029 41.8216C19.2275 41.5545 18.5107 41.1625 17.7527 40.6456C17.0035 40.1347 16.376 39.61 15.8704 39.0716C15.3559 38.5273 14.9837 37.9767 14.7537 37.4198C14.5294 36.8539 14.4473 36.2818 14.5075 35.7035C14.5645 35.1101 14.7798 34.515 15.1534 33.9181C15.5269 33.3213 15.9598 32.8809 16.4518 32.5971C16.9407 32.2982 17.4757 32.1469 18.0566 32.143C18.6432 32.1302 19.2786 32.2603 19.9629 32.5333C20.6384 32.8004 21.3507 33.1894 22.0999 33.7003C22.8579 34.2173 23.4898 34.7449 23.9954 35.2833C24.5011 35.8217 24.8661 36.3738 25.0904 36.9397C25.3204 37.4965 25.4069 38.0716 25.3499 38.665C25.2897 39.2434 25.0728 39.831 24.6992 40.4278ZM23.4696 39.5893C23.8942 38.9111 23.9474 38.2635 23.6293 37.6465C23.3023 37.0236 22.7114 36.4206 21.8564 35.8375L20.3095 34.7826C19.4633 34.2056 18.7057 33.8889 18.0366 33.8327C17.3587 33.7704 16.8075 34.0784 16.383 34.7566C15.9584 35.4349 15.9096 36.0855 16.2366 36.7084C16.5547 37.3254 17.1368 37.9224 17.983 38.4994L19.5431 39.5633C20.3893 40.1404 21.1513 40.46 21.8292 40.5223C22.4983 40.5785 23.0451 40.2676 23.4696 39.5893Z"
                          fill="#02C173"
                        />
                        <path
                          d="M28.7164 34.6554L27.5425 35.9887L19.4946 28.2425L22.2547 25.1076C22.9597 24.3069 23.7108 23.9055 24.5078 23.9034C25.3119 23.8934 26.0906 24.2508 26.8439 24.9759C27.4589 25.5678 27.8287 26.2122 27.9535 26.9092C28.0782 27.6062 27.9294 28.2914 27.507 28.9647L32.5763 30.2714L31.265 31.7608L26.4484 30.4089L25.4649 31.5259L28.7164 34.6554ZM25.8443 28.9176C26.5775 28.0849 26.579 27.3171 25.8488 26.6142L25.353 26.137C24.6227 25.4342 23.891 25.4991 23.1578 26.3319L21.7407 27.9414L24.4272 30.5271L25.8443 28.9176Z"
                          fill="#02C173"
                        />
                        <path
                          d="M32.8098 23.5561L32.7698 25.7556L34.8296 28.5315L33.4412 29.665L26.785 20.6947L28.1734 19.5612L31.3585 23.8536L31.4204 23.803L31.3679 21.4519L31.4089 16.9197L33.008 15.6141L32.9604 21.7202L39.7758 24.4934L38.1891 25.7888L32.8098 23.5561Z"
                          fill="#02C173"
                        />
                        <path
                          d="M43.9362 23.6703C43.093 24.1515 42.3062 24.4042 41.5758 24.4283C40.8454 24.4524 40.1659 24.3187 39.537 24.0272L40.0336 22.4737C40.6381 22.7178 41.2048 22.83 41.7338 22.8103C42.2579 22.7812 42.7841 22.6159 43.3123 22.3145C43.9238 21.9655 44.3187 21.5561 44.4969 21.0863C44.6843 20.6111 44.6416 20.1078 44.3689 19.5763C44.1497 19.1491 43.8611 18.8904 43.5033 18.8001C43.1406 18.7003 42.6406 18.7648 42.0033 18.9935L40.8592 19.4255C40.357 19.6139 39.9045 19.7126 39.5018 19.7216C39.0942 19.721 38.7322 19.6576 38.4158 19.5313C38.0946 19.3956 37.8121 19.2071 37.5685 18.9657C37.3292 18.7095 37.1243 18.4154 36.9538 18.0832C36.4716 17.1435 36.4028 16.2624 36.7474 15.4399C37.0871 14.6079 37.7758 13.8957 38.8136 13.3035C39.5827 12.8646 40.3017 12.6199 40.9707 12.5695C41.644 12.5043 42.2644 12.6043 42.8318 12.8696L42.3703 14.4214C41.9311 14.2426 41.4751 14.1592 41.0021 14.1714C40.5336 14.1688 40.0306 14.3209 39.4932 14.6276C38.9187 14.9554 38.5443 15.3348 38.37 15.7655C38.2002 16.1815 38.2395 16.6316 38.4879 17.1157C38.6973 17.5238 38.9788 17.7804 39.3322 17.8855C39.69 17.9758 40.1969 17.9013 40.8528 17.662L41.9763 17.2602C42.9301 16.9245 43.7329 16.8897 44.3846 17.1559C45.0315 17.4126 45.5351 17.8922 45.8956 18.5945C46.1294 19.0501 46.265 19.5127 46.3023 19.9823C46.3489 20.4466 46.2875 20.8989 46.1181 21.3391C45.958 21.7741 45.6945 22.1944 45.3277 22.6001C44.9652 22.991 44.5014 23.3478 43.9362 23.6703Z"
                          fill="#02C173"
                        />
                        <path
                          d="M59.7241 15.0062C58.9471 15.1461 58.369 15.0714 57.9897 14.7821C57.6209 14.4909 57.3957 14.0817 57.3142 13.5545L57.2409 13.08C57.2001 12.8165 57.1993 12.5673 57.2386 12.3327C57.2779 12.0981 57.3693 11.8865 57.5128 11.6981C57.6547 11.4992 57.8548 11.3277 58.1132 11.1836C58.3715 11.0396 58.6949 10.9326 59.0834 10.8626C59.4719 10.7927 59.81 10.7805 60.0976 10.8263C60.3853 10.872 60.6262 10.9641 60.8203 11.1025C61.0127 11.2304 61.1628 11.3985 61.2706 11.6066C61.3783 11.8148 61.4525 12.0507 61.4933 12.3143L61.5667 12.7887C61.6482 13.3159 61.5531 13.7828 61.2814 14.1893C61.0202 14.594 60.5011 14.8663 59.7241 15.0062Z"
                          fill="#02C173"
                        />
                        <path
                          d="M85.6667 69L86.3739 68.2929L87.081 69L86.3739 69.7071L85.6667 69ZM52.3334 70C51.7811 70 51.3334 69.5523 51.3334 69C51.3334 68.4477 51.7811 68 52.3334 68V70ZM76.3739 58.2929L86.3739 68.2929L84.9596 69.7071L74.9596 59.7071L76.3739 58.2929ZM86.3739 69.7071L76.3739 79.7071L74.9596 78.2929L84.9596 68.2929L86.3739 69.7071ZM85.6667 70H52.3334V68H85.6667V70Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_70">
                          <rect width="138" height="138" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div>
                  <img
                    width="500"
                    height="500"
                    alt="bg-image"
                    src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1651418249/new-nft_tlfisy.png"
                  />
                </div>
              </div>
            </div>
          )
        }                
        `,
      },
      {
        name: '',
        component: <HeroSection7 />,
        jsx: `export default function HeroSection7() {
          return (
            <div className="bg-[#EEF4FF] min-h-screen relative w-full text-black">
              <Nav />
              <Header />
            </div>
          )
        }
        
        const Nav = () => {
          const navData = [
            {
              name: 'Home',
              href: '#home',
            },
            {
              name: 'Work',
              href: '#work',
            },
            {
              name: 'About',
              href: '#about',
            },
            {
              name: 'Contact',
              href: '#contact',
            },
          ]
          return (
            <div className="absolute top-0 z-50  w-full py-3 text-xl font-bold drop-shadow-xl flex-none transition-colors duration-500  ">
              <div className="px-4 flex justify-around">
                <div>
                  <h1 className="font-jostBold text-4xl text-[#3E3FD8] ">Agency</h1>
                </div>
                <div className="sm:flex justify-around hidden">
                  {navData.map((n, index) => {
                    return (
                      <a href={n.href} key={index}>
                        <h1 className="mx-4 font-jostRegular text-2xl  ">{n.name}</h1>
                      </a>
                    )
                  })}
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-[#EEF4FF] rounded-xl w-[170px] h-[60px] text-[#3E3FD8] "
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )
        }
        
        const Header = () => {
          return (
            <div className="flex pt-24 w-full  xl:pt-0 justify-around min-h-screen items-center flex-wrap overflow-hidden px-5">
              <div className="max-w-xl text-black ">
                <h1 className="font-jostBold text-[58px] leading-[50px] sm:text-7xl">
                  Marketing is The Key of Business Sucess.
                </h1>
                <p className="font-jostRegular text-xl py-10 text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been{' '}
                </p>
                <div className="flex items-center flex-wrap ">
                  <button className="bg-[#3E3FD8] mr-4 flex text-white font-jostMedium w-[170px] h-[60px] rounded-3xl text-xl items-center justify-center">
                    Get Started{' '}
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      className="mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="23" height="23" rx="5" fill="#EEF4FF" />
                      <path
                        d="M16.3536 12.3536C16.5488 12.1583 16.5488 11.8417 16.3536 11.6464L13.1716 8.46447C12.9763 8.2692 12.6597 8.2692 12.4645 8.46447C12.2692 8.65973 12.2692 8.97631 12.4645 9.17157L15.2929 12L12.4645 14.8284C12.2692 15.0237 12.2692 15.3403 12.4645 15.5355C12.6597 15.7308 12.9763 15.7308 13.1716 15.5355L16.3536 12.3536ZM7 12.5L16 12.5L16 11.5L7 11.5L7 12.5Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                  <button className="flex text-[#61646B] my-1 sm:my-0 items-center font-jostMedium text-xl">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      className="mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="20" fill="#3E3FD8" />
                      <circle cx="24" cy="24" r="20.95" stroke="#3E3FD8" strokeWidth="0.1" />
                      <circle cx="24" cy="24" r="22.95" stroke="#3E3FD8" strokeWidth="0.1" />
                      <circle cx="24" cy="24" r="21.95" stroke="#3E3FD8" strokeWidth="0.1" />
                      <circle cx="24" cy="24" r="23.95" stroke="#3E3FD8" strokeWidth="0.1" />
                      <path
                        d="M31 22.2679C32.3333 23.0377 32.3333 24.9623 31 25.7321L22 30.9282C20.6667 31.698 19 30.7358 19 29.1962L19 18.8038C19 17.2642 20.6667 16.302 22 17.0718L31 22.2679Z"
                        fill="#EEF4FF"
                      />
                    </svg>
                    Watch Our Video
                  </button>
                </div>
              </div>
              <div className="relative h-full">
                <img
                  src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1651252781/Hero_mcnozf.png"
                  loading="lazy"
                  width="530"
                  height="530"
                  alt="Hero"
                  about="Hero Image"
                  className="relative z-10 top-12 -right-16"
                />
                <div className="absolute -top-10 h-full">
                  <svg
                    width="1100"
                    height="808"
                    viewBox="0 0 1100 808"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="216" width="884" height="808" rx="60" fill="#3E3FD8" fillOpacity="0.75" />
                    <rect y="132" width="501" height="514" rx="60" fill="#EF8B8D" fillOpacity="0.75" />
                  </svg>
                </div>
                <div className="bg-[#EEF4FF] hidden sm:block shadow-lg absolute bottom-40 -left-24 p-7 rounded-xl ">
                  <h1 className="font-jostMedium text-xl text-[#2E323B]">Our Creative Team</h1>
                  <img
                    src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1651252778/group-image_obqbym.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          )
        }        
        `,
      },
      {
        name: '',
        component: <HeroSection6 />,
        jsx: `export default function HeroSection6() {
          return (
            <div className="relative max-h-screen overflow-hidden w-full ">
              <div className="absolute inset-0 -z-0 opacity-90 w-full min-h-screen">
                <img src="/space.png" className="object-cover w-full h-full" alt="Background" />
              </div>
              <div className="absolute -top-[700px] -left-[100px]">
                <img src="/Gradient3.svg" className="relative " />
              </div>
              <div className="absolute opacity-80  md:opacity-100 -top-[700px] -right-[1000px] sm:-top-[500px] sm:-right-[800px]">
                <img src="/gradient1.svg" className="relative " />
              </div>
        
              <div className="flex justify-between w-full  items-center relative z-10 px-2 sm:px-10 py-3">
                <div className="flex">
                  <h1 className="mr-2">LOGIN</h1>
                  <h1>SIGN UP</h1>
                </div>
                <button className="  text-sm sm:text-lg px-4 sm:px-0 sm:w-[200px] h-[48px] border-white border ">
                  START EXPLORING
                </button>
              </div>
              <div className="relative z-10 h-[80vh] flex flex-col justify-center items-center">
                <h1 className="AberMono text-5xl md:text-8xl">CRYPTO SPACE</h1>
                <div className="relative max-w-3xl my-5">
                  <p className="Raleway-Medium text-2xl sm:text-[32px]">
                    is a distributed gaming environment for the generations; brought to the metaverse.
                  </p>
                  <p className="Raleway-Regular py-5 text-2xl ">
                    A multiplayer, game-arcade metaverse, where players socialize and compete in the most
                    popular arcade games.
                  </p>
                </div>
                <button className="AberMono text-3xl bg-white text-black w-[320px] h-[60px]">
                  GET STARTED
                </button>
              </div>
        
              <div className="absolute -bottom-[800px] -left-[600px] sm:-bottom-[700px] sm:-left-[500px] ">
                <img src="/gradient.svg" className="relative " />
              </div>
              <div className="absolute -bottom-[350px] left-[450px] ">
                <img src="/Gradient2.svg" className="relative " />
              </div>
            </div>
          )
        }
        `,
      },
      {
        name: '',
        component: <HeroSection5 />,
        jsx: `export default function HeroSection5() {
          const NavData = ['Marketplace', 'Artists', 'Community']
        
          const image =
            'https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650696868/new-nft-hero-section-image_gcqla0.png'
          return (
            <div className="h-screen bg-black relative overflow-hidden w-full">
              <nav className=" relative  flex justify-between z-50 items-center px-5 py-3 w-full ">
                <div>
                  <img
                    src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650702001/Group1_nn2bfi.png"
                    width="140"
                    height="100"
                  />
                </div>
                <>
                  <div className=" hidden sm:flex">
                    {NavData.map((item, index) => {
                      return (
                        <h1 className="text-xl Rubik-SemiBold mx-2" key={index}>
                          {item}
                        </h1>
                      )
                    })}
                  </div>
                </>
                <div>
                  <button className="border-2 rounded-xl border-[#FFA503] hover:bg-[#FFA503] duration-150 ease-in-out hover:duration-150  w-[170.13px] h-[60.05px] text-xl Rubik-SemiBold">
                    Login
                  </button>
                </div>
              </nav>
              <div className=" grid lg:grid-cols-2 items-center overflow-hidden">
                <div className="px-3 sm:px-4 max-w-3xl relative z-50 ">
                  <h1 className="Rubik-Medium text-4xl pt-10 sm:pt-0 md:text-[55px] leading-[1.2] max-w-3xl text-left">
                    Discover unique NFTs and Digital arts on our platform with ease
                  </h1>
                  <div className="relative overflow-hidden flex max-w-3xl items-center ">
                    <div className="max-w-[345px] h-[70px] relative overflow-hidden ">
                      <svg
                        viewBox="0 0 445 75"
                        className=" relative w-[280px] h-[70px] sm:w-[345px] sm:h-[70px] "
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.31746 2.2262H434.97C441.244 2.2262 444.609 9.60364 440.496 14.3409L391.96 70.2456C390.57 71.8465 388.554 72.7659 386.435 72.7659H9.31746C5.27614 72.7659 2 69.4897 2 65.4484V9.54364C2 5.50233 5.27613 2.2262 9.31746 2.2262Z"
                          stroke="#FFA503"
                          strokeWidth="4"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        placeholder="Enter your email to get started"
                        className="Rubik-Bold sm:text-lg -top-1 rounded-br-3xl text-sm bg-transparent focus:outline-none px-4 text-white z-10 w-full absolute inset-0"
                      />
                    </div>
                    <svg
                      width="153"
                      height="75"
                      viewBox="0 0 183 75"
                      className=" relative w-[110px] h-[70px] sm:w-[155px] sm:h-[75px] "
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M66.1943 3.25782C67.9595 1.32639 70.4555 0.226196 73.072 0.226196H173.682C178.828 0.226196 183 4.39777 183 9.54366V65.4484C183 70.5943 178.828 74.7659 173.682 74.7659H21.9785C13.8779 74.7659 9.63588 65.1421 15.1008 59.1626L66.1943 3.25782Z"
                        fill="#FFA503"
                      />
                      <path
                        d="M102.366 51.7544L98.3921 47.7801"
                        stroke="white"
                        strokeWidth="2.81027"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M125.119 23.7851C120.872 23.3131 105.434 22.9778 100.379 41.8186L108.328 49.7673C127.032 44.5758 126.796 29.2622 126.361 25.0271C126.333 24.7073 126.192 24.4079 125.965 24.1809C125.738 23.9539 125.439 23.8138 125.119 23.7851Z"
                        stroke="white"
                        strokeWidth="2.81027"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M107.645 29.0634L99.075 29.8334C98.8621 29.8498 98.6563 29.917 98.4747 30.0294C98.2932 30.1417 98.1413 30.296 98.0317 30.4792L92.6415 38.9247C92.514 39.126 92.4397 39.3564 92.4257 39.5943C92.4117 39.8322 92.4584 40.0698 92.5615 40.2847C92.6646 40.4995 92.8206 40.6847 93.015 40.8226C93.2093 40.9606 93.4355 41.0468 93.6724 41.0733L100.379 41.8185"
                        stroke="white"
                        strokeWidth="2.81027"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M121.108 42.3278L120.313 51.0713C120.296 51.2842 120.229 51.49 120.117 51.6715C120.004 51.8531 119.85 52.005 119.667 52.1146L111.221 57.5048C111.02 57.6323 110.79 57.7066 110.552 57.7206C110.314 57.7346 110.076 57.6879 109.861 57.5848C109.647 57.4817 109.461 57.3256 109.323 57.1313C109.185 56.937 109.099 56.7108 109.073 56.4739L108.328 49.7672"
                        stroke="white"
                        strokeWidth="2.81027"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M114.786 35.3603C115.609 36.1834 116.944 36.1834 117.767 35.3603C118.59 34.5372 118.59 33.2026 117.767 32.3795C116.944 31.5564 115.609 31.5564 114.786 32.3795C113.963 33.2026 113.963 34.5372 114.786 35.3603Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="py-10 sm:py-20 relative overflow-hidden">
                    <h1 className="Rubik-Medium text-left pt-20 text-2xl">
                      Trade with any of the following Coins
                    </h1>
                    <div className="flex">
                      <img src="/bitcoin-(btc).svg" />
                      <img src="/binance-coin-(bnb).svg" />
                      <img src="/ethereum-classic-(etc).svg" />
                      <img src="/litecoin(ltc).svg" />
                      <img src="/solana-(sol).svg" />
                      <img src="/trontron-(trx).svg" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0  overflow-hidden object-contain">
                  <div className="bg-black/40 sm:bg-black/0 w-full h-full absolute z-10 "></div>
                  <div className="bg-gradient-to-r from-black to-[#fff0] w-[100px]  h-full absolute  -left-10 z-10  "></div>
                  <img src={image} alt="Upload" height="600" width="600" className="relative opacity-95 object-fill" />
                  <div className="bg-gradient-to-t from-black to-[#00000000] w-full  h-[200px] absolute  bottom-0 "></div>
                  <div className="bg-gradient-to-b from-black to-[#00000000] w-full  h-[150px] absolute  top-0 "></div>
                </div>
              </div>
            </div>
          )
        }
        `,
      },
      {
        component: <HeroSection2 />,
        jsx: `  <div className="relative min-h-screen w-full ">
        <div className="absolute inset-0 -z-0 opacity-90 w-full min-h-screen">
          
          <img src="/background.png" className="object-cover w-full h-full"   alt="Background" />
        </div>
  
        <div className=" relative z-10 flex h-full w-full justify-between px-10  py-10 ">
          <section className="flex   flex-col items-center justify-center  ">
            <div className="relative w-full max-w-2xl">
              <h1 className="joyride flex flex-col text-left font-mono text-6xl font-bold">
                NFT that are Out of this
                <span className="flex items-center">
                  world
                  <div className="">
                    <img src="/KEEPSMILING.png" width="60" height="60" alt="keep" />
                  </div>
                </span>
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="outerSans py-12 text-left">
  
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nostrum, ab
                perspiciatis, illo laudantium libero quo praesentium eveniet quae saepe deserunt
                aliquid ducimus quibusdam. Veniam earum perspiciatis laudantium rem cupiditate.
              </p>
            </div>
            <div className="outerSans relative flex w-full flex-wrap  justify-around">
              <button className="relative flex h-10 w-32 items-center justify-center ">
                <div className=" absolute  sm:h-16 sm:w-48 h-10 w-36 skew-x-[23deg] items-center justify-center  bg-gradient-to-r from-[#B1D26F]  to-[#60E7CE]	"></div>
                <h1 className="absolute z-10  text-xl sm:text-2xl font-bold text-black ">Explore</h1>
              </button>
              <button className=" text-xl sm:text-2xl ml-1 font-bold ">Learn more</button>
            </div>
          </section>
          <div className="relative hidden  flex-col items-center xl:flex">
            <div className="relative hidden md:block ">
              <img src="/nft.png" alt="nft" />
            </div>
            <div className="hidden absolute bottom-28 lg:flex  h-20 lg:text-xs  items-center rounded bg-black/60 filter backdrop-blur-md lg:px-3 xl:px-6 ">
              <div className="mx-4">
                <div className="outerSans grid grid-cols-2">
                  <h1 className="mr-2">Current Bid</h1>
                  <h1>Ends In</h1>
                </div>
                <div className="joyride grid grid-cols-2 ">
                  <h1>0.99eth</h1>
                  <h1>25 HRS</h1>
                </div>
              </div>
              <button className="outerSans  rounded bg-gradient-to-r  from-[#B1D26F] to-[#60E7CE] px-7 py-3 text-black">
                Start Bid
              </button>
            </div>
          </div>
        </div>
        <div className="container relative z-50 mx-auto flex flex-col py-10">
          <h1 className="joyride text-3xl text-center">Our Partners</h1>
          <div className="flex flex-wrap items-center justify-center py-4">
            <img src="/binance 1.svg" className="px-5 py-2" />
            <img src="/bitmex 1.svg" className="px-5 py-2" />
            <img src="/blockport 1.svg" className="px-5 py-2" />
            <img src="/coinbase 1.svg" className="px-5 py-2" />
          </div>
        </div>
      </div>
        `,
      },
      {
        component: <HeroSection3 />,
        jsx: `  <div className="relative min-h-screen w-full ">
        <div className="absolute inset-0 -z-0 opacity-90 w-full min-h-screen">
          
          <img src="/background.png" className="object-cover w-full h-full"   alt="Background" />
        </div>
  
        <div className=" relative z-10 flex h-full w-full justify-between px-10  py-10 ">
          <section className="flex   flex-col items-center justify-center  ">
            <div className="relative w-full max-w-2xl">
              <h1 className="joyride flex flex-col text-left font-mono text-6xl font-bold">
                NFT that are Out of this
                <span className="flex items-center">
                  world
                  <div className="">
                    <img src="/KEEPSMILING.png" width="60" height="60" alt="keep" />
                  </div>
                </span>
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="outerSans py-12 text-left">
  
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nostrum, ab
                perspiciatis, illo laudantium libero quo praesentium eveniet quae saepe deserunt
                aliquid ducimus quibusdam. Veniam earum perspiciatis laudantium rem cupiditate.
              </p>
            </div>
            <div className="outerSans relative flex w-full flex-wrap  justify-around">
              <button className="relative flex h-10 w-32 items-center justify-center ">
                <div className=" absolute  sm:h-16 sm:w-48 h-10 w-36 skew-x-[23deg] items-center justify-center  bg-gradient-to-r from-[#B1D26F]  to-[#60E7CE]	"></div>
                <h1 className="absolute z-10  text-xl sm:text-2xl font-bold text-black ">Explore</h1>
              </button>
              <button className=" text-xl sm:text-2xl ml-1 font-bold ">Learn more</button>
            </div>
          </section>
          <div className="relative hidden  flex-col items-center xl:flex">
            <div className="relative hidden md:block ">
              <img src="/nft.png" alt="nft" />
            </div>
            <div className="hidden absolute bottom-28 lg:flex  h-20 lg:text-xs  items-center rounded bg-black/60 filter backdrop-blur-md lg:px-3 xl:px-6 ">
              <div className="mx-4">
                <div className="outerSans grid grid-cols-2">
                  <h1 className="mr-2">Current Bid</h1>
                  <h1>Ends In</h1>
                </div>
                <div className="joyride grid grid-cols-2 ">
                  <h1>0.99eth</h1>
                  <h1>25 HRS</h1>
                </div>
              </div>
              <button className="outerSans  rounded bg-gradient-to-r  from-[#B1D26F] to-[#60E7CE] px-7 py-3 text-black">
                Start Bid
              </button>
            </div>
          </div>
        </div>
        <div className="container relative z-50 mx-auto flex flex-col py-10">
          <h1 className="joyride text-3xl text-center">Our Partners</h1>
          <div className="flex flex-wrap items-center justify-center py-4">
            <img src="/binance 1.svg" className="px-5 py-2" />
            <img src="/bitmex 1.svg" className="px-5 py-2" />
            <img src="/blockport 1.svg" className="px-5 py-2" />
            <img src="/coinbase 1.svg" className="px-5 py-2" />
          </div>
        </div>
      </div>
        `,
      },
      {
        component: <HeroSection4 />,
        jsx: `  <div className="relative min-h-screen w-full ">
        <div className="absolute inset-0 -z-0 opacity-90 w-full min-h-screen">
          
          <img src="/background.png" className="object-cover w-full h-full"   alt="Background" />
        </div>
  
        <div className=" relative z-10 flex h-full w-full justify-between px-10  py-10 ">
          <section className="flex   flex-col items-center justify-center  ">
            <div className="relative w-full max-w-2xl">
              <h1 className="joyride flex flex-col text-left font-mono text-6xl font-bold">
                NFT that are Out of this
                <span className="flex items-center">
                  world
                  <div className="">
                    <img src="/KEEPSMILING.png" width="60" height="60" alt="keep" />
                  </div>
                </span>
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="outerSans py-12 text-left">
  
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nostrum, ab
                perspiciatis, illo laudantium libero quo praesentium eveniet quae saepe deserunt
                aliquid ducimus quibusdam. Veniam earum perspiciatis laudantium rem cupiditate.
              </p>
            </div>
            <div className="outerSans relative flex w-full flex-wrap  justify-around">
              <button className="relative flex h-10 w-32 items-center justify-center ">
                <div className=" absolute  sm:h-16 sm:w-48 h-10 w-36 skew-x-[23deg] items-center justify-center  bg-gradient-to-r from-[#B1D26F]  to-[#60E7CE]	"></div>
                <h1 className="absolute z-10  text-xl sm:text-2xl font-bold text-black ">Explore</h1>
              </button>
              <button className=" text-xl sm:text-2xl ml-1 font-bold ">Learn more</button>
            </div>
          </section>
          <div className="relative hidden  flex-col items-center xl:flex">
            <div className="relative hidden md:block ">
              <img src="/nft.png" alt="nft" />
            </div>
            <div className="hidden absolute bottom-28 lg:flex  h-20 lg:text-xs  items-center rounded bg-black/60 filter backdrop-blur-md lg:px-3 xl:px-6 ">
              <div className="mx-4">
                <div className="outerSans grid grid-cols-2">
                  <h1 className="mr-2">Current Bid</h1>
                  <h1>Ends In</h1>
                </div>
                <div className="joyride grid grid-cols-2 ">
                  <h1>0.99eth</h1>
                  <h1>25 HRS</h1>
                </div>
              </div>
              <button className="outerSans  rounded bg-gradient-to-r  from-[#B1D26F] to-[#60E7CE] px-7 py-3 text-black">
                Start Bid
              </button>
            </div>
          </div>
        </div>
        <div className="container relative z-50 mx-auto flex flex-col py-10">
          <h1 className="joyride text-3xl text-center">Our Partners</h1>
          <div className="flex flex-wrap items-center justify-center py-4">
            <img src="/binance 1.svg" className="px-5 py-2" />
            <img src="/bitmex 1.svg" className="px-5 py-2" />
            <img src="/blockport 1.svg" className="px-5 py-2" />
            <img src="/coinbase 1.svg" className="px-5 py-2" />
          </div>
        </div>
      </div>
        `,
      },
      {
        component: <HeroSection />,
        jsx: ` <div className="container mx-auto flex flex-col items-center justify-center rounded-md bg-white">
        <section className="flex flex-col text-center">
          <h1 className="max-w-xl text-6xl font-bold text-black">
            Beautiful Doodles to Tell Your Story
          </h1>
          <p className="text-xl text-gray-600">
            Beautiful Doodles to Tell Your Story
          </p>
        </section>
  
        {/* button section  */}
        <section className=" flex justify-around">
          <button className="mx-1 flex items-center justify-center rounded-lg bg-indigo-600   px-8 py-3 text-lg ">
            Download
          </button>
          <button className="mx-1 flex items-center justify-center rounded-lg border border-black px-8 py-3 text-lg  text-black ">
            Download
          </button>
        </section>
  
        <div>
          <img
            src="Amigos Work Space.png"
            alt="image"
            width="100%"
            height="100%"
          />
        </div>
      </div>
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
        jsx: `import { useState } from 'react'

        export default function VerticalTab() {
          const data = [
            {
              title: 'Item One',
              data: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
              title: 'Item two',
              data: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
            },
          ]
          const [tab, setTab] = useState(data[0].title)
        
          const filterdata = data.filter((e) => e.title === tab)
          const active = filterdata[0].title
        
          return (
            <div className=" flex h-60 bg-black rounded-xl">
              <div className=" flex flex-col mt-5">
                {data.map((n, index) => {
                  return (
                    <button
                      onClick={() => setTab(n.title)}
                      className={ $ {
                        active === n.title
                          ? 'text-blue-400 border-r-blue-400 border-r-2 max-w-full transition-all  duration-200 ease-in-out'
                          : ''
                      }  px-10 py-5 }
                      key={index}
                    >
                      {n.title}
                    </button>
                  )
                })}
              </div>
              <div className=" pt-4 px-4 max-w-xs">
                {filterdata.map((n, index) => {
                  return <div key={index}>{n.data}</div>
                })}
              </div>
            </div>
          )
        }
        
          `,
      },
      {
        component: <TabSection />,
        jsx: ` 
        export default function TabSection() {
          const data = [
            {
              title: 'Item One',
              data: 'lorem ipsum dolor sit amet, consectetur adip',
            },
            {
              title: 'Item two',
              data: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
            },
          ]
          const [tab, setTab] = useState(data[0].title)
        
          const filterdata = data.filter((e) => e.title === tab)
          const active = filterdata[0].title
        
          return (
            <div className="h-60 bg-black max-w-xs mx-2 sm:w-[20rem] rounded-xl">
      <div className="px-10 flex justify-between">
        {data.map((n, index) => {
          return (
            <button
              onClick={() => setTab(n.title)}
              className={ $ {
                active === n.title
                  ? 'text-blue-400 border-b-blue-400 border-b-2 transition-all  duration-200 ease-in-out'
                  : ''
              } w-[110px] py-2 }
              key={index}
            >
              {n.title}
            </button>
          )
        })}
      </div>

      <div className="pt-4 px-4">
        {filterdata.map((n, index) => {
          return <div key={index}>{n.data}</div>
        })}
      </div>
    </div>

          )
        }
        `,
      },
    ],
  },
  {
    url: '/components/',
    title: 'Card',
    urlTitle: 'card',
    store: [
      {
        component: <Card10 />,
        jsx: `  <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>`,
      },
      {
        component: <Card8 />,
        jsx: `    <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
        <div>
          <img
            src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
            alt="test"
            width="300"
            height="300"
            className="rounded-t-xl w-full"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>`,
      },
      {
        component: <Card7 />,
        jsx: `<div className="w-60 h-60 rounded-xl">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
          <h1 className="font-bold  font-mono  text-xl">Available soon</h1>
        </div>
      </div>`,
      },
      {
        component: <Card9 />,
        jsx: `import  { useState } from 'react'

        export default function Card() {
          const [play, setPlay] = useState(false)
          return (
            <div className="border  w-[350px] glass rounded-xl flex">
              <img
                src="https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g"
                alt="music"
                width="150"
                height="150"
                className="rounded-2xl p-2"
              />
        
              <div className="px-4 py-4 ">
                <div className="font-outerSans py-3">
                  <h1>Toxic</h1>
                  <p className="text-xs">BoyWithUke</p>
                </div>
                <div className="flex w-full justify-evenly  ">
                  <button className="fill-[#ffffff4d] mx-2 border rounded-full border-gray-500 p-1">
                    <svg
                      width="30"
                      height="30"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="FastRewindRoundedIcon"
                    >
                      <path d="M11 16.07V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.56.4-.56 1.24 0 1.63l5.77 4.07c.67.47 1.58 0 1.58-.81zm1.66-3.25 5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z"></path>
                    </svg>
                  </button>
        
                  <button
                    className="fill-white border rounded-full border-gray-500 p-1"
                    onClick={() => setPlay(!play)}
                  >
                    {play === true ? (
                      <svg
                        width="30"
                        height="30"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PlayArrowRoundedIcon"
                      >
                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                      </svg>
                    ) : (
                      <svg
                        width="30"
                        height="30"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PauseRoundedIcon"
                      >
                        <path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"></path>
                      </svg>
                    )}
                  </button>
        
                  <button className="fill-[#ffffff4d] mx-2  border rounded-full border-gray-500 p-1">
                    <svg
                      width="30"
                      height="30"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="FastForwardRoundedIcon"
                    >
                      <path d="m5.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )
        }`,
      },

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
        jsx: `<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
              <p>icon</p>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem ipsum</h6>
            <div className="mb-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
              <p>icon</p>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem</h6>
            <div className="mb-2 text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing
            </div>
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
              <p>icon</p>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem ipsum</h6>
            <div className="mb-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
              <p>icon</p>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem ipsum</h6>
            <div className="mb-2 text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing{' '}
            </div>
          </div>
        </div>
      </div>`,
      },
    ],
  },
  {
    url: '/components/',
    title: 'Modal',
    urlTitle: 'modal',
    store: [
      {
        component: <Modal />,
        jsx: `<import { useState } from 'react'

          export default function Modal() {
            const [isModalOpen, setModalOpen] = useState(false)
          
            return (
              <div className=" flex flex-col">
                <button className="bg-white/20 p-3 rounded-xl" onClick={() => setModalOpen(true)}>
                  click me
                </button>
                <>
                  {isModalOpen ? (
                    <div
                      className="fixed z-50 inset-0 overflow-y-auto"
                      aria-labelledby="modal-title"
                      role="model"
                      aria-modal="true"
                    >
                      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                          className="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity"
                          aria-hidden="true"
                        ></div>
          
                        <span
                          className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
          
                        <div className="inline-block align-bottom bg-white dark:bg-black/80 dark:text-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                          <div className="bg-white dark:bg-black/80 dark:text-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 " id="modal-title">
                                  Lorem ipsum
                                </h3>
                                <div className="mt-2">
                                  <p className="text-sm text-gray-500 dark:bg-black/80 dark:text-white">
                                    dolor sit amet consectetur adipisicing elit. Corporis atque beatae
                                    exercitationem. Eligendi sit excepturi harum necessitatibus. Veritatis
                                    sequi nemo corporis, autem, itaque quae debitis error laboriosam
                                    recusandae optio ea!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 dark:bg-black/80 dark:text-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
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
                    ''
                  )}
                </>
              </div>
            )
          }
          `,
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

        jsx: `<footer className="py-6 bg-black w-full">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <a href="#" className="flex justify-center space-x-3 md:justify-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/30">
                  Logo
                </div>
                <span className="self-center text-2xl font-semibold">Brand name</span>
              </a>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Category</p>
              <ul>
                <li>
                  <a href="#" className="hover:dark:text-gray-400">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:dark:text-gray-400">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:dark:text-gray-400">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:dark:text-gray-400">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:dark:text-gray-400">
                    Link
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Category</p>
              <ul>
                <li>
                  <a href="#" className="hover:dark:text-gray-400">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:dark:text-gray-400">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:dark:text-gray-400">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:dark:text-gray-400">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:dark:text-gray-400">
                    Link
                  </a>
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
              <a
                href="#"
                title="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>
              <a
                href="#"
                title="Twitter"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                </svg>
              </a>
              <a
                href="#"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
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
    <button className="relative z-0 rounded bg-pink-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-pink-700 after:transition-[all_0.3s_ease]  hover:after:w-full ">
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
