import { useState } from "react";
import axios from 'axios';
import "./user.css"

function UserData(){
    const [Users, setState] = useState([])
    const [Filttered, setData] = useState([])

    const getUsers = () =>{
        axios.get('https://randomuser.me/api/?results=20')
        .then((res)=>{
            // console.log(res.data.results)
            setState(res.data.results)
            setData(res.data.results)
        })
        .catch(()=>{
            console.log("Error")
        })
    }

    return (
    <div style={{padding:'50px'}}>
    <h1>User informations</h1>
    <br/>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero beatae, magni cum expedita ad corporis quia laudantium omnis et natus minima illum id! Libero sit laboriosam reiciendis, odit pariatur aspernatur nobis sed consectetur rem, sapiente maiores nulla soluta excepturi ducimus? Sint doloremque qui cupiditate esse quam architecto quis quaerat aspernatur nisi rem maxime aperiam, impedit consectetur id ipsa maiores accusamus? Sint necessitatibus inventore debitis consectetur nostrum culpa doloremque ab maiores ipsum repudiandae modi tempore repellendus dolor, repellat aperiam doloribus fugiat. Nemo animi temporibus officiis beatae, totam consectetur repudiandae odit sapiente culpa error aspernatur eaque minima sint rem eligendi numquam voluptates accusamus quis consequuntur natus delectus incidunt? Dolore esse accusantium facilis veritatis nihil tempora exercitationem aperiam deserunt hic, et pariatur iste quasi? Delectus suscipit reiciendis animi, eligendi earum soluta esse vitae incidunt voluptatum nam saepe cupiditate quas aliquam ipsam alias illum aspernatur numquam nihil non unde quod, perferendis, voluptate sequi aperiam? Distinctio fugiat dolor velit exercitationem, itaque nemo iste quos tenetur, aliquam porro consectetur? Sapiente officiis, suscipit facilis porro quas repudiandae. Hic mollitia consequuntur unde recusandae necessitatibus nobis doloribus, alias cumque eum, adipisci ratione laudantium labore repellat facere maiores ducimus deserunt atque. Expedita consequuntur, voluptatibus odit incidunt voluptates illum! Esse unde saepe assumenda similique, minima ad tempore cupiditate sit ut voluptatibus. Illum autem neque, maxime modi nulla magni. Ullam, recusandae laborum molestiae voluptatem hic numquam provident possimus ea vero illo illum odio nobis rem similique inventore mollitia consectetur corrupti porro, saepe temporibus esse deleniti, doloribus aspernatur nemo? Error id amet sequi dolore laborum! Qui natus quibusdam unde est dolorum accusamus delectus sed? Aut, suscipit in neque maiores libero ratione debitis, omnis perferendis similique deleniti explicabo provident sequi accusamus placeat sunt architecto vitae, consequatur quia nihil veritatis nulla vel. Aspernatur odit, minima ab asperiores veniam dicta sequi excepturi reprehenderit nemo quibusdam! Inventore animi blanditiis aut eos recusandae consectetur, nulla unde repudiandae suscipit obcaecati itaque ratione nobis dicta eius, consequuntur, mollitia saepe vitae molestias!</p>

     <button onClick={getUsers}>Get User</button>
     {Users.length>0 &&(
        <div className="Radio">
            <input type="radio" id="All" name="fav_language"  onChange={()=>{
                setState(Filttered)

            }}/>
            <label for="All">All</label>
            <br/>
            <input type="radio" id="male" name="fav_language" onChange={()=>{
                setState(Filttered.filter((data)=> data.gender === 'male'))

            }} />
            <label for='male' >Male</label>
            <br/>
            <input type="radio" id="female" name="fav_language" onChange={()=>{
                setState(Filttered.filter((data)=> data.gender === 'female'))

            }}/>
            <label for='female'>Female</label>
        </div>
     )}
     {Users.length>0 && (
        <table width="100%" frame='box' rules="all">
            <thead style={{backgroundColor:"black", color:"white"}}>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>
                    {
                        Users.map((ele)=> {
                            return (
                                <tr>
                                    <th>
                                        <img src={ele.picture.medium} width={100} height={100}  alt="" srcset="" />
                                    </th>
                                    <th>{ele.name.first} {ele.name.last}</th>
                                    <th>{ele.gender}</th>
                                    <th>{ele.email}</th>
                                    <th>{ele.location.city}</th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            
        </table>
     )

     }
    </div>)
}
export default UserData