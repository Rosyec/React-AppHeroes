import { Hero } from '../../../heroes/interfaces/heroe';
import Img from '../../../heroes/helpers/getImages';
import { NavLink } from 'react-router-dom';

export const Slider = ({ data }: Props) => {
    
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-md-6 rounded" style={{ padding:'1em', boxShadow: '0px 20px 50px 0px rgba(0,0,0,0.3)' }}>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {
                                data.map((hero, index) => {
                                    return (
                                        <button
                                            key={hero.id}
                                            type="button"
                                            data-bs-target="#carouselExampleCaptions"
                                            data-bs-slide-to={index}
                                            className={index % data.length === 0 ? "active" : ""}
                                            aria-current="true"
                                            aria-label={`Slide ${index + 1}`}></button>
                                    );
                                })
                            }
                        </div>
                        <div className="carousel-inner">
                            {
                                data.map((hero, index) => {
                                    return (
                                        <div 
                                            key={hero.id} 
                                            className={index % data.length === 0 ? "carousel-item active" : "carousel-item"}
                                            data-bs-slide-to={ index}
                                        >
                                            <img 
                                                src={ Img.find( (img) => img.includes(hero.id)) } 
                                                className="d-block w-100 h-100" 
                                                alt="..."
                                                style={{ borderRadius: '5px' }} />
                                            <div 
                                                className="carousel-caption d-none d-md-block">
                                                <h3> { hero.superhero } </h3>
                                                <NavLink to={ `/app/heroe/${ hero.id }` }  className="btn btn-outline-light" end >Ver más</NavLink>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

interface Props {
    data: Hero[]
}
