import React, { useEffect, useState } from 'react'
import './ComicsInfo.css'
import { useNavigate, useParams } from 'react-router-dom'
import Bannerimg from './img/Banner.svg'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios'
import Xmen from './img/x-men.png'

function ComicsInfo() {
    const [comicsInner, setComicsInner] = useState({})
    const params = useParams()
    console.log(params);
    const navigate = useNavigate()
    // console.log(params);

    const inner = () => {
        axios.get(`https://gateway.marvel.com/v1/public/comics/${params.id}?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92`).then(res => setComicsInner(res.data.data.results[0]))
    }


    useEffect(() => {
        inner()
    }, [params.id])

    console.log(comicsInner, 'comics state');

    return (
        <>
            <Container>
                <div className="banner2">
                    <img src={Bannerimg} alt="" />
                </div>
                <Row>

                    <Col lg='3'>
                        <div className="comics-info-left">
                            <img src={`${comicsInner?.thumbnail?.path}.${comicsInner?.thumbnail?.extension}`} style={{width:"200px"}} alt="Picture not find" />
                        </div>
                    </Col>

                    <Col lg='9'>
                        <div className="comics-info-right">
                            <div className="top-text">
                                <h1>{comicsInner.title}</h1>
                                <div className="goback" onClick={() => navigate('/Comics')}>
                                    <p>Back to all</p>
                                </div>
                            </div>
                            <div className="top-bottom">
                                <h4>{comicsInner.textObjects?.[0]?.text}</h4>
                                <p className='pages'>{comicsInner?.pagecount}</p>
                                <p className="language">{comicsInner?.textObjects?.[0]?.language}</p>
                                <p className='price'>{comicsInner?.prices?.[0]?.price}$</p>
                            </div>
                        </div>
                    </Col>
                </Row>


            </Container>
        </>

    )
}

export default ComicsInfo