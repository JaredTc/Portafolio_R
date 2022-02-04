import work1 from '../assets/img/img-projects/work1.png';
import work2 from '../assets/img/img-projects/work2.png';
import work3 from '../assets/img/img-projects/WORK3.png';
import work4 from '../assets/img/img-projects/work4.png';
import work5 from '../assets/img/img-projects/work5.png';
import work6 from '../assets/img/img-projects/work6.png';



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
                <img src={work2} alt=""/>
            </a>
        
        </div>
        <div className="work__img">
            <img src={work3} alt="" />
        </div>
        <div className="work__img">
            <img src={work4} alt="" />
        </div>
        <div className="work__img">
            <img src={work5} alt="" />
        </div>
        <div className="work__img">
            <img src={work6} alt="" />
        </div>
    </div>
</section>  );
}

export default WorkScreen;