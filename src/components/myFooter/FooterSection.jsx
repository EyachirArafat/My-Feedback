import React from 'react';
import Container from '../common/Container';
import { FooterData } from '../../lib/data/apiData';
import { NavLink } from 'react-router-dom';

const FooterSection = () => {
  const languages = ['English', 'Spanish', 'French'];
  const countries = ['United States', 'Singapour', 'France', 'Kuala lumpur'];

  return (
    <div className='border-t-2'>
      <Container className="xl:px-[337px] lg:px-[250px] md:px-[100px] sm:px-10 px-4 py-6 sm:py-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {FooterData.map((section, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold text-txtP">{section.header}</h3>
            {section.link.map((item, linkIndex) => (
              <NavLink
              key={linkIndex}
              to={`/${item
                ?.toLowerCase()
                .replace(/[^a-z0-9\s]/g, "")
                .replace(/\s+/g, "-")}`}
              className="block text-sm text-txtS hover:font-bold hover:text-bgP transition"
            >
              {item}
            </NavLink>
            
            ))}
          </div>
        ))}
        
        <div className="space-y-4">
          <div>
            <label htmlFor="language" className="block text-lg font-semibold text-txtP">
              Language
            </label>
            <select
              id="language"
              className="mt-1 cursor-pointer text-sm text-txtS"
            >
              {languages.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="country" className="block text-lg font-semibold text-txtP">
              Country
            </label>
            <select
              id="country"
              className="mt-1 cursor-pointer text-sm text-txtS"
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      </Container>
        <div className='text-center font-semibold text-sm font-roboto pb-4 px-2'>
          <p>Copyright &copy; {new Date().getFullYear()} myfeedback, designed by <span className='text-xl text-indigo-500'>EK</span></p>
        </div>
    </div>
    
  );
};

export default FooterSection;


