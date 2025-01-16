import { ReactLenis, useLenis } from 'lenis/react'
import { Routes , Route } from "react-router-dom"
import MainRender from './components/MainRender'
import GreenBandForm from './components/GreenBandForm'


function App() {

  const lenis = useLenis(({ scroll }) => {
  })

  return (
    <ReactLenis root options={
    {
      lerp: 0.05,
      // infinite: true,
      syncTouch: true,
    }
    }>
     <Routes>
      <Route path="/" Component={MainRender} />
      <Route path="/form" Component={GreenBandForm} />
     </Routes>
    </ReactLenis>
  )
}

export default App;
