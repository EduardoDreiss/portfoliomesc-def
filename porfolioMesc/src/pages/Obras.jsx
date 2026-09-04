import Badge from "../components/Badge"
// import NavbarRoller from "../components/NavbarRoller"
import Footer from "../components/Footer"
import NavbarStdrt from "../components/NavbarStdrt"
import '../styles/Obras.css'
import Carroussel from "../components/Carroussel"


export default function Obras(){
    return(
        <>
        <NavbarStdrt/>
        <main className="mainObras"> 
            {/* <h1>Obras</h1>
            <Carroussel className="carrousselObras"/> */}
        </main>
        <Footer/>
        
        </>
 
    )
}