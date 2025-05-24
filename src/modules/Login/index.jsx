import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className=" m-0 sm:m-10 bg-neutral-100 shadow sm:rounded-lg flex justify-center flex-1 font-mons">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-5xl xl:text-4xl font-medium">Login to <span className="font-ultra text-secondary">storePedia</span></h1>
          <div className="w-full flex-1 mt-8">
            <div className="mx-auto max-w-xs">
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="peer mt-2 w-full bg-transparent border-b-2  border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="NA"
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 bg-transparent transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-secondary"
                >
                  Email Address
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="peer peer mt-2 w-full bg-transparent border-b-2  border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-secondary"
                >
                  Password
                </label>
              </div>
              <div className="flex items-center justify-between mt-8 text-secondary">
                <Link to={'../Home'} type="submit" className="btn flex items-center justify-center px-8 py-3 border border-black text-base font-normal rounded-md text-black hover:bg-secondary hover:text-primary md:py-4 md:text-lg md:px-10">
                  Log In
                </Link>
                <link href='{"/forget-password"}' className="font-normal text-red-500" />
                Forgot Password?
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center space-x-2 w-80 mt-4">
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
            <span className="flex-none uppercase text-md text-gray-900 mt-4 font-semibold">or</span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
          </div>
          <div className="mt-4 w-full flex flex-col items-center  gap-3">
            <button className="btn btn-outline w-full flex items-center justify-start pl-14 bg-white border border-gray-800 rounded-md shadow-sm max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:border-blue-700">
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" version="1.1">
                <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g id="Color-" transform="translate(-401.000000, -860.000000)">
                    <g id="Google" transform="translate(401.000000, 860.000000)">
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      >
                        {"{"}" "{"}"}
                      </path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      >
                        {"{"}" "{"}"}
                      </path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      >
                        {"{"}" "{"}"}
                      </path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      >
                        {"{"}" "{"}"}
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
              <span>Continue with Google</span>
            </button>
            <button className="btn btn-outline w-full flex items-center justify-start pl-14 bg-white border border-gray-800 rounded-md shadow-sm max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:border-blue-700">
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" version="1.1">
                <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
                    <path
                      d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                      id="Facebook"
                    />
                  </g>
                </g>
              </svg>
              <span>Continue with Facebook</span>
            </button>
            <button className="btn btn-outline w-full flex items-center justify-start pl-14 gap-2 bg-white border border-gray-800 rounded-md shadow-sm max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:border-blue-700">
              <svg width={22} height={16} viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.34608 0.224481C9.10854 -0.0748269 12.8924 -0.0748269 16.6548 0.224481L18.4676 0.368118C19.6743 0.463502 20.7079 1.12134 21.2434 2.06202C21.3119 2.18152 21.2605 2.32731 21.1343 2.39858L13.6133 6.65137C12.0003 7.56355 9.96627 7.58331 8.33303 6.70183L0.761779 2.61458C0.639468 2.5488 0.583296 2.41285 0.63839 2.29335C1.12835 1.22987 2.22975 0.471176 3.53327 0.368118L5.34608 0.224481Z"
                  fill="#5A5A5A"
                />
                <path
                  d="M0.631802 4.45556C0.444556 4.35469 0.205696 4.46324 0.18397 4.66059C-0.120666 7.41904 -0.046967 10.2027 0.405066 12.948C0.643325 14.3952 1.93653 15.5047 3.53293 15.6319L5.34562 15.7755C9.10808 16.0748 12.8919 16.0748 16.6544 15.7755L18.4672 15.6319C20.0634 15.5047 21.3566 14.3952 21.5949 12.948C22.0601 10.1227 22.1246 7.25678 21.7885 4.41939C21.7649 4.22094 21.5221 4.11349 21.3356 4.21984L14.5606 8.05053C12.3782 9.28394 9.62636 9.31026 7.41661 8.11741L0.631802 4.45556Z"
                  fill="#5A5A5A"
                />
              </svg>
              <span>Continue with Email</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-bg text-center hidden lg:flex rounded-md">
        <div
          className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat "
          style={{
            backgroundImage: 'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
          }}
        />
      </div>
    </div>
  );
};

export default Login;
