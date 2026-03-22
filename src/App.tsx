import { AlertTriangle, Ban, BellRing, CheckCheck, Info } from 'lucide-react'
import './App.css'
import Alert from './components/Alert'

function App() {

  return (
    <div className='my-4'>
      <Alert backround="bg-neutral-800" color="text-neutral-200" icon={<BellRing />} title='Upgrade your plan' description='Then go to your Vite based project and run pnpm link-- global vite(or the package manager that you used to link vite globally).Now restart the development server to ride on the bleeding edge!' />
      <Alert backround="bg-[#c01d1d26]" color="text-[#ef8d8dfa]" icon={<Ban />} title='Upgrade your plan' description='Then go to your Vite based project and run pnpm link-- global vite(or the package manager that you used to link vite globally).Now restart the development server to ride on the bleeding edge!' />
      <Alert backround="bg-[#f6ee0920]" color="text-[#7acf58d6]" icon={<CheckCheck />} title='Upgrade your plan' description='Then go to your Vite based project and run pnpm link-- global vite(or the package manager that you used to link vite globally).Now restart the development server to ride on the bleeding edge!' />
      <Alert backround="bg-blue-950" color="text-blue-300" icon={<Info />} title='Upgrade your plan' description='Then go to your Vite based project and run pnpm link-- global vite(or the package manager that you used to link vite globally).Now restart the development server to ride on the bleeding edge!' />
      <Alert backround="bg-yellow-900" color="text-yellow-300" icon={<AlertTriangle />} title='Upgrade your plan' description='Then go to your Vite based project and run pnpm link-- global vite(or the package manager that you used to link vite globally).Now restart the development server to ride on the bleeding edge!' />

    </div>
  )
}

export default App
