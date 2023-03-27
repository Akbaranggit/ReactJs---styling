import React from "react";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";

class Index extends React.Component {
    render() {
        return(
        <div>
            <div className="header">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Akbar Anggit Pambudi</Navbar.Brand>
                <Nav className="me-auto navb">
                    <Nav.Link href="#home">Biografi</Nav.Link>
                    <Nav.Link href="#features">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </div>
            <div className="body">
                <div className="isi-body">
                    <span className="title">Peserta Bootcamp Eduwork</span>
                    <h1 className="nama">Akbar Anggit Pambudi</h1>
                    <span className="linkedin">Linkedin Profile</span>
                </div>
            </div>
            <div className="footer">
                <h1>My Bio</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec sed sem tempor, tincidunt mi id, vehicula enim. 
                    Sed et cursus urna, eget vulputate eros. Nullam pulvinar purus in venenatis dignissim. 
                    Curabitur nec nisi a purus pharetra tempus. Nulla leo nisl, feugiat quis laoreet vitae, 
                    tincidunt eget erat. Quisque nibh mauris, faucibus eu mauris id, tincidunt molestie nisl. 
                    Fusce vel porttitor risus. Quisque luctus felis nec mattis aliquet. Donec dignissim nulla sed tortor faucibus, 
                    et porta tortor mattis. Suspendisse risus risus, tempus ac porta at, 
                    fringilla laoreet mauris. Integer vel augue convallis, 
                    dignissim augue vel, volutpat magna. Morbi suscipit, 
                    tellus at fringilla viverra, dui arcu dapibus dui, 
                    quis accumsan libero urna scelerisque nunc. 
                    Quisque gravida vulputate venenatis. 
                    Donec consequat ex et sapien iaculis, 
                    sit amet scelerisque libero pretium. Donec consectetur orci ornare, 
                    porttitor erat egestas, viverra risus. Etiam eget ipsum ipsum.</p>
            </div>
        </div>
        

        )
    }
}
export default Index;