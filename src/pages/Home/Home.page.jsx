import React, { Fragment, useEffect, useState } from 'react';
import Nav from '../../components/NavBAr';
import { HomeViewWrapper, HomeViewTitle, HomeViewCardContainer } from './Home.styles';
import Layout from '../../components/Layout';
import Card from '../../components/VideoCard';
//import mockData from '../../utils/youtube-videos-mock.json';

export default function Home() {
  const [videos, setVideos] = useState({});
  const [ error, setError ] = useState('');

  useEffect(() => {
    const params = `?part=snippet&maxResults=25&q=kitties?regionCode=US&key=AIzaSyAU01tDFZrdl3jZBEwnE07OXB5AokODvjY`;
    fetch(`https://www.googleapis.com/youtube/v3/search${params}`)
      .then((res) => res.json())
      .then((res) => {
        const data = res;
        setVideos(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const mapVideos = (videoList) => {
    if(videoList) {
      return videoList.map((video) => {
        return (
          <div key={video.etag}>
          <Card
            photoHeader={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
            description={video.snippet.description}
          />
        </div>
        )
      });
    } else {
      return <p>{error}</p>
    }
  }

  return (
    <Fragment>
      <Nav />
      <Layout>
        <HomeViewWrapper>
          <HomeViewTitle>Welcome to the Challenge!</HomeViewTitle>
          <HomeViewCardContainer>
            {mapVideos(videos.items)}
          </HomeViewCardContainer>
        </HomeViewWrapper>
      </Layout>
    </Fragment>
  );
}
