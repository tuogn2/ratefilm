import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import style from './film.module.scss'
import Tagfilm from "~/Component/Tagfilm";
const cx = classNames.bind(style)
function Film() {
    const [inforFilms, setinforfilm] = useState([{}]);
    const userid = useLocation();
    const [numberpage,setnumberpage] = useState(1);
    window.scrollTo(0, 0);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3${userid.pathname}?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=${numberpage}`)
            .then((response) => response.json())
            .then((data) => setinforfilm(data.results));
        
    }, [userid,numberpage])
    useEffect(()=>{
        if(numberpage!=1){
            setnumberpage(1);
        }
    },[userid])
    const number =['5','4','3','2','1'];
    return (<>
        <div className={cx('container')}>
           <Tagfilm inforFilms={inforFilms}/>
           <div className={cx('btnpage')}>
                {
                    number.map((id)=>{
                        let boole = false;
                        if(id == numberpage){
                            boole=true;
                        }
                        return (
                            <button key={id} onClick={()=>setnumberpage(id)} className={cx({isselect: boole})}>{id}</button>
                        )
                    }
                    )
                }
               
           </div>
        </div>
     
    </>);
}

export default Film;