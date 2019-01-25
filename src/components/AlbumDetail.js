import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

type Props = {
  album: object,
};

const AlbumDetail = (props: Props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
