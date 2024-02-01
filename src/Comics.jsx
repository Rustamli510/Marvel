import React, { useEffect, useState } from 'react'
import './Css/Comics.css'
import Bannerimg from './img/Banner.svg'
import { Col, Container, Row } from 'reactstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Comics() {
  const [comicsData, setComicsData] = useState();

  const comicss = () => {
    axios.get('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92').then(res => setComicsData(res.data.data.results), console.log(comicsData, 'comicsData'))

  }

  useEffect(() => {
    comicss()
  }, [])

  return (
    <div>
      <Container>
        <div className="banner2">
          <img src={Bannerimg} alt="" />
        </div>
        <Row>
          {comicsData?.map((item) => {
            return <Col lg='3' key={item.id}>
              <div className="comics-div">
                <Link to={`/${item.id}`}><img src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`} alt="" /></Link>
                <div className="comics-div-bottom">
                  <h1>{item?.title}</h1>
                  <p>{item?.prices[0]?.price}$</p>
                </div>
              </div>
            </Col>
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Comics