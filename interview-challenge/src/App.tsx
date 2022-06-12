import Appbar from './components/Molecules/Appbar'
import Content from './components/Templates/Content'
import Footer from './components/Organisms/Footer'
import './App.css'

export default () => {
	return (
		<div className="App">
			<Appbar />
			<Content />
      <Footer />
		</div>
	)
}
