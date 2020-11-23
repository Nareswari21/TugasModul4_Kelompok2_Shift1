import React, { useReducer } from 'react'
import styled from 'styled-components'

const initialState = 0

const reducer = (state, action) => {
    switch (action){
        case 'tambah': return state + 1
        case 'kurang' : return state - 1
        default:
            return state
    }
}
const Container = styled.div`
background-color: #d1d1d1;
border-radius: 20px;
box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
color: #B3B8CD;
position: relative;
width: 50%;
margin: auto;
margin-top: 10px;
`
const Button = styled.button
`
 color: white;
 height: 50px;
 width: 70px;
 border:none;
 border:solid 2px white;
 border-radius: 5px;
 &:hover {
  border:solid 2px black;
  cursor: pointer;
 }
 background: rgba(255, 255, 255,0);
 font-size: 18px;
 margin: 10px 20px;
 background-color: #e7e7e7; color: black;
`
const Img = styled.img`
 border: 2px solid #cb0303;
 border-radius: 50%;
 padding: 5px;
 width: 60%;
 margin: 20px;

`
const Col = styled.div
  `
 display: table-cell;
 text-align: center;
`

const Row = styled.div
  `
 display: table;
 padding:  0.5em 0.5em;
 width: 100%;
 table-layout: fixed;
 border-spacing: 2px;
`

function HookReducer() {

    const[count, dispatch] = useReducer(reducer, initialState)
    return (
            <Row>
                <Col>
                    <p>Tugas Modul 4 Kelompok 2</p>
                    <Container>
                        <Img top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                    </Container>
                    <p>Action Figure</p>
                    <p>Harga</p>
                    <p>Rp. 157.000</p>
                    <p>Jumlah</p>
                    <Row>
                        <Col>
                            <Button onClick={() => dispatch('tambah')}>+</Button>
                        </Col>
                        <Col>
                            {count}
                        </Col>
                        <Col> 
                            <Button onClick={() => dispatch('kurang')}>-</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
    )
}

export default HookReducer