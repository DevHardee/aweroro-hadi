import PrimaryButton from "./components/PrimaryButton"
import SecondaryButton from "./components/SecondaryButton"

function App() {

  return (
   <div>
      Can we begin now?
      <PrimaryButton
      title="Hi"
      onClick={() => alert('whats up')}
      />

      <SecondaryButton
      title="Nice"
      onClick={() => alert('Work')}/>
   </div>
  )
}

export default App
