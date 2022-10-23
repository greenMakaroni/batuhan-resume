import MobileNav from "./MobileNav"
import Nav from "./Nav"

// window dimensions hook
import useWindowDimensions from '../../useWindowDimensions';

// css
import "./navigation.scss"

export default function Navigation() {

    const { height, width } = useWindowDimensions();

  return (
    <>
        { width < 550 ? <MobileNav /> : <Nav /> }
    </>
  )
}
