import React, { useState } from 'react'
import './Css/Info.css'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

const CardInfo = ({ cardInfo,setCardInfo, data }) => {
    const [inpValue, setInpValue] = useState('')
    const [foundCharacter, setFoundCharacter] = useState([]);

    const find = () => {
        const found = data.find((item) => item.name.toLowerCase().includes(inpValue.toLowerCase()));
        // setFoundCharacter(found)
        // console.log(found);
        setCardInfo(found)
    };

    
    return (
        <div>
            <Container>
                <div className="cardinfo">
                    <div className="top">
                        <img style={{ height: '150px' }} src={`${cardInfo?.thumbnail?.path}.${cardInfo?.thumbnail?.extension}`} alt='' />
                        <div className="info-top-right">
                            <h1>{cardInfo?.name}</h1>
                            <Link to={'/'}>Homepage</Link>
                            <Link className='second' to={cardInfo?.urls?.find(item => item.type == 'wiki')?.url}>Wiki</Link>
                        </div>
                    </div>
                    <div className="info-middle">
                        <p>{cardInfo?.description}</p>
                    </div>
                    <div className="info-bottom">
                        <h3>Comics:</h3>
                        {cardInfo?.comics?.items?.map((item) => {
                            return <div className="comics" key={item.id}>
                                <p>{item.name}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className="find">
                    <h1>Or find a character by name:</h1>
                    <div className="find-bottom">
                        <input onChange={(e) => setInpValue(e.target.value)} type="text" placeholder='Enter name' />
                        <button onClick={find}>Find</button>
                    </div>
                </div>
                {foundCharacter && (
                    <div className="foundCharacterInfo">
                        {/* Display information for the found character here */}
                        <h2>{foundCharacter.name}</h2>
                        {/* Add other information you want to display */}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default CardInfo