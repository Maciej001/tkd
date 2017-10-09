import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Training from '../components/Training'

const data = {
  beginner: {
    title: "React Introduction",
    slides:  'http://auspicious-profit.surge.sh',
    start: 'http://bit.ly/react-introduction',
    github: 'https://github.com/Maciej001/nasa-pod'
  },
  hoc: {
    title: "Higher Order Components + Redux",
    slides: 'http://left-grape.surge.sh',
    start: 'https://github.com/Maciej001/marsagram-start',
    github: 'https://github.com/Maciej001/marsagram'
  },
  graphql: {
    title: "GraphQL Introduction",
    slides: 'http://spiritual-interest.surge.sh',
    start: 'http://bit.ly/graphql-sb',
    github: 'https://github.com/Maciej001/Pokepedia'
  }
}


const Wrapper = styled.div`
  padding: 40px 2.5% 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: center;
  background: #f3f3f3;
`

const Trainings = styled.section`

`

const PageTitle = styled.h1`
  text-align: center;
  color: rgba(5,132,231, 0.75);
`

const PageSubtitle = styled.h3`
  color: #888;
  font-weight: normal;
`

const Trainers = styled.section`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }
`

const Image  = styled.div`
  box-sizing:border-box;
  background-image: url("${props => props.imgUrl}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 20px;
  overflow: hidden;
`

const TrainerName = styled.h3`
  color: #555;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`

const TrainerTwitter = styled.h3`
  color: rgba(5,132,231, 0.75);
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
`

const TrainerCompany = styled.h4`
  color: #999;
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
`

const TrainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    margin-bottom: 40px;
  }
`

const Trainer = ({imgUrl, name, twitter, company}) =>
  <TrainerWrapper>
    <Image imgUrl={imgUrl} />
    <TrainerName>{name}</TrainerName>
    <TrainerTwitter>{`@${twitter}`}</TrainerTwitter>
    <TrainerCompany>{company}</TrainerCompany>
  </TrainerWrapper>

const IndexPage = () => (
  <Wrapper>
    <PageTitle>Tech(K)now Day Training, London, Oct 2017</PageTitle>
    <PageSubtitle>Powered by</PageSubtitle>
    <Trainers>
      <Trainer imgUrl="https://pbs.twimg.com/profile_images/831594130182635520/XtToU7SS_400x400.jpg" name='Eli Schütze Ramírez' twitter='elibelly' company='Trainline Engineering'/>
      <Trainer imgUrl="https://pbs.twimg.com/profile_images/831594130182635520/XtToU7SS_400x400.jpg" name='Lukasz Gandecki' twitter='lgandecki' company="The Brain Pro"/>
      <Trainer imgUrl="https://pbs.twimg.com/profile_images/856476069532229632/NKrCmOZc_400x400.jpg" name='Oliver Turner' twitter='oliverturner' company="Ticketmaster"/>
      <Trainer imgUrl="https://pbs.twimg.com/profile_images/828559577717305344/PI09k_DZ_400x400.jpg" name='Maciej Nowakowski' twitter='nowakowskipl' company="Codecamps"/>
    </Trainers>
    <Trainings>
      <Training data={data.beginner}/>
      <Training data={data.hoc}/>
      <Training data={data.graphql}/>
    </Trainings>
  </Wrapper>
)

export default IndexPage
