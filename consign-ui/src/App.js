import './App.css';
import { Button } from './components/buttons/PrimaryButton'
import { Container } from './components/layout/Container'
import Logo from './assets/landing.png'
import WaveBottom from './assets/Bottom.png'
import ContentWaveBottom from './assets/ContentBottom.png'
import ContentWaveTop from './assets/ContentTop.png'
import Package from './assets/Packages.png'
import InfiniteScroll from 'react-infinite-scroller';



function App() {
  return (
    <Container primary width="100%" height="100vh">
      <InfiniteScroll hasMore={false} style={{ height: '100%' }}>
        <img src={WaveBottom} width="100%" height="20%" />
        <Container primary width="100%" height="100%" bg="white" display="flex" justify="space-around" align="center">
          <Container>
            <h1 style={{ fontSize: 'x-large', fontFamily: 'Graphik,sans-serif' }}>Smart way of sending Parcels <br></br><span style={{ fontSize: 'xxx-large', color: '#28ca3d' }}>Consign </span></h1>
            <p>The fastest parceling system around the globe</p>
            <Container>
              <Button bg="#28ca3d" color="white" shadow="3px 4px 5px 0px #a5a398"> Login </Button>
              <Button bg="#28ca3d" color="white" shadow="3px 4px 5px 0px #a5a398"> Track </Button>
            </Container>
          </Container>
          <img src={Logo} width="30%" />
        </Container>
        <Container primary width="100%" height="50%" bg="white" display="flex" justify="space-evenly" align="center" style={{ flexDirection: 'column', marginBottom: '8rem' }} >
          <h2 style={{color:'#28ca3d'}}>Why consign ? </h2>
          <img src={ContentWaveTop} height="20%" style={{ alignSelf: 'flex-end', marginRight: '2rem', marginTop: '10px' }}></img>
          <p style={{ margin: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel velit tempor, egestas mauris at, lacinia nunc. Fusce elementum diam sit amet ultrices dapibus. Cras at dapibus purus. Sed ac maximus arcu, quis maximus diam. In ultricies lacus eget tortor ultricies, vitae rutrum turpis luctus. Nulla at ante vitae eros hendrerit mattis sit amet ut est. Proin eu urna ex. Mauris auctor, augue a convallis suscipit, sem sapien luctus magna, eget varius velit augue ut orci. Maecenas libero felis, vestibulum ut aliquam a, egestas non tortor.
          Aenean placerat tincidunt consequat. Vivamus vestibulum laoreet urna, et tempus eros volutpat vel. Pellentesque et neque egestas, finibus velit ut, facilisis nibh. Sed magna risus, porta sit amet tempus in, ullamcorper vel erat. Sed laoreet risus ut posuere mollis. Cras et sapien justo. Donec molestie ipsum sed arcu convallis egestas. Proin convallis ullamcorper porta. Nulla quis porttitor arcu. Curabitur dignissim in augue vel pharetra.
      </p>
          <img src={ContentWaveBottom} height="20%" style={{ alignSelf: 'baseline', marginLeft: '2rem', marginTop: '0px' }}></img>
        </Container>
        <Container primary width="100%" height="50%" bg="white" display="flex" justify="space-evenly" align="center" style={{ flexDirection: 'column', marginBottom: '8rem',marginTop:'20rem' }} >
          <h2 style={{color:'#28ca3d'}}>Track Consignments </h2>
          <Container display="flex">
            <img src={Package} height="40%" style={{ alignSelf: 'baseline', marginLeft: '2rem', marginTop: '0px' }}></img>
            <div>
              <h1>Enter tracking code here.</h1>
            </div>
          </Container>
           
        </Container>
        <Container style={{ marginTop: '3rem' }} primary height="5%" bg="black" display="flex" justify="space-evenly" align="flex-start" style={{ flexDirection: 'column', borderTop: "5px solid #ECFF19", paddingLeft: '2rem' }}>
          <p style={{ color: 'white', fontSize: 'small' }}>Copyrights Reserved @2021 </p>
        </Container>

      </InfiniteScroll>
    </Container>
  );
}

export default App;
