import Hero from '../components/Hero'
import StatisticsWindow from '../components/StatisticsWindow'
import SecretaryGeneralLetter from '../components/SecretaryGeneralLetter'
import AboutSection from '../components/AboutSection'
import CommitteesSection from '../components/CommitteesSection'
import SecretariatSection from '../components/SecretariatSection'
import ScheduleSection from '../components/ScheduleSection'
import RegisterSection from '../components/RegisterSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatisticsWindow />
      <AboutSection />
      <SecretaryGeneralLetter />
      <CommitteesSection />
      <SecretariatSection />
      <ScheduleSection />
      <RegisterSection />
      <Footer />
    </div>
  )
}

export default Home

