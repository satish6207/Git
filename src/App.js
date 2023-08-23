
import './App.css';
import Table from './table';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

function App() {
  return (
    <div className='App align-center'>
      <div className='div2 rounded rounded-5 d-flex justify-content-end' style={{height:'600px'}}>
        <div className='d-flex justify-content-between p-2 me-4 mt-4 fnt ' style={{width:'20%'}}>
            <div className='position-relative'>
                <span className='bi bi-plus-square-fill text-white'></span>
            </div>
            <div>
                <span className='bi bi-segmented-nav text-white'></span>
            </div>
            <div className='position-relative'>
              <span className='smal'>C° </span><span className='bi bi-toggle2-off text-white'></span> <span className='smal'> °F</span>
            </div>
        </div>
           <div className='position-absolute d-flex justify-content-between'>   
              <div className='bi bi-cursor text-white'>New York, USA</div>       
                <div className='text-white bi bi-sunrise'>07:19</div>
           </div>
           <div className='text-white d-flex justify-content-between fonttt'>
              <div>
                  <span className='bi bi-sun'> Sunny</span>
              </div>
              <div>
                  <span className='fontt'>27°</span>
              </div>
           </div>
           
          <div className='div3 rounded rounded-5 shadow-lg'>
                <div className='d-flex justify-content-between p-4'>
                  <div>
                    <small className='fw-bold'>Welcome back Isabella!</small><br />
                    <small>Check out today's weather information</small>
                  </div>
                  <div>
                    <span className='bi bi-three-dots'></span>
                    <span><Avatar sx={{ bgcolor: deepOrange[500] }}  variant="rounded">W</Avatar></span>
                  </div>
                </div>
                  <div className='d-flex justify-content-around '>
                    <div className='bg-light rounded rounded-5' style={{height:'215px', width:'85%'}}>
                      <div className='d-flex justify-content-between p-4'>
                        <div><small className=''>Upciming hours</small></div>
                        <div><small className='text-bg-secondary rounded rounded-2 p-1'>Rain precipitation<span className='bi bi-arrow-down-short'></span></small></div>
                      </div> 
                      <div className='d-flex justify-content-around mb-3'>
                        <Table />
                      </div>    
                    </div> 
                  </div>
                  <small className='fw-bold ps-4'>more details of today's weather</small>
                <div className='d-flex justify-content-around p-2 '>
                  <div className='rounded rounded-4 bg-light' style={{height:'100px', width:'28%'}}>
                    <div className='d-flex justify-content-between p-2'>
                      <div><small className=''>Humidity</small></div>
                      <div><span className='icon bi bi-droplet rounded rounded-pill-1 p-1 text-white'></span></div>
                    </div>
                    <div className='d-flex justify-content-center'><small className='fw-bold'>82% bad</small></div>
                    <div className='d-flex justify-content-around p-1'>
                      <div className="progress" style={{width:'25%'}}>
                        <div className="progress-bar" style={{width:'100%'}}></div>
                      </div>
                      <div className="progress" style={{width:'25%'}}>
                        <div className="progress-bar" style={{width:'100%'}}></div>
                      </div>
                      <div className="progress" style={{width:'25%'}}>
                        <div className="progress-bar" style={{width:'50%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className='rounded rounded-4 bg-light' style={{height:'100px', width:'28%'}}>
                    <div className='d-flex justify-content-between p-2'>
                      <div><small className=''>Wind</small></div>
                      <div><span className='icon bi bi-wind rounded rounded-pill-1 p-1 text-white'></span></div>
                    </div>
                    
                    <div className='d-flex justify-content-center w-100 speed'>
                      <span className='bi bi-speedometer2'></span>
                    </div>
                  </div>
                  <div className='rounded rounded-4 bg-light' style={{height:'100px', width:'28%'}}>
                    <div className='d-flex justify-content-between p-2'>
                      <div><small className=''>Precipitation</small></div>
                      <div><span className='icon bi bi-cloud-lightning-rain rounded rounded-pill-1 p-1 text-white'></span></div>
                    </div>
                    <div className='d-flex justify-content-center'><small className='fw-bold'>1.4 cm</small></div>
                  </div>
                </div>
                <div className='d-flex justify-content-around p-2 mt-2'>
                  <div className='rounded rounded-4 bg-light' style={{height:'100px', width:'28%'}}>
                    <div className='d-flex justify-content-between p-2'>
                      <div><small className=''>UV index</small></div>
                      <div><span className='icon bi bi-sun rounded rounded-pill-1 p-1 text-white'></span></div>
                    </div>
                    <div className='d-flex justify-content-center'><small className='fw-bold'>4 medium</small></div>
                    <div className='d-flex justify-content-between p-1'>
                      <div className="progress" style={{width:'25%'}}>
                        <div className="progress-bar" style={{width:'100%'}}></div>
                      </div>
                      <div className="progress" style={{width:'25%'}}>
                        <div className="progress-bar" style={{width:'50%'}}></div>
                      </div>
                      <div className="progress" style={{width:'25%'}}>
                        <div className="progress-bar" style={{width:'0%'}}></div>
                      </div>
                      <div className="progress" style={{width:'25%'}}>
                        <div className="progress-bar" style={{width:'0%'}}></div>
                      </div>
                      <div className="progress" style={{width:'25%'}}>
                        <div className="progress-bar" style={{width:'0%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className='rounded rounded-4 bg-light' style={{height:'100px', width:'28%'}}>
                    <div className='d-flex justify-content-between p-2'>
                      <div><small className=''>Feels like</small></div>
                      <div><span className='icon bi bi-thermometer-half rounded rounded-pill-1 p-1 text-white'></span></div>
                    </div>
                    <div className='d-flex justify-content-center'><small className='fw-bold'>30</small></div>
                  
                      <div className="progress p-1 rounded rounded-2" style={{width:'100%'}}>
                        <div className="progress-bar" style={{width:'75%'}}></div>
                      </div>
                  
                  </div>
                  <div className='rounded rounded-4 bg-light' style={{height:'100px', width:'28%'}}>
                    <div className='d-flex justify-content-between p-2'>
                      <div><small className=''>Chance of rain</small></div>
                      <div><span className='icon bi bi-cloud-snow rounded rounded-pill-1 p-1  text-white'></span></div>
                    </div>
                    <div className='d-flex justify-content-center'><small className='fw-bold'>42%</small></div>
                    <div className="progress p-1 rounded rounded-2" style={{width:'100%'}}>
                        <div className="progress-bar" style={{width:'35%'}}></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
