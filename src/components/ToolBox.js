import React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';

const MusicRoute = () => <Text>Mainow</Text>;

const AlbumsRoute = () => <Text>Moophosts</Text>;

const RecentsRoute = () => <Text>Hieaw</Text>;

const ToolBox = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'music', title: 'Mainow', icon: 'queue-music'},
    {key: 'albums', title: 'Moophosts', icon: 'album'},
    {key: 'recents', title: 'Hieaw', icon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default ToolBox;
