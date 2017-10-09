import React, { Component } from 'react';
import styled from 'styled-components';

const MyLink = styled.a`
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px 20px;
  background: #0584e7;
  color: rgba(255, 255,255, 0.9);
  border-radius: 3px;
  width: 200px;
  margin-bottom: 20px;
  font-family: sans-serif;
  box-shadow: 0 4px 5px rgba(50,50,50,0.1);
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 0 10px 15px -4px rgba(50,50,50, 0.25), 0 2px 5px rgba(50,50,50, 0.35) ;
    transform: translateY(-2px);
  }
`

const Wrapper = styled.div`
  padding: 30px;
  border-radius: 3px;
  border: 1px solid #eee;
  background: white;
  box-shadow: 0 5px 15px rbga(0,0,0,0.15);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Training = ({data}) => (
  <Wrapper>
    <h2>{data.title}</h2>
    <MyLink href={data.slides}>Slides</MyLink>

    <MyLink href={data.start}>Github - start</MyLink>
    <MyLink href={data.github}>Github - finished</MyLink>
  </Wrapper>
);

export default Training;
