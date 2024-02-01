import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Css/Font.css'
import './Css/Character.css'
import Skeleton from '@mui/material/Skeleton/Skeleton'
import BgAsset from './img/bg asset.png'
import ThorImg from "./img/Thumbnail.png"
import Decoration from './img/Decoration.png'
import Info from './Info.jsx'

function Character({ data }) {
    const [more, setMore] = useState(9)
    const [cardIndex, setCardIndex] = useState(null)
    const [cardInfo, setCardInfo] = useState({})

    const load = () => {
        setMore(more + 9)
    }

    const take = (index) => {
        setCardIndex(index);
        // console.log(cardIndex);
        setCardInfo(data[cardIndex])
        // console.log(cardInfo);
    }


    return (
        <div className='character'>
            <section className='banner'>
                <Container>
                    <Row>
                        <Col lg='6' style={{
                            padding: '0'
                        }}>
                            <div className='bannerleft'>
                                <img style={{ height: '180px' }} src={ThorImg} alt='sjdgc' />
                                <div className='bannertext'>
                                    <h3>Thor</h3>
                                    <p>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
                                    <div className='bannertextbottom'>
                                        <button className='first'>Homepage</button>
                                        <button className='second'>Wiki</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' style={{ padding: '0' }}>
                            <div className='bannerright'>
                                <p>Random character for today! <br />
                                    Do you want to get to know him better?
                                </p>
                                <div className="bannerrightbottom">
                                    <div className="bannerrightbottomtext">
                                        <p>Or choose another one</p>
                                        <button>TRY IT</button>
                                    </div>
                                    <div className="bannerrightbottomimg">
                                        <img src={Decoration} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <Row>
                    <Col style={{ margin: '0', padding: '0' }} lg='7'>
                        <Row>
                            {data.slice(0, more).map((item, index) => {
                                return <Col key={item.id} style={{ padding: '0' }} lg='4'>
                                    <div onClick={() => take(index)} className={`card ${cardIndex === index ? 'selected' : ''}`} key={item.id}>
                                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                                        <h1>{item.name}</h1>
                                    </div>
                                </Col>
                            })}
                        </Row>
                        <button className='more' onClick={load}>LOAD MORE</button>
                    </Col>
                    <Col lg='5'>
                        {cardInfo ? <Info cardInfo={cardInfo} setCardInfo={setCardInfo} data={data}/> : <div className="skeleton">
                            <h3>Please select a character to see information</h3>
                            <div className="skeletonbottom">
                                <div className="bottomtop">
                                    <Skeleton  variant="circular" width={40} height={40} />
                                    <Skeleton className='rectangularskeleton' variant="rectangular" width={326} height={16} />
                                </div>
                                <Skeleton className='bottomrectangular' variant="rectangular" width={375} height={35} />
                                <Skeleton className='bottomrectangular' variant="rectangular" width={375} height={35} />
                                <Skeleton variant="rectangular" width={375} height={35} />
                            </div>
                        </div>}
                    </Col>
                </Row>
            </Container>
            <img className='asset' src={BgAsset} alt="" />
        </div>
    )
}

export default Character