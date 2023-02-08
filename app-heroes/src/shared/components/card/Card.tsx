import { Hero } from '../../../heroes/interfaces/heroe'
import Img from '../../../heroes/helpers/getImages';
import './Card.css';

export const Card = ({ data }: Props) => {
    return (
        <div className="">
            <div className="card">
                <img src={Img.find((img) => img.includes(data.id))} className="card-img-top" alt="rover" style={{ height: '100%' }} />
                <div className="card-body_cb p-3">
                    <span className={`tag ${data.publisher === 'DC Comics' ? 'tag-teal' : 'tag-purple'}`}> {data.publisher} </span>
                    <h4 className='mx-5 mt-3 fw-bold'> {data.superhero} </h4>
                    <p> {data.characters} </p>
                    <small> {data.first_appearance} </small>
                </div>
            </div>
        </div>
    )
}

interface Props {
    data: Hero
}
