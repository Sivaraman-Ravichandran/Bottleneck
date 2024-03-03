import React from 'react';
import './App.css'; // You can style your app in App.css

function App() {
  return (
    <div className="App">
    <div className="titleBar">
        <h1>BOTTLENECK BUSTER - Traffic Control Board User Interface</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="imageContainer">
        <div className="imageWithDescription">
          <img src="https://tse1.mm.bing.net/th?id=OIP.9i9XZPEsml3ktis5Jg3BtQHaEZ&pid=Api&P=0&h=180" alt="Image 1" />
          <center>
          <p><b>POTHOLE</b></p>
          <p>Location : Junction 2 of Ward 36</p>
          <p>Description : Large Hole on the MainRoad</p>
          <p>Status : Work on Progress</p>
          <br/>
          </center>
        </div>
        <div className="imageWithDescription">
          <img src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/07/09/Pictures/traffic-congestion_eaf7c93e-64cc-11e7-b1de-0034c3d6ea80.jpg" alt="Image 2" />
          <p><b>ILLEGAL PARKING</b></p>
          <p>Location : Junction 5 of Ward 31</p>
          <p>Description : Vehicles parked on the sideroad</p>
          <p>Status : Reported</p>
          <br/>
        </div>
        <div className="imageWithDescription">
          <img src="https://i.tribune.com.pk/media/images/1730411-trafice-1528401552/1730411-trafice-1528401552.jpg" alt="Image 3" />
          <p><b>ROAD ENCROACHMENT</b></p>
          <p>Location : Junction 7 of Ward 71</p>
          <p>Description : Street Vendors Encroaching Road near Junction</p>
          <p>Status : Investigating</p>
          <br/>
        </div>
        
      </div>
    </div>
  );
}

export default App;