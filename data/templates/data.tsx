
import Portfolio1 from '../../app/components/template/Portfolio1';
import LandingPage1 from '../../app/components/template/template1/LandingPage1';
import LandingPage2 from '../../app/components/template/template2/LandingPage2';


export const showCode = 
[
    {
      title: "Portfolio",
      url:'/templates/',
      store: [
        {
          title: "Portfolio",
          component: <Portfolio1 />,
          jsx:"yoo",
          html:"yoo",
        },
      ],
    },{
      title: "Landing Page",
      url:'/templates/',
      store: [
        // {
        //   title: "Landing Page",
        //   component: <LandingPage1 />,
        //   jsx:"yoo",
        //   html:"yoo",
        // }, 
        
        {
          title: "Landing Page",
          component: <LandingPage2 />,
          jsx:"yoo",
          html:"yoo",
        },
      ],
    },
  ]