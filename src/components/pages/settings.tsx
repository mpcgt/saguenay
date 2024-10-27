import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../navigationDiscovery'

export default function Settings() {
  useEffect(() => {
    document.title = 'Settings - Saguenay';
  }, []);
  const { i18n } = useTranslation();

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-neutral-800 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-md mx-auto bg-black rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-lg font-medium leading-6 text-white mb-4">Settings</h1>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <label htmlFor="notifications" className="text-sm font-medium text-white">
              Enable clear mode 🌞 <i>(Coming soon!)</i>
              </label>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input 
                  type="checkbox" 
                  name="notifications" 
                  id="notifications" 
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-black border-4 appearance-none cursor-pointer"
                />
                <label 
                  htmlFor="notifications" 
                  className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                    Notification ? 'bg-gray-500' : 'bg-gray-300'
                  }`}
                ></label>
              </div>
            </div>
                <p className='text-white font-bold text-lg'>Languages <i className='text-xs text-gray-400'>3% total translated pages</i></p>
                <div className='text-center '>
               <button onClick={() => changeLanguage('fr')}><svg className="w-6 h-6" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#f0f0f0" r="256"/><path d="m512 256c0-110.071-69.472-203.906-166.957-240.077v480.155c97.485-36.172 166.957-130.007 166.957-240.078z" fill="#d80027"/><path d="m0 256c0 110.071 69.473 203.906 166.957 240.077v-480.154c-97.484 36.171-166.957 130.006-166.957 240.077z" fill="#0052b4"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg></button>
                <button onClick={() => changeLanguage('en')}><svg className="w-6 h-6" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#f0f0f0" r="256"/><g fill="#d80027"><path d="m244.87 256h267.13c0-23.106-3.08-45.49-8.819-66.783h-258.311z"/><path d="m244.87 122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783h-170.486z"/><path d="m256 512c60.249 0 115.626-20.824 159.356-55.652h-318.712c43.73 34.828 99.107 55.652 159.356 55.652z"/><path d="m37.574 389.565h436.852c12.581-20.529 22.338-42.969 28.755-66.783h-494.362c6.417 23.814 16.174 46.254 28.755 66.783z"/></g><path d="m118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037c-19.106 15.915-35.852 34.561-49.652 55.337h7.475l-13.813 10.035c-2.152 3.59-4.216 7.237-6.194 10.938l6.596 20.301-12.306-8.941c-3.059 6.481-5.857 13.108-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444c-1.301 10.458-1.979 21.11-1.979 31.921h256c0-141.384 0-158.052 0-256-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zm100.115 100.083-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zm0-74.574 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822z" fill="#0052b4"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg></button>
                <button onClick={() => changeLanguage('es')}><svg className="w-6 h-6" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m0 256c0 31.314 5.633 61.31 15.923 89.043l240.077 22.261 240.077-22.261c10.29-27.733 15.923-57.729 15.923-89.043s-5.633-61.31-15.923-89.043l-240.077-22.261-240.077 22.261c-10.29 27.733-15.923 57.729-15.923 89.043z" fill="#ffda44"/><g fill="#d80027"><path d="m496.077 166.957c-36.171-97.484-130.006-166.957-240.077-166.957s-203.906 69.473-240.077 166.957z"/><path d="m15.923 345.043c36.171 97.484 130.006 166.957 240.077 166.957s203.906-69.473 240.077-166.957z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg></button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}