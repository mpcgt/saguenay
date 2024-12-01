import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../navigationDiscovery';

export default function Settings({
  onToggleSensitiveContent = () => {},
}: {
  onToggleSensitiveContent?: (value: boolean) => void;
}) {
  useEffect(() => {
    document.title = 'Settings - Saguenay';
  }, []);

  const { i18n } = useTranslation();
  const [isSensitiveContentVisible, setIsSensitiveContentVisible] = useState<boolean>(false);

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  const toggleSensitiveContent = () => {
    const newValue = !isSensitiveContentVisible;
    setIsSensitiveContentVisible(newValue);
    localStorage.setItem('isSensitiveContentVisible', JSON.stringify(newValue));
    onToggleSensitiveContent(newValue);
  };

  useEffect(() => {
    const savedSetting = localStorage.getItem('isSensitiveContentVisible');
    if (savedSetting) {
      const parsedValue = JSON.parse(savedSetting);
      setIsSensitiveContentVisible(parsedValue);
      onToggleSensitiveContent(parsedValue);
    }
  }, [onToggleSensitiveContent]);

  return (
    <>
      <Navigation />
      <div className="bg-black">
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-md mx-auto bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-lg font-medium leading-6 text-white mb-4">Settings</h1>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label htmlFor="sensitiveContent" className="text-sm font-medium text-white">
                    Enable sensitive content (Violent, +18, insults, etc.) 💀
                  </label>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                      type="checkbox"
                      id="sensitiveContent"
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-black border-4 appearance-none cursor-pointer"
                      checked={isSensitiveContentVisible}
                      onChange={toggleSensitiveContent}
                    />
                    <label
                      htmlFor="sensitiveContent"
                      className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                        isSensitiveContentVisible ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    ></label>
                  </div>
                </div>

                <p className="text-white font-bold text-lg">Languages <i className="text-xs text-gray-400">3% total translated pages</i></p>
                <div className="text-center">
                  <button onClick={() => changeLanguage('fr')}>FR</button>
                  <button onClick={() => changeLanguage('en')}>EN</button>
                  <button onClick={() => changeLanguage('es')}>ES</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
