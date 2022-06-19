import Appbar from '@/Molecules/Appbar'
import Content from '@/Templates/Content'
import Footer from '@/Organisms/Footer'
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
