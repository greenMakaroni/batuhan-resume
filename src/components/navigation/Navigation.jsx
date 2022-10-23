import MobileNav from "./MobileNav"
import Nav from "./Nav"

// window dimensions hook
import useWindowDimensions from '../../useWindowDimensions';

export default function Navigation() {

    const { height, width } = useWindowDimensions();

  return (
    <>
        { width < 650 ? <MobileNav /> : <Nav /> }
    </>
  )
}
