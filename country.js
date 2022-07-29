const data = [
    {
      country: 'US',
      languages: ['en'],
    },
    {
      country: 'BE',
      languages: ['nl', 'fr', 'de'],
    },
    {
      country: 'NL',
      languages: ['nl'],
    },
    {
      country: 'DE',
      languages: ['de'],
    },
    {
      country: 'ES',
      languages: ['es'],
    },
  ];
  
  //returns the number of countries in the world
  function countCountry() {
    let numberOfCountry = data.map((c) => c.country).length;
    return numberOfCountry;
  }


  //finds the country with the most official languages, where they officially speak German
  function mostLanguagesGerman() {
    let country = '';
    let numberLanguages = 0;
    data.forEach((element) => {
      if (element.languages.indexOf('de') > -1) {
        if (element.languages.length > numberLanguages) {
          country = element.country;
          numberLanguages = element.languages.length;
        }
      }
    });
  
    return country;
  }
  
  //to find the country with the highest number of official languages
  function highestNumberLanguages() {
    let country = '';
    let languages = 0;
    data.forEach((element) => {
      if (element.languages.length > languages) {
        country = element.country;
        languages = element.languages.length;
      }
    });
  
    let infoCountry = {
      country,
      languages,
    };
  
    return infoCountry;
  }
  
  //to find the most common official language(s), of all countries
  function countryMoreLanguages() {
    const arrayLanguages = [];
  
    data.forEach((country) => {
      country.languages.forEach((lang) => {
        arrayLanguages.push(lang);
      });
    });
  
    const counts = {};
  
    arrayLanguages.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
  
    let max = Object.entries(counts).reduce((max, entry) =>
      entry[1] >= max[1] ? entry : max
    );
  
    return max;
  }


  console.log(countryMoreLanguages());
  



 