import { useEffect, useRef, useState } from "react";
import classes from "./MainPageHeader.module.scss";
import Image from "next/image";
import SearchInput from "../../../ui/SearchInput";
import axios from "axios";
import Navbar from "../Navbar";
import MenuButton from "../../../ui/MenuButton";
import MobileNavigationSection from "../MobileNavigationSection";
import SideNavigation from "../SideNavigation";
import MobileHeaderSection from "../MobileHeaderSection";
import ShowInputButton from "../../../ui/ShowInputButton";
import SubsLoginBtns from "../../../ui/SubsLoginBtns";
const MainPageHeader = ({
  showSideNavDesktop,
  setshowSideNavDesktop,
  sections,
  setLoading,
}) => {
  // state of search input visibility
  const [showSearchInput, setShowSearchInput] = useState(false);
  //input reference
  const searchInputRef1 = useRef();
  const searchInputRef2 = useRef();

  // mobile navigation
  const [ShowMobileNavigation, setShowMobileNavigation] = useState(false);
  // weather data
  const [weatherData, setweatherData] = useState();
  // fetching weather data
  useEffect(() => {
    const baseUrlLoc = `https://api.bigdatacloud.net/data/ip-geolocation?ip=160.176.117.44&localityLanguage=en&key=bdc_59e5045d7142441285371c0cdf4f75e7	`;
    async function getUserLocation() {
      try {
        const { data } = await axios.get(baseUrlLoc);
        const { latitude, longitude } = data.location;
        return { lat: latitude, lon: longitude };
      } catch (err) {
        console.log(err);
      }
    }

    async function getdata() {
      try {
        const { lon, lat } = await getUserLocation();
        const baseUrlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=815383677fd08e564a844118445203c9&units=metric`;
        const data = await axios.get(baseUrlWeather);

        setweatherData(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getdata();
  }, []);
  // weather info
  const weatherInfo = weatherData?.main;
  const { temp, temp_max, temp_min } = weatherInfo ? weatherInfo : "";
  const weatherIcon = weatherData?.weather[0].icon;
  // today's date
  const todayDate = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header>
      <section className={classes.desktopHeader}>
        <div className={classes.HeadertopSection}>
          <div className={classes.topNavigation}>
            <MenuButton
              showSideNavDesktop={showSideNavDesktop}
              setshowSideNavDesktop={setshowSideNavDesktop}
            />
            <ShowInputButton
              showSearchInput={showSearchInput}
              setShowSearchInput={setShowSearchInput}
            />
            <div className={showSearchInput ? classes.show : classes.hide}>
              <SearchInput
                searchInputRef={searchInputRef1}
                showSearchInput={showSearchInput}
              />
            </div>
          </div>

          <SubsLoginBtns />
        </div>
        <div className={classes.HeaderBottomSection}>
          <div className={classes.dateAndPaperToday}>
            <span className={classes.dateToday}>{todayDate}</span>
            <span className={classes.todaypaperlink}>
              <a>today&apos;s paper</a>
            </span>
          </div>
          <div className={classes.logo}>
            <Image
              src={"/images/NewYorkTimes.svg"}
              alt="newyorktimes logo"
              width={400}
              height={57.14}
            />
            <span>Lite</span>
          </div>
          <div className={classes.financeAndWeather}>
            <div className={classes.sectionWrapper}>
              {weatherData ? (
                <div className={classes.weatherInfo}>
                  <span>
                    <img
                      alt="weathericon"
                      src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
                    />
                  </span>
                  <span>{Math.round(temp)}°C</span>
                  <span>{Math.round(temp_max)}°</span>
                  <span>{Math.round(temp_min)}°</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
      <MobileHeaderSection
        todayDate={todayDate}
        setShowMobileNavigation={setShowMobileNavigation}
      />
      <SideNavigation
        sections={sections}
        showSideNavDesktop={showSideNavDesktop}
        setLoading={setLoading}
      />
      <MobileNavigationSection
        ShowMobileNavigation={ShowMobileNavigation}
        setShowMobileNavigation={setShowMobileNavigation}
        searchInputRef2={searchInputRef2}
        sections={sections}
        setLoading={setLoading}
      />
      <Navbar sections={sections} setLoading={setLoading} />
    </header>
  );
};

export default MainPageHeader;
