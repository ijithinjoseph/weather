(()=>{"use strict";
let e={city:"",temperature:"",condition:"",feelslike:"",visibility:"",humidity:"",pressure:""};
const t=document.querySelector("[data-forecast-city-name]"),
      r=document.querySelector("[data-forecast-city-temperature]"),
      i=document.querySelector("[data-forecast-city-condition]"),
      c=document.querySelector("[data-forecast-city-feelslike]"),
      o=document.querySelector("[data-forecast-city-visibility]"),
      a=document.querySelector("[data-forecast-city-humidity]"),
      n=document.querySelector("[data-forecast-city-pressure]"),
      s=document.querySelector("[data-blur-section]"),
      u=document.querySelector("[data-blur-section2]"),
      d=document.querySelector("[data-form-search]"),
      l=document.querySelector("[data-form-input]");
function y(e){1==e?(s.classList.add("blurred"),
    u.classList.add("blurred")):(s.classList.remove("blurred"),
    u.classList.remove("blurred"))}d.addEventListener("submit",
    (function(s){s.preventDefault(),y(!0),
        l.classList.contains("error")&&l.classList.remove("error"),
        async function(t){const r=`https://api.weatherapi.com/v1/forecast.json?key=007e6da3a17d467294b71246240404&q=${t}&days=1&aqi=no&alerts=no`;
        try {
            const t=await fetch(r);
            if(!t.ok)
                throw new Error("Network error");
                const i=await t.json();
                return e={city:i.location.name,temperature:i.current.temp_c,condition:i.current.condition.text,feelslike:i.current.feelslike_c,visibility:i.current.vis_km,humidity:i.current.humidity,pressure:Math.round(33.8639*i.current.pressure_in)},e
            }
            catch(e)
            {
                console.error("There was a problem: ",e)
            }}
            (l.value).then((e=>{t.innerText=e.city,r.innerText=`${e.temperature}°`,i.innerText=e.condition,c.innerText=`${e.feelslike}°`,o.innerText=`${e.visibility} km`,a.innerText=`${e.humidity}%`,n.innerText=`${e.pressure} hPa`,y(!1)})).catch((e=>{console.error(e),l.classList.add("error"),y(!0)}))})),y(!0)})();