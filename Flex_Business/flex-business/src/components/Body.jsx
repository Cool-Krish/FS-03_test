import './style.css'
import award from '../Icons/trophy.png'
import ideation from '../Icons/ideation.png'
import sold from '../Icons/sport-car.png'
import twiter from '../Icons/twitter.png'

function MainBody(){

    return <>
        <div className="container">
            <h1>Your Awesome Business Theme</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ipsam in consequuntur quaerat dolor, odit inventore
            <br/> sunt illo aperiam dolore quas voluptatum beatae eum eaque rem officiis magnam omnis. Aspernatur!
            <br/> sunt illo aperiam dolore quas voluptatum beatae eum eaque rem officiis</p>
            <button className='Read'>Read More</button>
        </div>
        <h1 className='feature'>Our Features</h1>
        <div className="Features">
            <div className="subFeatures">
                <img src="https://img.freepik.com/free-photo/responsive-design-layout-internet-concept_53876-124371.jpg?w=1060&t=st=1685904455~exp=1685905055~hmac=a693de8e73989602e4a5b9b25955b6572d3dbc9b332062aca0a221edc913257b" className='sublogo' alt="" srcset="" />
                <h2>Fully Responsive</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet impedit voluptatem cupiditate debitis temporibus quasi<br/>
                 doloremque corporis esse atque optio repudiandae, </p>
                  <a href="#">Read More</a>
            </div>
            <div className="subFeatures">
                <img src="https://img.freepik.com/free-vector/working-office-design_1009-225.jpg?w=740&t=st=1685905500~exp=1685906100~hmac=c0f7f30e0a9ca05df78600ea7ff9ec38c1194636344d81f6ddc184ba557f205e" className='sublogo' alt="" srcset="" />
                <h2>Trusted Author</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet impedit voluptatem cupiditate debitis temporibus quasi<br/>
                 doloremque corporis esse atque optio repudiandae, </p>
                  <a href="#">Read More</a>
            </div>
            <div className="subFeatures">
                <img src="https://img.freepik.com/free-vector/hands-suppoting-gradient-recycle-sign_78370-853.jpg?w=740&t=st=1685905660~exp=1685906260~hmac=897263ae484a5c798944a45ee276ca9b15a4b0ddbde61776390080a18abaa087" className='sublogo' alt="" srcset="" />
                <h2>Reuseable Element</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet impedit voluptatem cupiditate debitis temporibus quasi<br/>
                 doloremque corporis esse atque optio repudiandae, </p>
                  <a href="#">Read More</a>
            </div>
        </div>
        <div className="Info">
            <div className="subInfo">
                <img src= {award} className='infologo' alt="" srcset="" />
                <h1 style={{fontSize: '40px'}}>22</h1>
                <p style={{fontSize: '20px'}}>Aword wining</p>
            </div>
            <div className="subInfo">
                <img src={ideation} className='infologo' alt="" srcset="" />
                <h1 style={{fontSize: '40px'}}>145</h1>
                <p style={{fontSize: '20px'}}>Finished Projects</p>
            </div>
            <div className="subInfo">
                <img src={sold} className='infologo' alt="" srcset="" />
                <h1 style={{fontSize: '40px'}}>349</h1>
                <p style={{fontSize: '20px'}}>Products Sold</p>
            </div>
            <div className="subInfo">
                <img src={twiter} className='infologo' alt="" srcset="" />
                <h1 style={{fontSize: '40px'}}>2456</h1>
                <p style={{fontSize: '20px'}}>Twitter Fans</p>
            </div>
        </div>
    </>
}

export default MainBody;