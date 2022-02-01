import work1 from '../assets/img/work1.jpg';
import work2 from '../assets/img/work2.jpg';
import work3 from '../assets/img/work3.jpg';
import work4 from '../assets/img/work4.jpg';
import work5 from '../assets/img/work4.jpg';

const WorkScreen = () => {
    return ( <section className="work section" id="work">
    <h2 className="section-title">Work</h2>

    <div className="work__container bd-grid">
        <div className="work__img">
         <a  target="blank">   
             <img src={work1} alt=""  /></a>
        </div>
        <div className="work__img">
            <a target="blank">
                <img src={work1} alt=""/>

            </a>
        
        </div>
        <div className="work__img">
            <img src={work3} alt="" />
        </div>
        <div className="work__img">
            <img src={work2} alt="" />
        </div>
        <div className="work__img">
            <img src={work2} alt="" />
        </div>
        <div className="work__img">
            <img src={work2} alt="" />
        </div>
    </div>
</section>  );
}

export default WorkScreen;