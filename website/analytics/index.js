import GA from './GoogleAnalytics'

const isProduction = process.env.NODE_ENV === 'production'

const googleAnalyticsID = 'G-Q96NMRGWX1'


const Analytics = () => {
  return (
    <>
      {isProduction && googleAnalyticsID && <GA />}
    </>
  )
}

export default Analytics
