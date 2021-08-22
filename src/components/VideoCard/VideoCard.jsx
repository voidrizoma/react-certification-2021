import React from 'react';
import {
  CardWrapper,
  CardButton,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
} from './VideoCard.styles';

function VideoCard(props) {
  const { photoHeader, title, description } = props;

  return (
    <CardWrapper>
      <CardButton>
        <CardImage src={photoHeader} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardBody>
      </CardButton>
    </CardWrapper>
  );
}

export default VideoCard;
