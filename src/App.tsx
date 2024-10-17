import './App.css'
//import BannerSlider from './Components/Banner';
import Header from './Components/Header';
import FeaturesSection from './Components/Blessingplan';
import Promises from './Components/Promise';
import  Testimonials from './Components/Testimonies';
import Footer from './Components/Footer';
import PrayerMeetings from './Components/Meetings';
import LatestSongs from './Components/songs';
import VideoBackgroundSection from './Components/VideoBackgroundSection';
function App() {
  

  return (
    <>
      <div>
        <Header />
        <VideoBackgroundSection />
        {/*<BannerSlider />*/}
        <LatestSongs />
        <Promises />
        <FeaturesSection />
        <Testimonials />
        <PrayerMeetings />
        <Footer />
        
      </div>
    </>
  )
}

export default App
