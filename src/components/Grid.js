import { useState } from 'react';
import Sidebar from './Sidebar';
import VideoCard from './Video';
import './Grid.css';

const videos = [
    {
        title: 'Build your AI Startup',
        views: '10K',
        timestamp: '3 hours ago',
        thumbnail: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600',
        channel: 'Adrian Twarog',
        channelImage: 'https://cdn.pixabay.com/photo/2024/08/26/12/29/milky-way-8999255_960_720.jpg',
      },
      {
        title: 'Google Recruiter Talks',
        views: '51K',
        timestamp: '1 day ago',
        thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        channel: 'Fraz',
        channelImage: 'https://cdn.pixabay.com/photo/2024/04/12/08/22/background-8691370_960_720.png',
      },
      {
        title: 'Learn React in 30 Minutes',
        views: '100K',
        timestamp: '2 days ago',
        thumbnail: 'https://images.pexels.com/photos/12039616/pexels-photo-12039616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        channel: 'Traversy Media',
        channelImage: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        title: 'The Future of Web Development',
        views: '500K',
        timestamp: '1 week ago',
        thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
        channel: 'Tech With Tim',
        channelImage: 'https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_960_720.jpg',
      },
      {
        title: 'Sugars makes great things',
        views: '500K',
        timestamp: '1 week ago',
        thumbnail: 'https://cdn.pixabay.com/photo/2023/04/04/01/45/ai-generated-7898220_1280.jpg',
        channel: 'Tech With Tim',
        channelImage: 'https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        title: 'Life is a Mystery',
        views: '500K',
        timestamp: '1 week ago',
        thumbnail: 'https://images.pexels.com/photos/309724/pexels-photo-309724.jpeg',
        channel: 'Tims Diaries',
        channelImage: 'https://images.pexels.com/photos/5989943/pexels-photo-5989943.jpeg?auto=compress&cs=tinysrgb&w=600',
      }, {
        title: 'PC Building makes me crazy',
        views: '500K',
        timestamp: '1 week ago',
        thumbnail: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
        channel: 'Tech With Tim',
        channelImage: 'https://images.pexels.com/photos/935977/pexels-photo-935977.jpeg?auto=compress&cs=tinysrgb&w=600',
      }, {
        title: 'Docker and Kubernates',
        views: '500K',
        timestamp: '1 week ago',
        thumbnail: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
        channel: 'Tech With Tim',
        channelImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
];

const Grid = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="app">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      <div className={`content ${isSidebarCollapsed ? 'expanded' : ''}`}>
        <div className="container-fluid video-grid">
          <div className="row">
            {videos.map((video, index) => (
              <VideoCard
                key={index}
                title={video.title}
                views={video.views}
                timestamp={video.timestamp}
                thumbnail={video.thumbnail}
                channel={video.channel}
                channelImage={video.channelImage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;