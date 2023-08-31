import { getRoutes } from './getRoutes'
function App() {
  const allPages = getRoutes()
  return (
    <>
      {allPages}
    </>
  )
}

export default App
