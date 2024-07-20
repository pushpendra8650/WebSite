import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Emily Williams</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae praesentium nihil quis dignissimos fugit ducimus similique doloremque, ullam quaerat adipisci reprehenderit, deserunt laborum, officiis magni! Distinctio modi eos provident!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolorum laboriosam quasi placeat pariatur recusandae adipisci. Libero voluptas error repellendus ab molestias necessitatibus, eum neque quisquam autem debitis dolores aut?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Emily Williams</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum optio reprehenderit rem hic tempora perferendis similique laudantium tenetur doloribus minima, eaque quibusdam! Quia, voluptatem! Animi aperiam velit itaque dicta minima?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dignissimos recusandae molestias voluptatem atque, libero veniam, distinctio et magni perferendis doloremque numquam dolores accusantium dolorum. Nobis facilis culpa suscipit quos?</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
